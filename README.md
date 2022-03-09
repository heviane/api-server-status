# server-status-api

Projeto desenvolvido na aula de introdução ao [Node.js](https://nodejs.org)

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green"/>
  <img src="https://img.shields.io/badge/Status-Desenvolvimento-sucess"/>
</p>

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-1st_place_medal)

:small_blue_diamond: [Funcionalidades](#funcionalidades-heavy_exclamation_mark)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos-rocket)

:small_blue_diamond: [Pacotes e Plugins](#pacotes-e-plugins-stuck_out_tongue_winking_eye)

:small_blue_diamond: [Como rodar localmente](#como-rodar-localmente-arrow_forward)

:small_blue_diamond: [Resolvendo Problemas](#resolvendo-problemas-exclamation)

:small_blue_diamond: [Tarefas em aberto](#resolvendo-problemas-open_book)

:small_blue_diamond: [Desenvolvedores](#desenvolvedores-octocat)

:small_blue_diamond: [Licence](#licence)

## Descrição do projeto :1st_place_medal

  API em [Node.js](https://nodejs.org) para retornar informações sobre o servidor.

## Funcionalidades :heavy_exclamation_mark

:heavy_check_mark: endpoint [/soStatus](http://localhost:3000/soStatus): Retorna informações sobre o sistema operacional.

:heavy_check_mark: endpoint [/memoryStatus](http://localhost:3000/memoryStatus): Retorna informações sobre o status da memória.

:heavy_check_mark: endpoint [/networkStatus](http://localhost:3000/networkStatus): Retorna informações sobre a rede.

## Deploy da Aplicação :dash

> **Heroku**: [https://peaceful-basin-19013.herokuapp.com](https://peaceful-basin-19013.herokuapp.com)

## Pré-requisitos :rocket

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node](https://nodejs.org)

## Pacotes e Plugins :stuck_out_tongue_winking_eye

| Name | Link |
| ---------- | ------ |
| Editor Config | [https://editorconfig.org](https://editorconfig.org) |
| ESLint | [https://eslint.org](https://eslint.org) |
| Nodemon | [https://nodemon.io](https://nodemon.io) |
| Config | [https://www.npmjs.com/package/config](https://www.npmjs.com/package/config) |

## Como rodar localmente :arrow_forward

Clone o projeto:

```
git clone git@github.com:heviane/server-status-api.git
```

Entre no diretório do projeto:

```
cd server-status-api
```

Instale as dependências:

```
npm install
```

Inicie o servidor em ambiente de desenvolvimento com nodemon:

```
npm run dev
```

## Resolvendo Problemas :exclamation

Em [issues](https://github.com/heviane/server-status-api/issues) foram abertos alguns problemas gerados durante o desenvolvimento desse projeto e como foram resolvidos.

## Tarefas em aberto :open_book

:memo: Tarefa 1: Construir UI em React para consumir essa API.

:memo: Tarefa 2

## Desenvolvedores :octocat

[<img src="./src/img/ProfilePicture.jpeg" width=115><br><sub>Heviane Bastos</sub>](https://github.com/heviane)

## Licence

The [MIT License](https://github.com/heviane/api-monitor-memory/blob/main/LICENSE) (MIT)

Copyright :copyright: 2022 - Heviane Bastos
