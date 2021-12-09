# MINHA EXPERIÊNCIA

Após semanas estudando React JS e tentando "juntar" as funcionalidades e me familiarizar com sua arquitetura, encontrei esse tutorial exemplificando a utilização do React com TypeScript e consumindo a sensacional api da Marvel. É uma aplicação relativamente simples, mas, foi a primeira que consegui fazer. 

# 
Esse é o link do tutorial do YouTube que segui para construir essa aplicação:
https://www.youtube.com/channel/UCMGAfZoQzD24ykK29IR6Pjw

# Tecnologias utilizadas
- Styled Components
- TypeScript
- Axios

# Funcionalidades da página
Exibe cards dos personagens Marvel e apresenta um botão ao final da página que carrega mais personagens.

# COMO EXECUTAR O PROJETO

Primeiramente será necessário criar uma conta em https://developer.marvel.com/. 
Então, gerar uma public e uma private key em https://developer.marvel.com/account.

Clone este repositório:
$ git clone https://github.com/thaygrance/marvelheroes.git

Acesse a pasta do projeto no seu terminal:
$ cd marvelheroes

Criar dentro de src uma pasta services com um arquivo api.ts. Nesse arquivo, siga as instruções para requisição da api descritas em https://developer.marvel.com/documentation/generalinfo utizando suas keys. 

Instale as dependências:
$ yarn install

Execute a aplicação:
$ yarn start
