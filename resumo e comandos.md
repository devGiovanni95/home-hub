# 1. Configurando Projeto

## iniciando o projeto front
npm init --dentro da pasta 

## criando o orquestrador 
npx create-single-spa
1-diretorio -> /root
2- single-spa root config
3-npm
4-typescript -> yes
5-novo layout -> no

## Resumo da aula

A arquitetura micro-frontend é uma abordagem de desenvolvimento web que pode parecer complexa à primeira vista, mas vamos descomplicá-la juntos. 
Imagine que você está construindo um grande quebra-cabeça, onde cada peça representa uma parte diferente da sua aplicação web.
 Em vez de construir um quebra-cabeça gigante (um monolito), você trabalha em pequenos quebra-cabeças (micro-frontends) que, 
 quando combinados, formam o quadro completo. Essa é a essência da arquitetura micro-frontend.

O que é Micro-Frontend?
Micro-frontend é basicamente uma abordagem de desenvolvimento que aplica o conceito de microserviços ao frontend. 
Em vez de ter um único e grande código base para toda a sua interface de usuário (UI), você a divide em partes menores e mais gerenciáveis,
 cada uma responsável por uma funcionalidade ou seção específica do seu site ou aplicativo.

Como Funciona?
Vamos usar um exemplo prático. Imagine um site de e-commerce composto por várias seções: homepage, lista de produtos, carrinho de compras, 
e perfil do usuário. Em uma arquitetura micro-frontend, cada uma dessas seções seria desenvolvida, testada, e implantada independentemente, 
como se fossem mini aplicativos.

Vantagens
Desenvolvimento Paralelo: Diferentes equipes podem trabalhar em diferentes seções do site ao mesmo tempo, sem interferir uma com a outra.
Tecnologia Flexível: Cada equipe pode escolher a tecnologia que melhor se adapta à sua parte do projeto, sem estar presa à decisão tomada no início do projeto.
Facilidade de Atualização: Atualizar ou adicionar novas funcionalidades se torna mais fácil e menos arriscado, pois você só precisa modificar uma pequena parte do sistema.
Desvantagens
Complexidade de Integração: Coordenar e integrar diferentes micro-frontends pode ser desafiador, especialmente quando eles usam tecnologias diferentes.
Performance: Se não for bem gerenciado, o carregamento de múltiplos micro-frontends pode afetar a performance do site.
Consistência de UI: Manter uma experiência de usuário consistente através de diferentes micro-frontends requer esforço extra de design e implementação.
Casos de Uso
Grandes Aplicações Empresariais: Empresas com grandes equipes de desenvolvimento e aplicações complexas podem se beneficiar da modularidade e da escalabilidade que 
os micro-frontends oferecem.
Aplicações que Requerem Flexibilidade Tecnológica: Projetos que precisam incorporar diferentes frameworks ou bibliotecas sem reescrever todo o código existente.
Exemplo de Código
Vamos imaginar que você está construindo a seção de perfil do usuário como um micro-frontend. Se você estiver usando React, seu código pode se parecer com isso:

import React from 'react';

function UserProfile() {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      {/* Componentes do perfil do usuário aqui */}
    </div>
  );
}

export default UserProfile;
COPIAR CÓDIGO
Este componente UserProfile pode ser desenvolvido e implantado independentemente dos outros componentes da aplicação, 
permitindo que a equipe responsável por ele trabalhe de forma autônoma.

Conclusão
A arquitetura micro-frontend oferece uma abordagem flexível e escalável para o desenvolvimento de aplicações web complexas.
 Embora venha com seus desafios, as vantagens de desenvolvimento paralelo, flexibilidade tecnológica e facilidade de atualização podem 
 superar significativamente esses obstáculos, especialmente em grandes projetos com equipes múltiplas. Como qualquer arquitetura, 
 é importante avaliar se ela se encaixa nas necessidades do seu projeto antes de adotá-la.


## Passo a passo professor 
Para criar um orquestrador utilizando o framework single-spa é necessário rodar o comando npx create-single-spa dentro de um repositório criado previamente.

Após rodar o comando npx create-single-spa siga o seguinte passo a passo:

1. - Dê um nome para a pasta que receberá todo o conteúdo do orquestrador. Ex: root.
2. - Em seguida, selecione a opção single-spa root config na lista de opções que aparecerá no terminal.
3. - Selecione o gerenciador de pacotes da sua preferência. Ex: npm.
4. - Caso queira utilizar Typescript no orquestrador, digite Y e tecle enter. Caso não queira, digite N e tecle enter.
5. - No próximo passo será dada a opção de utilizar o Layout Engine para organização dos micro-frontends. Durante o curso, não usaremos essa opção. Portanto, no meu caso eu digitei N e teclei enter.
6. - Agora digite o nome da organização. Lembre-se que esse nome deverá ser o mesmo para os micro-frontends que você criar. Utilize um nome fácil de lembrar e que identifique o projeto. Ex: home-hub.
7. - Pronto! Após teclar enter, o orquestrador será instalado e configurado para uso.


# 2. Utilizando o single-spa


## configurando o orquetrador
a partir do arquivo em src/index.ejs para fazer o imports de outros projetos

## criando um novo micro-frontend
npx create-single-spa 
single-spa application / parcel
react
npm 
typescript -> y
organization -> mesmo nome usado anteriormente home-hub
nome do projeto -> hell-world

## transcrição aula 03
Vamos criar o nosso primeiro micro front-end do tipo Application/Parcel no nosso repositório do Home Hub!

No VS Code, começaremos abrindo uma nova aba do terminal. Já estamos na raiz do nosso Home Hub, então, vamos executar:

npx create-single-spa
COPIAR CÓDIGO
Qual será o diretório desse novo projeto? Vamos chamá-lo de "Hello World".

Em seguida, para o tipo do nosso micro front-end, vamos selecionar a primeira opção, que é Application/Parcel.

Ele nos dá as opções dos frameworks front-end para utilizar nesse micro front-end. Vamos selecionar a primeira opção: React.

Selecionaremos o gerenciador de pacote como "npm". Vamos confirmar o uso do Typescript.

O nome da organização, lembrando que deve ser igual para todos os projetos micro front-ends que tivermos dentro desse repositório, será home-hub. O nome desse projeto será hello-world.

Agora, ele vai criar esse novo micro front-end para nó. Então, é só aguardar a instalação das dependências desse projeto.

Finalizou a instalação e a geração desse micro front-end do tipo Application, onde utilizamos React para ele.

Ele já deu um prompt assim que finalizou a instalação:

Project setup complete!

Steps to test your React single-spa application:

Run 'npm start -- --port 8500'

Go to http://single-spa-playground.org/playground/instant-test?name=@home-hub/hello-world&url=8500 to see it working!

Então, o projeto foi instalado e configurado com sucesso. E está exibido os passos para testar essa aplicação.

Ele passa o npm start para passarmos uma porta diferente da 9000, que está sendo utilizada nesse momento pelo orquestrador. E passa aqui um site para vermos funcionando em tempo real a nossa aplicação. Mas não vamos fazer isso por enquanto.

Agora vamos maximizar a tela do Hello World para verificar qual a diferença dela para o nosso orquestrador. Então, vamos abrir a pasta "hello-word" no explorador de arquivos.

Dentro da pasta "hello-world" temos os seguintes arquivos:

.eslintrc
.gitgnore
.prettierignore
babel.config.json
jest.config.json
jest.config.js
package.lock.json
package.json
tsconfig.json
webpack.config.js
Temos temos aqui todas as configurações que o nosso outro orquestrador também tem.

Se abrirmos o diretório "src", temos os arquivos:

declarations.d.ts
home-hub-hello-world.tsx
root.component.te
root.component.tsx
Ao abrir o arquivo home-hub-hello-world.tsx já vemos alguns traços do React com os quais estamos acostumados.

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
COPIAR CÓDIGO
Temos aqui o React, o React-DOM, ele aqui está utilizando um componente. Só que ele utiliza uma forma diferente de renderizar esse componente. Como assim? Ele está utilizando aqui essa função do singleSpaReact para renderizar.

Então, ele está carregando aqui React, o React-DOM, o nosso componente root. E ele também tem um errorBoundary para tratar os erros da nossa aplicação.

Então, nós até depois podemos limpar esse código aqui com algumas coisas que não vão ser utilizadas. Mas, por enquanto, vamos deixar assim. Essa função do singleSpaReact, ela vem dessa biblioteca single SPA react, que nós estamos utilizando para gerar o nosso micro front-end do tipo aplicação.

E aqui na linha 16, perceba que tem três funções, que são bootstrap, mount e unmount. E fazem parte do objeto lifecycles.

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
COPIAR CÓDIGO
Esse é um ponto de atenção muito importante, porque para uma aplicação micro front-end rodar, é de extrema necessidade o bootstrap, ou seja, ela vai ser iniciada; o mount, onde ela vai ser montada em tela e qual vai ser o momento que ela vai ser montada em tela. E temos também o unmount, que é quando essa aplicação vai sair de tela.

Nós vimos lá no nosso arquivo de configuração do orquestrador, que nós temos o import map em um dos arquivos, e no outro nós redirecionamos qual vai ser a rota que vai estar ativa o nosso micro front-end, onde o projeto vai estar ativo.

Então, é de extrema importância que a gente entenda que esse ciclo de vida do nosso micro front-end é um pouco diferente do ciclo de vida que nós temos dos componentes dentro do React. Eles vão funcionar, claro, nós vamos ter uma aplicação React, nós vamos poder utilizar o use effect, então manipular o estado e tudo mais. Porém, aqui nós estamos falando do ciclo de vida dessa aplicação micro front-end dentro do nosso orquestrador.

Então, a aplicação é carregada, ela aparece em tela e ela desaparece. Esses momentos que ela aparece e desaparece em tela, nós podemos manipular eles através das rotas lá no nosso arquivo de configuração do orquestrador.

Vamos rodar esse projeto para ver se alguma coisa vai aparecer em tela. Só a gente vê aqui esse root.component.tsx, então basicamente aqui ele tem uma section, está recebendo uma {proxy.name} is mounted! e renderizando isso em tela.

Então, vamos entrar dentro dessa pasta, digitando no terminal cd hello-world, e agora vamos rodar o npm start, lembrando que vamos passar a porta como 8500, que foi a porta que ele sugeriu, já que a 9000, que é a default, já está em utilização pelo orquestrador.

npm start -- --port 8500
COPIAR CÓDIGO
Ele rodou a nossa aplicação, tudo certo, rodou o webpack server. Vamos ver mais alguma informação, ele gerou, vamos descer mais um pouco, vamos ver se ele gerou mais alguma coisa. Ele fez o type check, ok, gerou aqui o nosso tsx sem problemas, pegou as dependências externas, ok. Tudo certo, não deu nenhum problema.

Então, vamos tentar acessar essa porta através do nosso navegador. Então, vamos abrir uma nova aba, navegador, agora digitar localhost:8500.

Ele carregou aqui para a gente algumas informações, é da nossa aplicação, porque ele entrou na porta 8500, mudou o título para webpack app, aqui no título do nosso navegador.

Então, ele está falando aqui que o nosso micro front-end, esse Hello World que criamos, ele está rodando no modo integrado. Então, o plugin que seria o standalone para ele rodar sozinho, ele está desabilitado por padrão. Ou seja, não conseguimos rodar esse micro front-end de forma isolada.

Your Microfrontend is not here

The @home-hub/hello-world microfrontend is running in "integrated" mode, since standalone-single-spa-webpack-plugin is disabled. This means that it does not work as a standalone application without changing configuration.

How do I develop this microfrontend?

To develop this microfrontend, try the following steps:

Copy the following URL to your clipboard: http://localhost:8500/home-hub-hello-world.js
In a new browser tab, go to the your single-spa web app. This is where your "root config" is running. You do not have to run the root config locally if it is already running on a deployed environment go to the deployed environment directly.
In the browser console, run localStorage.setItem('devtools', true); Refresh the page.
A yellowish rectangle should appear at the bottom right of your screen. Click on it. Find the name @home-hub/hello-world and click on it. If it is not present, click on Add New Module.
Paste the URL above into the input that appears. Refresh the page.
Congrats, your local code is now being used!
Então, para que isso funcione, ele passa aqui algumas informações, que poderíamos copiar esse link aqui na primeira linha, onde está localhost:8500/home-hub-hello-world.js e dos locais que deveríamos fazer alteração para rodar esse micro front-end.

Então, se simplesmente pegarmos esse link e copiarmos aqui na nossa barra, ele até traz algumas informações para nós, que seria o arquivo .js, só que isso aqui não tem finalidade nenhuma, não está renderizando conteúdo em tela. Então, isso aqui para a gente não resolve, é um arquivo gigantesco, que tem todo o .js, todo o arquivo JavaScript da aplicação está aqui. Então, é um arquivo gigantesco com muitas coisas. Isso aqui para a gente não serve.

Como que a gente faz para corrigir esse erro aqui? Ao invés de seguir esse tutorial que ele exibiu, vamos dizer assim, para estar no modo dev desse micro front-end isolado, a forma mais correta de trabalhar com micro front-end é de forma integrada, que seria, voltando aqui na visualização do localhost:9000, que seria a visualização do nosso orquestrador, seguindo essa recomendação do single-spa como configurar, do que tem que fazer.

Próximo passo
Então, é isso que nós vamos fazer no nosso próximo vídeo. Vamos alterar a forma que o nosso micro front-end Hello World aqui está funcionando para poder mostrar o Hello World em tela e de quebra a gente já entender como que a gente faz para importar dependências e também como que a gente registra micro front-ends dentro do nosso orquestrador.

No próximo vídeo, então, aguardamos você para registrar esse micro front-end de novo aqui e cadastrar as dependências dele para poder visualizá-lo em tela.


# 3. 