# TCC - ARQUITETURA DE SOFTWARE DISTRIBUÍDO - PUC MINAS
## MIC - Módulo de Informações Cadastrais

Esse projeto visa criar um módulo de informações cadastrais cujo escopo consiste em cadastrar e obter informações de todos os prestadores e associados, como por exemplo seus dados pessoais, localização, formação, saúde e etc.

---
## Alguns conceitos e tecnologias encontradas nesta aplicação

* **DDD**
* **Clean Architecture**
* **GoF (Algumas poucas coisas)**
* **Object Calisthenics (Algumas poucas coisas)**
* **Arrange, Act e Assert (AAA)**
* **TDD (Dentro do possível)**
* **API RESTful**
* **OOP**
* **Node**
* **Typescript**
* **Mocks**
* **Testes unitários**
* **Testes de integração**
* **Git**
* **Make**
* **Docker**
* **Docker Compose**
* **Mongo**
* **Documentação de API**

---

## Pré-requisitos
Para rodar esse projeto você precisará ter instalado na sua máquina (host) as seguintes soluções...

* [Node](https://nodejs.org/pt-br/download/) (versão 12)
* [Docker](https://docs.docker.com/desktop/windows/install/)
* [Make](https://www.gnu.org/software/make/)
* [Typescript](https://www.npmjs.com/package/typescript)
* [Ts Node](https://www.npmjs.com/package/ts-node)
* [Nodemon](https://www.npmjs.com/package/nodemon)

Para rodar os testes precisará ter...
* [Jest](https://www.npmjs.com/package/jest)

---

## Comandos

Você pode executar um comando make no seu terminal desta forma.
> make up

* **up**\
Levanta todas as soluções (containers) desta solução, você pode acessá-los em...
    * **pucmg-mic-api** &#8594; localhost:3010
    * **documentação da pucmg-mic-api** &#8594; localhost:3010/api-docs
    * **mongo-express** &#8594; localhost:8081
    * **mongo** &#8594; localhost:27017

* **down**\
Destrói todos os containers levantados nessa solução.

* **ps**\
Lista todos os containers levantados nessa solução.

* **test**\
Executa todos os testes unitários e de integreção da aplicação, você pode ver a cobertura de testes em **"coverage\index.html"**.\
**Obs.:** Os conteiners precisam estar levantados para os testes de integração funcionarem.

* **nodemon**\
Roda apenas o servidor contendo a aplicação.