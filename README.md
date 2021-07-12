# Desafio - Node | Empresa Wa Project
- https://waproject.com.br/


## O objetivo do teste é:
- Construir uma API para manutenção de laboratórios e exames.


## Contexto
Desenvolver uma aplicação para as seguintes situações:
- Laboratório:
  - Cadastrar um novo laboratório;
  - Obter uma lista de laboratórios ativos;
  - Atualizar um laboratório existente;
  - Remover logicamente um laboratório ativo.
- Exames:
  - Cadastrar um novo exame;
  - Obter uma lista de exames ativos;
  - Atualizar um exame existente;
  - Remover logicamente um exame ativo.
- Associação:
  - Associar um exame ativo à um laboratório ativo;
  - Desassociar um exame ativo de um laboratório ativo;

**Importante:**
  - Um exame pode estar associado a mais de um laboratório;
  - O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.


### Informações
- Laboratório
  - Nome
  - Endereço
  - Status [ativo, inativo]
- Exame
  - Nome
  - Tipo [analise clinica, imagem]
  - Status [ativo, inativo]


## Funcionalidades extras
- Possibilidade de executar cadastro, atualização e remoção em lote;
- Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.


## Requisitos técnicos
- Desenvolver usando *Node.js*.
- Serviço deve respeitar os princípios RESTFul.
- Criar um `README.md` (arquitetura, instruções de uso, entre outros).


## Diferenciais
- Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc).
- Configurar a aplicação para rodar em um container.
- Documentação da API.


## 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
- [JavaScript]
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Knex.js ](https://knexjs.org/#Installation-node)
- [node-postgres](https://node-postgres.com/)
- [Express](https://www.npmjs.com/package/express)
- [Modem](https://www.npmjs.com/package/modem)
- [Dontenv](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)

<h4 align="center"> 
	🚧  Desafio Finalizado... 🚀 🚧
</h4>


### ✅ Pré-requisitos e como rodar a aplicação/testes.
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor para trabalhar com o código como:
- [VSCode](https://code.visualstudio.com/)


## 🎲 Rodando o Back End (servidor)
### Clone este repositório
$ git clone https://github.com/CassioRubens-CR/Challenge-NodeJS-WA-Project.git

### Acesse a pasta do projeto no terminal/cmd
$ cd ????????

### Instale as dependências
$ npm install

### Crie/Altere o arquivo `.env` de acordo com as configurações do seu MySQL

### Execute a aplicação em modo de desenvolvimento
$ npm run dev

### O servidor inciará na porta:3000 - acesse <http://localhost:3000>


✅ Breve síntese da aplicação

### Rotas Laboratório:
- Listar todos laboratório [get] </laboratories>
  * No body

- Cadastrar novo laboratório [post] </laboratories>
  {
    "name": "Nome do laboratório",
    "address": "Endereço",
    "status": true ou false,
  }

- Listar todos laboratórios ativos [get] </laboratories/active>
  * No body

- Atualizar laboratório existente [put] </laboratories/:id>
  {
    "name": "Nome do laboratório",
    "address": "Endereço",
  }

- Remover logicamente um laboratório ativo [patch] </laboratories/:id>
  * No body


### Rotas Exames:
- Listar todos exames [get] </exams>
  * No body

- Cadastrar novo exame [post] </exams>
  {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true ou false,
  }

- Listar todos exames ativos [get] </exams/active>
  * No body

- Atualizar exame existente [put] </exams/:id>
 {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true ou false,
  }

- Remover logicamente um exame ativo [patch] </exams/:id>
  * No body


### Rotas associação:
- Lista de associação por laboratório [get] </association/:laboratory_id>
  * No body

- Lista de associação por exame [get] </association/:exam_id/exam>
  * No body

- Criar associação [post] </association/:laboratory_id>
 {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true,
  }

- Desassociar [delete] </association/:laboratory_id>
  {
    "name": "Nome do exame",
  }


## ✅ Demonstração da aplicação
### Publicação do ambiente em um serviço cloud de hospedagens - acesse <>


## ✅ Autor
### Cássio Rubens 🚀
- https://github.com/CassioRubens-CR
- https://www.linkedin.com/in/cássio-rubens
