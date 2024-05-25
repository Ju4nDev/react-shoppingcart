## Guia de Instruções para Iniciar o Projeto 🚀

**Pré-requisitos**

Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. Se você ainda não o tem, pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

**Instalação**

1. Clone este repositório para seu ambiente:
~~~node 
git clone https://github.com/Ju4nDev/react-shoppingcart.git
~~~

2. Use o seguinte comando:
~~~node
cd react-shoppingcart
~~~

**Instalando dependências**

*Antes de iniciar, instale as dependências necessárias.*

3. No terminal, execute o seguinte comando:
~~~ node
npm install
~~~

**Rodando o projeto**

Após a instalação das dependências, você pode iniciar o servidor local de desenvolvimento.

4. No terminal, execute o seguinte comando:
~~~ node
npm run dev
~~~

*Isso iniciará o servidor local de desenvolvimento e ao clicar no link gerado, abrirá automaticamente o seu navegador padrão com o projeto em execução. Qualquer alteração feita em algum dos arquivos do projeto será refletida em tempo real no navegador.*

________________________________________________________________________________________________________________________________________________

## Estrutura de Pasta do Projeto

Este projeto segue uma estrutura de pasta organizada para facilitar o desenvolvimento, manutenção e escalabilidade do código. Abaixo está a descrição da estrutura de pasta e o propósito de cada diretório:


### `node-modules`

De todas, essa é a única pasta que não vem por padrão ao clonar o projeto. Ela é gerada após a execução do comando "npm install" no terminal. Contém todos os modulos e dependências necessárias para rodar o projeto.


### `public`

Local onde é armazenado arquivos estáticos que precisam ser acessados diretamente pelo navegador. Coisas como imagens que precisam ser acessadas várias vezes em páginas diferentes e arquivos '.json' também podem estar contidas nesta pasta.


### `src`

O diretório `src` contém todo o código-fonte do projeto.


### `assets`

Pasta onde é armazenado arquivos estáticos, como imagens, fontes ou até mesmo arquivos de estilo.


### `components`

Pasta onde se localiza todos os componentes reutilizáveis do projeto. Em outras palavras, aqueles componentes que serão renderizados em mais de uma página, como a barra de navegação e o rodapé, por exemplo.


### `context`

Pasta onde se localiza nossos contextos. Eles são responsáveis por compartilhar valores ou estados entre diferentes componentes sem a necessidade de passar essas "props" por cada nível da árvore desses componentes. É usado para dados globais, como temas, idiomas, autenticações, entre outros.


### `pages`

Diferente da "components", esta pasta guarda todos os componentes renderizáveis do projeto. Ou seja, todos aqueles que serão acessados somente em determinada rota.


________________________________________________________________________________________________________________________________________________

## Arquivos fundamentais do nosso projeto

### `App.jsx`

O App.jsx é um dos principais componentes do nosso projeto. Ele geralmente renderiza vários outros componentes ao mesmo tempo em uma certa ordem. Ele também é um componente, portanto pode receber propriedades e passar elementos para seus componentes filhos. Ele atua como um contêiner.


### `main.jsx`

Arquivo responsável por renderizar o nosso App.jsx.


### `products.js`

Arquivo onde se localiza os objetos de produto dessa aplicação. Ele está simulando dados que iriam ser trazidos de um banco de dados ou de uma API externa, porém, este projeto não utiliza nenhuma das duas opções. Portanto, ele cria um vetor de objetos manualmente para que o projeto possa funcionar.


### `RouterConfig.jsx`

Arquivo onde estão as rotas do nosso projeto. Cada rota renderiza um componente específico. Por ele, conseguimos controlar os acessos aos componentes da nossa aplicação, para que a interface fique organizada e todos os componentes não fiquem acoplados na mesma renderização.


### `index.html`

Este arquivo é um dos principais pontos de entrada da nossa aplicação React. Ele serve como o contêiner estático que carregará o JavaScript da aplicação e renderizará o conteúdo dinâmico gerado pelo React. Usado pelo React para montar a árvore de componentes.


________________________________________________________________________________________________________________________________________________
