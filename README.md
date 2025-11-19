## 📚 Sobre o Projeto

Este repositório reúne estudos, exemplos práticos e cenários completos
utilizando **PactumJS** para testes de API, incluindo:

-   Testes de autenticação\
-   Validações de endpoints GET/POST/PUT/DELETE\
-   Testes de integração e unitários utilizando o **ServeRest**

O objetivo é servir como laboratório de testes backend com foco em
automação.

------------------------------------------------------------------------

## 🖼️ Estrutura Geral

    pactumJsEstudos-1/
    ├── aula-01/  → POST Login
    ├── aula-02/  → GET por ID
    ├── aula-03/  → POST Geral
    ├── aula-04/  → GET Users
    ├── aula-05/  → DELETE por ID
    ├── aula-06/  → PUT por ID
    ├── aula-07/  → Todos os métodos
    ├── package.json

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

  Tecnologia       Descrição
  ---------------- ---------------------------------
  **Node.js**      Ambiente de execução JavaScript
  **PactumJS**     Biblioteca para testes de API
  **Mocha**        Framework de testes
  **ServeRest**    API usada para cenários reais
  **JavaScript**   Linguagem base

------------------------------------------------------------------------

## 📦 Instalação

``` bash
npm install
```

------------------------------------------------------------------------

## ▶️ Executar Testes

### 🔹 Rodar cada aula separadamente

``` bash
npm run test1
npm run test2
npm run test3
npm run test4
npm run test5
npm run test6
npm run test7
```

------------------------------------------------------------------------

## ⚙️ Configuração Avançada

### 🌐 Alterar URL base do Pactum

``` js
const pactum = require('pactum');

const { spec } = require('pactum');

pactum.request.setBaseUrl('https://serverest.dev');
```

### 🔧 Timeout global

``` js
pactum.request.setDefaultTimeout(10000); // 10s
```

## 🤝 Autor

Rafael Rodrigo Pereira Oliveira