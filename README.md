# Gerenciador de Eventos

Este é um sistema para gerenciar eventos, onde os usuários podem se cadastrar, fazer login e registrar novos eventos. A aplicação foi construída utilizando **Angular** no frontend e **ASP.NET Core** no backend.

## Tecnologias Utilizadas

- **Frontend**: Angular 14+, Bootstrap 5
- **Backend**: ASP.NET Core 6, Entity Framework Core, JWT para autenticação
- **Banco de Dados**: SQL Server

## Pré-requisitos

Antes de começar, é necessário ter as seguintes ferramentas instaladas:

- **.NET SDK**: Para rodar o backend (ASP.NET Core).
- **Node.js** e **npm**: Para rodar o frontend (Angular).
- **Banco de Dados**: SQL Server

## Instalação

### Backend (ASP.NET Core)

Instalar as dependências:

O backend é uma aplicação ASP.NET Core, então as dependências são instaladas automaticamente através do comando:

    dotnet restore

Configurar o Banco de Dados:

Configure a conexão com o banco de dados no arquivo appsettings.json na seção ConnectionStrings.
Se estiver utilizando SQL Server, ajuste a string de conexão conforme necessário.

Executar as migrações:

Para garantir que o banco de dados esteja configurado corretamente, execute as migrações:


    dotnet ef database update
    
Executar o backend:

Após configurar o banco de dados, inicie o backend

Frontend (Angular)

Instalar as dependências do Angular:

Antes de iniciar o servidor Angular, instale as dependências:

    npm install
    
Configurar a URL do Backend:

No arquivo src/app/api.service.ts, ajuste a URL do backend:

Executar o frontend:

Para rodar o frontend, execute o seguinte comando:

    ng serve
    
O frontend estará disponível em http://localhost:4200.
