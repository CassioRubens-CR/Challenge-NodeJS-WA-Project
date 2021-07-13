# Desafio - Node | Empresa Wa Project
- https://waproject.com.br

<br>

___
## Sumário
1. [Objetivo](#objetivo-do-teste)
2. [Contexto](#contexto)
3. [Importante](#importante)
4. [Informações](#informações)
5. [Funcionalidades extras](#funcionalidades-extras)
6. [Requisitos técnicos](#requisitos-técnicos)
7. [Diferenciais](#diferenciais)
8. [Tecnologias](#🛠-tecnologias)
9. [Pré-requisitos](#✅-pré-requisitos)
10. [Rodando o Back End Localmente](#🎲-rodando-o-back-end-localmente)
11. [Breve síntese da aplicação](#✅-breve-síntese-da-aplicação)
12. [Demonstração da aplicação](#✅-demonstração-da-aplicação)
13. [Rodando o Back End em um serviço cloud de hospedagens](#🎲-rodando-o-back-end-em-um-serviço-cloud-de-hospedagens)
14. [Autor](#cássio-rubens-🚀)
___

<br>

## Objetivo do teste:
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

> ## Desafio Finalizado... 🚀🚀🚀

<br>

### ✅ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor para trabalhar com o código como:
- [VSCode](https://code.visualstudio.com/)

<br>

## 🎲 Rodando o Back End Localmente
### Clone o repositório:
> $ git clone https://github.com/CassioRubens-CR/Challenge-NodeJS-WA-Project.git


### Acesse a pasta raiz do projeto e instale as dependências:
> $ npm install


### Crie/Altere o arquivo `.env` de acordo com as configurações do seu MySQL
```json
MYSQL_USER=SEU_USUARIO
MYSQL_PASSWORD=SUA_SENHA
MYSQL_SCHEMA=NOME_DO_SEU_DB
HOSTNAME=LOCALHOST
```

### Execute a aplicação em modo de desenvolvimento
> $ npm run dev


### O servidor inciará na porta:3000 - <http://localhost:3000>

<br> 
<br>

### ✅ Breve síntese da aplicação 

<br>

### Rotas Laboratório:
> Listar todos laboratório `get` ***.../laboratories***
```json
  No body
```

> Cadastrar novo laboratório `post` ***.../laboratories***
```json
{
  "name": "Nome do laboratório",
  "address": "Endereço",
  "status": true ou false,
}
```
> Listar todos laboratórios ativos `get` ***.../laboratories/active***
```json
  No body
```

> Atualizar laboratório existente `put` ***.../laboratories/:id***
```json
{
  "name": "Nome do laboratório",
  "address": "Endereço",
}
```

> Remover logicamente um laboratório ativo `patch` ***.../laboratories/:id***
```json
  No body
```
<br>

### Rotas Exames:
> Listar todos exames `get` ***.../exams***
```json
  No body
```

> Cadastrar novo exame `post` ***.../exams***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true ou false,
}
```

> Listar todos exames ativos `get` ***.../exams/active***
```json
  No body
```

> Atualizar exame existente `put` ***.../exams/:id***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true ou false,
}
```

> Remover logicamente um exame ativo `patch` ***.../exams/:id***
```json
  No body
```
<br>

### Rotas Associação:
> Lista de associação por laboratório `get` ***.../association/:laboratory_id***
```json
  No body
```

> Lista de associação por exame `get` ***.../association/:exam_id/exam***
```json
  No body
```

> Criar associação `post` ***.../association/:laboratory_id***
```json
{
  "name": "Nome do exame",
  "type": "analise clinica ou imagem",
  "status": true,
}
```

> Desassociar `delete` ***.../association/:laboratory_id***
```json
{
  "name": "Nome do exame",
}
```
<br>

### ✅ Demonstração da aplicação

### Publicação do ambiente em um serviço cloud de hospedagens

- [Lista de Laboratórios](https://pacific-retreat-64515.herokuapp.com/laboratories)
- [Lista de Laboratórios Ativos](https://pacific-retreat-64515.herokuapp.com/laboratories/active)
- [Lista de Exames](https://pacific-retreat-64515.herokuapp.com/exams)
- [Lista de Exames Ativos](https://pacific-retreat-64515.herokuapp.com/exams/active)
- [Lista de Associação por Exame](https://pacific-retreat-64515.herokuapp.com/association/1/exam)


<br>

## 🎲 Rodando o Back End em um serviço cloud de hospedagens

### Antes de começar, instale em sua máquina alguma ferramenta do tipo: 
> [Insomnia](https://insomnia.rest)

Utilize a seguinte `URL`:
> https://pacific-retreat-64515.herokuapp.com

Complete a `URL` de acordo com as rotas descritas no campo:
> [Breve síntese da aplicação](#✅-breve-síntese-da-aplicação)

<br>

### ✅ Autor
### Cássio Rubens 🚀
- https://github.com/CassioRubens-CR
- https://www.linkedin.com/in/cássio-rubens
