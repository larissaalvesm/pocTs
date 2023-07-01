# Projeto POC TypeScript - Sistema de Pedidos de Comida

Este é um projeto de prova de conceito (POC) desenvolvido em TypeScript para demonstrar um sistema simples de pedidos de comida. O objetivo deste projeto é permitir a criação de clientes, registro de pedidos e a realização de operações básicas de gerenciamento de pedidos.

## Funcionalidades

O projeto contém as seguintes rotas e funcionalidades:

1. **POST: /client**
   - Cria um novo cliente no sistema.
   - Corpo da solicitação (JSON):
     ```json
     {
       "name": "Larissa",
       "address": "Rua Teste, Bairro Teste, Cidade Teste"
     }
     ```
   - A resposta da solicitação contém o ID do cliente criado.

2. **POST: /order**
   - Cria um novo pedido de comida para um cliente existente.
   - Corpo da solicitação (JSON):
     ```json
     {
       "clientId": 5,
       "product": "Lasanha"
     }
     ```
   - A resposta da solicitação contém o ID do pedido criado.

3. **PUT: /order/:id**
   - Atualiza o status de um pedido existente.
   - Parâmetro da URL: `id` (ID do pedido)
   - Corpo da solicitação (JSON):
     ```json
     {
       "status": "Preparando pedido"
     }
     ```
    - O campo `status` do pedido só pode ser atualizado para "Preparando pedido" ou "Pedido enviado".


4. **DELETE: /order/:id**
   - Exclui um pedido existente.
   - Parâmetro da URL: `id` (ID do pedido)

5. **GET: /orders/:clientId**
   - Obtém todos os pedidos de um cliente específico.
   - Parâmetro da URL: `clientId` (ID do cliente)

## Validações

O projeto inclui as seguintes validações:

- Somente é possível criar pedidos e buscar pedidos de clientes existentes no sistema.
- Somente é possível atualizar e excluir pedidos existentes no sistema.
- O campo `status` do pedido só pode ser atualizado para "Preparando pedido" ou "Pedido enviado".


## Instalação

Para executar o projeto em sua máquina local, siga as etapas abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em seu sistema.
2. Clone este repositório para o diretório de sua escolha.
3. Navegue até o diretório do projeto no terminal.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm run dev` para iniciar o servidor.
6. O servidor estará disponível em `http://localhost:5000`.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express.js
- PostgreSql

