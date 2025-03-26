# POC de Autenticação com Logto usando Fastify e React  

Este repositório contém uma **Prova de Conceito (POC)** de autenticação utilizando **Logto**, integrada a um backend em **Fastify** e um frontend em **React**. O objetivo é demonstrar como autenticar usuários, gerenciar tokens e proteger rotas de forma eficiente.  

## 📂 Estrutura do Projeto  

```bash
poc-logto-fastify-react/
│── back/      # Backend (Fastify)
│── web/       # Frontend (React)
│── README.md  # Documentação do projeto
│── .gitignore # Arquivo de ignorados do Git
```

### 📌 Tecnologias Utilizadas  

#### Backend (`back/`)  
- 🚀 **Fastify** - Framework web para Node.js rápido e eficiente  
- 🔑 **Logto SDK** - Gerenciamento de autenticação e autorização  
- 🔒 **JWT** - Para autenticação segura  
- 🛠️ **Dotenv** - Gerenciamento de variáveis de ambiente  
- 🐳 **Docker** - Ambiente de desenvolvimento isolado  

#### Frontend (`web/`)  
- ⚛️ **React** - Construção da interface  
- 🔗 **Logto React SDK** - Integração com o Logto para login/logout  
- ⚡ **Vite** - Ferramenta de build rápida  
- 🛤️ **React Router** - Gerenciamento de rotas  

## 🚀 Como Rodar o Projeto  

### 🔧 Pré-requisitos  
- 📦 **Node.js** instalado  
- 🔐 Rodar docker compose para acessar Logto Admin Console ([veja mais detalhadamente](https://docs.logto.io))  
- 🐳 **Docker** 

### 📦 Instalação  

Clone o repositório e entre na pasta:  

```bash
git clone https://github.com/seu-usuario/poc-logto-fastify-react.git
cd poc-logto-fastify-react
```

#### 🔹 Configurar o Backend (`back/`)  

1. Acesse a pasta:  

   ```bash
   cd back
   ```

2. Crie um arquivo `.env` com suas credenciais do Logto:  

   ```env
   LOGTO_ENDPOINT=https://seu-endpoint.logto.app
   LOGTO_APP_ID=seu-app-id
   LOGTO_APP_SECRET=seu-app-secret
   ```

3. Instale as dependências:  

   ```bash
   npm install
   ```

4. Inicie o backend:  

   ```bash
   npm run dev
   ```

#### 🔹 Configurar o Frontend (`web/`)  

1. Acesse a pasta:  

   ```bash
   cd ../web
   ```

2. Crie um arquivo `.env` e adicione:  

   ```env
   VITE_LOGTO_ENDPOINT=https://seu-endpoint.logto.app
   VITE_LOGTO_APP_ID=seu-app-id
   ```

3. Instale as dependências:  

   ```bash
   npm install
   ```

4. Inicie o frontend:  

   ```bash
   npm run dev
   ```

### ✅ Testando a Aplicação  

1. Acesse o frontend: [http://localhost:5173](http://localhost:5173)  
2. Clique nos botões dísponíveis na tela, e testem a aplicação
3. Veja as informações do usuário e teste chamadas autenticadas à API  
