# Como instalar?

Para podermos rodar esta aplicação em sua máquina é necessário a instalação de 2 softwares, sendo eles o Git que usaremos para receber os dados e arquivos do projeto e o Node.js que torna possível a execução da aplicação, uma vez que queremos executar em nossa própria máquina sem depender de nenhum servidor de execução externo.

### Instalando o Git

Como se trata de uma ferramenta gratuita e multiplataforma, basta fazer o download da versão mais adequada para seu sistema operacional no [link](https://git-scm.com) e depois de baixar, clique duas vezes no arquivo para iniciar o assistente de instalação e seguir as instruções na tela, clicando em "next", "next"... Ao término, clique em "finish" para concluir com êxito a instalação.

### Instalando o Node.js

Após finalizar a instalação do Git, partimos para instalação do Node.js acessando o site oficial clicando [aqui](https://nodejs.org) e clicando no botão de download referente a versão "LTS", na sequência abra o arquivo baixado e siga com o processo de instalação através do assistente.

### Acessando o prompt de comando

Com as duas instalações finalizadas, devemos abrir o prompt de comando onde executaremos os comandos de instalação. Pressione as teclas "Windows" + "X" para abrir o menu usuário avançado, e clique em "Prompt de comando" ou "Prompt de comando (Admin) também é provável nas novas versões do windows você encontrar "Windows PowerShell (Admin)" opte por esta opção caso possível.

### Instalando dependências

Com o prompt de comando aberto é necessário prosseguir com os passos a seguir com muita atenção bastando digitar o comando no prompt e pressionar a tecla "Enter" do teclado, assim sucessivamente a cada comando informado.

##### O primeiro comando que usaremos tem como funcionalidade a criação de uma pasta para separarmos os arquivos do projeto:

mkdir www

##### Acessando a pasta criada:

cd www


##### Recebendo os arquivos do projeto através do Git:

git clone https://github.com/gideonfernandes/lince-fragrances-mern-stack.git

##### Acessando a pasta do projeto:

cd lince-fragrances-mern-stack

##### Instalando dependências do projeto através do npm (ferramenta que vem junto com o node.js):

npm run install:app

Aguarde até todo o processo finalizar (geralmente 6 a 12 minutos).

##### Iniciando a aplicação

npm run init:app

Aguarde até seu navegador padrão abrir automaticamente e então a aplicação está pronta para ser utilizada! (Mantenha o prompt de comando sempre aberto durante a utilização da aplicação)

Para encerrar a aplicação, basta fechar o navegador, voltar ao prompt de comando e pressionar as teclas "Ctrl" + "C" simultanêamente, desta forma os processos se encerraram, feche o prompt e pronto.

#### Sempre que quiser iniciar a aplicação não será necessaria a instalação das dependências novamente, basta abrir o prompt de comando e prosseguir com os comandos:

cd www

cd lince-fragrances-mern-stack

npm run init:app
