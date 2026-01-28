# Esmie BPO Financeiro - Landing Page

Landing page institucional desenvolvida para a Esmie BPO Financeiro, com foco em gestão financeira para restaurantes.

## 🚀 Como Rodar o Projeto

Siga o passo a passo abaixo para executar o projeto em seu computador.

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em seu computador.

### 1. Instalação
Abra o terminal na pasta do projeto e execute o comando para baixar as dependências:

```bash
npm install
```

### 2. Rodar Servidor de Desenvolvimento
Para abrir o site no seu navegador e ver as alterações em tempo real:

```bash
npm run dev
```
Após executar, clique no link que aparecerá no terminal (geralmente `http://localhost:5173`).

### 3. Gerar Versão para Produção (Build)
Para criar os arquivos otimizados para publicar o site na internet:

```bash
npm run build
```
Uma pasta chamada `dist` será criada com todos os arquivos prontos para o deploy.

---

## 🛠 Tecnologias Utilizadas
- **React**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build rápida.
- **Vanilla CSS**: Estilização customizada e leve.
- **Lucide React**: Ícones modernos.

## 📁 Estrutura do Projeto
- `src/components`: Contém todas as seções da página (Hero, Problemas, Solução, etc).
- `src/index.css`: Estilos globais e variáveis de design.
- `src/App.jsx`: Componente principal que une todas as seções.
