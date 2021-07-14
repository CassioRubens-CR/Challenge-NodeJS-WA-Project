# Desafio - NodeJS | Empresa Wa Project
- https://waproject.com.br

___
## Sumário
1. [Objetivo](#objetivo-do-teste)
2. [Contexto](#contexto)
3. [Importante](#importante)
4. [Informações](#informações)
5. [Funcionalidades extras](#funcionalidades-extras)
6. [Requisitos técnicos](#requisitos-técnicos)
7. [Diferenciais](#diferenciais)
8. [Tecnologias](#tecnologias)
9. [Pré-requisitos](#pré-requisitos)
10. [Rodando o Back-End localmente](#clone-o-repositório)
11. [Breve síntese da aplicação](#breve-síntese-da-aplicação)
12. [Demonstração da aplicação](#demonstração-da-aplicação)
13. [Rodando o Back-End em um serviço cloud de hospedagens](#antes-de-começar)
14. [Autor](#autor)
___

<br>

## Objetivo do teste:
- Construir uma API para manutenção de laboratórios e exames.
___

<br>

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

### Importante
  - Um exame pode estar associado a mais de um laboratório;
  - O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.


### Informações
- Laboratório
  - Nome
  - Endereço
  - Status [`ativo ou inativo`]
- Exame
  - Nome
  - Tipo [`analise clinica ou imagem`]
  - Status [`ativo ou inativo`]


### Funcionalidades extras
- Possibilidade de executar cadastro, atualização e remoção em lote;
- Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.


### Requisitos técnicos
- Desenvolver usando *Node.js*.
- Serviço deve respeitar os princípios RESTFul.
- Criar um `README.md` (arquitetura, instruções de uso, entre outros).


### Diferenciais
- Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc).
- Configurar a aplicação para rodar em um container.
- Documentação da API.
___
> ## Desafio Finalizado... 🚀🚀🚀
___

<br>

## 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
- JavaScript
- [Nodejs](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Knexjs ](https://knexjs.org/#Installation-node)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dontenv](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)
- [node-postgres](https://node-postgres.com/)
- [Heroku](https://www.heroku.com/)

<br>

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor para trabalhar com o código como:
- [VSCode](https://code.visualstudio.com/)
___

<br>

## 🎲 Rodando o Back End Localmente
### Clone o repositório:
```
git clone https://github.com/CassioRubens-CR/Challenge-NodeJS-WA-Project.git
```

### Acesse a pasta raiz do projeto e instale as dependências:
```
npm install
```


### Crie/Altere o arquivo `.env` de acordo com as configurações do seu MySQL
```json
MYSQL_USER=SEU_USUARIO
MYSQL_PASSWORD=SUA_SENHA
MYSQL_SCHEMA=NOME_DO_SEU_DB
HOSTNAME=LOCALHOST
```

### Execute a aplicação em modo de desenvolvimento
```
npm run dev
```
#### O servidor inciará na porta:3000 - <http://localhost:3000>
___

<br>

## Breve síntese da aplicação 


### Rotas Laboratórios:
> Listar todos laboratório `GET` ***.../laboratories***
```json
  No body
```

> Cadastrar laboratório `POST` ***.../laboratories***
```json
{
  "name": "Nome do laboratório",
  "address": "Endereço",
  "status": true ou false,
}
```

> Cadastrar laboratório em lote `POST` ***.../laboratories/batch***
```json
[
  {
    "name": "Nome do laboratório",
    "address": "Endereço",
    "status": true ou false,
  },
  {
    "name": "Nome do laboratório",
    "address": "Endereço",
    "status": true ou false,
  },
  {
    "name": "Nome do laboratório",
    "address": "Endereço",
    "status": true ou false,
  }
]
```

> Listar todos laboratórios ativos `GET` ***.../laboratories/active***
```json
  No body
```

> Atualizar laboratório existente `PUT` ***.../laboratories/:id***
```json
{
  "name": "Nome do laboratório",
  "address": "Endereço",
}
```

> Remover logicamente um laboratório ativo `PATCH` ***.../laboratories/:id***
```json
  No body
```
<br>

### Rotas Exames:
> Listar todos exames `GET` ***.../exams***
```json
  No body
```

> Cadastrar exame `POST` ***.../exams***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true ou false,
}
```

> Cadastrar exame em lote `POST` ***.../exams/batch***
```json
[
  {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true ou false,
  },
  {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true ou false,
  },
  {
    "name": "Nome do exame",
    "type": "analise clinica ou imagem",
    "status": true ou false,
  }
]
```

> Listar todos exames ativos `GET` ***.../exams/active***
```json
  No body
```

> Atualizar exame existente `PUT` ***.../exams/:id***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true ou false,
}
```

> Remover logicamente um exame ativo `PATCH` ***.../exams/:id***
```json
  No body
```
<br>

### Rotas Associação:
> Lista de associação por laboratório `GET` ***.../association/:laboratory_id***
```json
  No body
```

> Lista de associação por nome do exame `GET` ***.../association***
```json
{
  "name": "Nome do exame"
}
```

> Criar associação `POST` ***.../association/:laboratory_id***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true,
}
```

> Desassociar `DELETE` ***.../association/:laboratory_id/:exam_id***
```json
  No body
```
___

<br>

## Demonstração da aplicação

### Publicação do ambiente em um serviço cloud de hospedagens

- [Lista de Laboratórios](https://pacific-retreat-64515.herokuapp.com/laboratories)
- [Lista de Laboratórios Ativos](https://pacific-retreat-64515.herokuapp.com/laboratories/active)
- [Lista de Exames](https://pacific-retreat-64515.herokuapp.com/exams)
- [Lista de Exames Ativos](https://pacific-retreat-64515.herokuapp.com/exams/active)
___

<br>

## 🎲 Rodando o Back End em um serviço cloud de hospedagens

### Antes de começar:
### instale em sua máquina alguma ferramenta do tipo: 
> [Insomnia](https://insomnia.rest)

Utilize a seguinte `URL`:
```
https://pacific-retreat-64515.herokuapp.com
```

Complete a `URL` de acordo com as rotas descritas no campo:
> [Breve síntese da aplicação](#breve-síntese-da-aplicação)
___

<br>

### Autor
### Cássio Rubens 🚀
- https://github.com/CassioRubens-CR
- https://www.linkedin.com/in/cássio-rubens
