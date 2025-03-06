const axios = require('axios');
const { GITLAB_API_URL } = require('./constants');

/**
 * Adiciona um comentário em uma issue no GitLab
 * @param {string} projectId - ID do projeto no GitLab
 * @param {string} issueId - ID da issue onde o comentário será adicionado
 * @param {string} token - Token de acesso do GitLab
 * @param {string} message - Mensagem do comentário
 */
async function addCommentToIssue(projectId, issueId, token, message) {
    try {
        const commentUrl = `${GITLAB_API_URL}/projects/${projectId}/issues/${issueId}/notes`;
        const commentData = { body: message };

        const response = await axios.post(commentUrl, commentData, {
            headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': token
            }
        });

        console.log('✅ Comentário adicionado com sucesso!', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ Erro ao adicionar comentário:', error.response?.data || error.message);
        throw error;
    }
}

/**
 * Verifica se já existe um comentário específico na issue
 * @param {string} projectId - ID do projeto no GitLab
 * @param {string} issueId - ID da issue a ser verificada
 * @param {string} token - Token de acesso do GitLab
 * @param {string} message - Texto do comentário a ser procurado
 */
async function hasCommentBeenAdded(projectId, issueId, token, message) {
    try {
        const commentsUrl = `${GITLAB_API_URL}/projects/${projectId}/issues/${issueId}/notes`;
        const response = await axios.get(commentsUrl, {
            headers: {
                'PRIVATE-TOKEN': token
            }
        });

        // Verifica se algum comentário contém a mensagem específica
        const existingComment = response.data.some(comment => comment.body.includes(message));
        return existingComment;
    } catch (error) {
        console.error('❌ Erro ao verificar comentários:', error.response?.data || error.message);
        throw error;
    }
}

module.exports = { addCommentToIssue, hasCommentBeenAdded };
