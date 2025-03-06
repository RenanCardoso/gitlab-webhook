require('dotenv').config();  // Carrega variáveis de ambiente do arquivo .env

module.exports = {
    GITLAB_API_URL: 'https://gitlab.com/api/v4',
    GITLAB_PROJECTS: [
        {
            projectId: process.env.GITLAB_PROJECT_ID_1, // Carrega o project ID do .env
            accessToken: process.env.GITLAB_ACCESS_TOKEN_1, // Carrega o access token do .env
        },
        {
            projectId: process.env.GITLAB_PROJECT_ID_2,
            accessToken: process.env.GITLAB_ACCESS_TOKEN_2,
        },
        {
            projectId: process.env.GITLAB_PROJECT_ID_3,
            accessToken: process.env.GITLAB_ACCESS_TOKEN_3,
        },
        // Adicione mais projetos conforme necessário
    ],
};
