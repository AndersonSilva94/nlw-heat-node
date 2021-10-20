![NLWHEAT - 2560x1080](https://user-images.githubusercontent.com/52717632/138005308-c406187c-0b83-47e3-822a-38cc224781d4.png)
# Projeto Do/While - Trilha NodeJs (NLW Heat) :rocket:

## Instruções para clonar o projeto
1. Clone o repositório
  * `git clone git@github.com:AndersonSilva94/nlw-heat-node.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd nlw-heat-node`

2. Instale as dependências
  * `npm install` ou `yarn install`

3. Você precisará de três variáveis de ambiente
  * Primaramente, crie um arquivo `.env` na raiz do projeto;
  * Em seguida entre no link a seguir e siga os passos para criar uma autenticação com o github:
    * `https://github.com/settings/developers`
    * OBS 1: em `Homepage URL`, inserir:
      * `http://localhost:4000`;
    * OBS 2: em `Authorization callback URL`, inserir:
      * `http://localhost:4000/signin/callback`;
  * Após a criação, é só buscar as chaves CLIENT ID e CLIENT SECRET (basta clicar em gerar um novo client secret)
  * No arquivo `.env`, crie as constantes, concatenando com as informações encontradas:
    * `GITHUB_CLIENT_SECRET=[client id]`
    * `GITHUB_CLIENT_ID=[client secret]`
  * Você precisará de um token secret também, basta entrar no seguinte link, escrever um texto a sua escolha e clicar em `hash darling, hash!`:
    * `http://www.md5.cz/`
  * No arquivo `.env`, adicione mais uma constante:
    * `JWT_SECRET=[token gerado]`

4. Rode a aplicação
  * `npm run dev` ou `yarn dev`

## O que será desenvolvido?
Nesta primeira parte da trilha Impulse desenvolveremos o back-end da aplicação. Será construída usando Node.Js, Typescript, Prisma ORM (que interage com o banco de dados) e Socket.IO (para gerenciar a comunicação em tempo real)

## Dia 1 - NodeJs :rocket:
- [x]  Criar projeto
- [x]  Instalar Express, Prisma, Typescript
- [x]  Configurar Github OAuth
- [x]  Criar rota login github
- [x]  Criar rota callback
- [x]  Autenticação usuário recebendo o código
- [x]  Cadastro de mensagem
- [x]  Configuração websocket
- [x]  Retornar 3 últimas mensagens
- [x]  Criar profile do user

---
:keyboard: com :purple_heart: por [Anderson Silva (Andy)](https://www.linkedin.com/in/andssilva/) 😊