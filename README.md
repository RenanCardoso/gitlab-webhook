
# Webhook GitLab - Adicionar Comentários em Issues

Este projeto implementa um servidor Express que recebe webhooks do GitLab e adiciona automaticamente um comentário em uma issue sempre que a label **"status: Em andamento"** for atribuída à issue pela primeira vez.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criar o servidor.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
- **GitLab API**: Para interagir com o GitLab, adicionando comentários às issues.

## Funcionalidade

1. O servidor recebe webhooks do GitLab quando uma **issue** é atualizada.
2. Verifica se a label **"status: Em andamento"** foi atribuída à issue pela primeira vez.
3. Se a label estiver presente e for a primeira vez, um comentário é adicionado à issue.
4. Utiliza variáveis de ambiente para configurar múltiplos projetos GitLab e tokens de acesso.

## Estrutura do Projeto

- **`server.js`**: Arquivo principal onde o servidor Express é configurado e as rotas são definidas.
- **`constants.js`**: Contém as configurações de projetos GitLab (ID do projeto e tokens de acesso).
- **`gitlab.js`**: Funções auxiliares para interagir com a API do GitLab, como adicionar comentários e verificar se um comentário já foi adicionado.
- **`messages.js`**: Contém o conteúdo do comentário a ser adicionado nas issues.
- **`.env`**: Arquivo de configuração de variáveis de ambiente para armazenar os tokens de acesso e IDs dos projetos.
- **`package.json`**: Gerencia as dependências do projeto.

## Pré-requisitos

- Node.js (versão 14 ou superior).
- Conta no GitLab com permissão para acessar os projetos e adicionar comentários.
- Instalação de dependências usando `npm` ou `yarn`.

## Instalação

### 1. Clonando o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/RenanCardoso/gitlab-webhook.git
cd gitlab-webhook
```

### 2. Instalando Dependências

Instale as dependências do projeto:

```bash
npm install
```

### 3. Configurando Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente para configurar os tokens de acesso e IDs dos projetos GitLab.

Exemplo de configuração do `.env`:

```bash
# Projeto 1
GITLAB_PROJECT_ID_1=12349876
GITLAB_ACCESS_TOKEN_1=glpat-xxxxxxxxxxxxxx

# Projeto 2
GITLAB_PROJECT_ID_2=12345678
GITLAB_ACCESS_TOKEN_2=glpat-yyyyyyyyyyyyyy

# Projeto 3
GITLAB_PROJECT_ID_3=87654321
GITLAB_ACCESS_TOKEN_3=glpat-zzzzzzzzzzzzz
```

### 4. Iniciando o Servidor

Inicie o servidor com o comando:

```bash
npm start
```

O servidor estará ouvindo na porta **3000**.

Se você estiver usando o **ngrok** para expor seu servidor local para a internet, execute:

```bash
ngrok http 3000
```

Isso fornecerá uma URL pública que pode ser configurada no GitLab para os webhooks.

## Configurando o Webhook no GitLab

1. Acesse o seu projeto no GitLab.
2. Vá para **Settings** > **Webhooks**.
3. No campo **URL**, insira a URL pública fornecida pelo **ngrok** (ex: `https://xxxxxx.ngrok.io/webhook`).
4. Selecione os eventos que deseja monitorar. Para este caso, certifique-se de selecionar **Issues events**.
5. Salve o webhook.

## Como Funciona

- Sempre que uma **issue** for atualizada e receber a label **"status: Em andamento"**, o servidor verificará se um comentário já foi adicionado. Se não, ele adicionará automaticamente o comentário configurado no arquivo **`messages.js`**.
  
- O código verifica todos os projetos configurados no arquivo `.env` e garante que a operação seja realizada no projeto correto com o token adequado.

## Contribuindo

Se você deseja contribuir com melhorias ou correções para o projeto, siga as etapas:

1. Faça um **fork** do repositório.
2. Crie uma nova **branch** para suas modificações: `git checkout -b minha-feature`.
3. Faça suas alterações e **commit**.
4. Envie as alterações para o seu repositório forkado.
5. Abra um **pull request**.

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

Feito com ☕ e ❤️ por [Renan](https://github.com/RenanCardoso).