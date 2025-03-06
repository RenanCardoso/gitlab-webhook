require('dotenv').config();  // Carrega variáveis de ambiente

const express = require('express');
const bodyParser = require('body-parser');
const { addCommentToIssue, hasCommentBeenAdded } = require('./gitlab');
const { GITLAB_PROJECTS } = require('./constants'); // Importa os projetos do arquivo constants
const { issueInProgressComment } = require('./messages'); // Mensagem do comentário

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const data = req.body;

    if (data.object_kind === 'issue' && data.object_attributes) {
        const issue = data.object_attributes;

        if (issue.action === 'update') {
            const labels = issue.labels.map(label => label.title);
            if (labels.includes('status: Em andamento')) {
                console.log(`✅ Issue #${issue.iid} agora tem a label "status: Em andamento"`);

                try {
                    // Iterar sobre os projetos e verificar se o projeto ID corresponde ao recebido no webhook
                    for (const project of GITLAB_PROJECTS) {
                        // Verifica se o webhook é para o projeto atual
                        if (issue.project_id == project.projectId) {
                            console.log(`🔐 Projeto identificado: ${project.projectId}`);

                            // Verificar se o comentário já foi adicionado
                            const isCommentAdded = await hasCommentBeenAdded(project.projectId, issue.iid, project.accessToken, issueInProgressComment);

                            if (!isCommentAdded) {
                                // Se o comentário ainda não foi adicionado, adicionar o comentário
                                await addCommentToIssue(project.projectId, issue.iid, project.accessToken, issueInProgressComment);
                            } else {
                                console.log('⚠️ Comentário já foi adicionado anteriormente.');
                            }
                        }
                    }
                } catch (error) {
                    console.error('❌ Erro ao verificar ou adicionar o comentário:', error);
                }
            }
        }
    }

    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`✅ Servidor ouvindo na porta ${port}`);
});
