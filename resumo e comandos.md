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


## transcrição da aula 4
Agora, com o nosso micro front-end do tipo aplicação criado, vamos fazer a importação dele. Vamos fazer com que ele seja visualizado e importado dentro do nosso orquestrador.

No Visual Studio Code, na pasta "root", onde está o nosso orquestrador, vamos abrir o arquivo home-hub-root-config.ts. Esse arquivo é responsável pela importação e registro dos micro front-ends dentro do orquestrador.

Entre as linhas 12 e 16, já temos até um exemplo para descomentar.

// registerApplication({
//   name: "@home-hub/navbar",
//   app: () => System.import("@home-hub/navbar"),
//   activeWhen: ["/"]
// });
COPIAR CÓDIGO
Vamos retirar as barras de comentários do bloco acima e fazer o seguinte: esse registro da aplicação recebe um nome, que será o nome da aplicação que vamos importar. Esse nome deve ser exatamente o mesmo que configuramos na nossa aplicação quando a criamos. O app será o nome do projeto que criamos e o activeWhen será a rota em que ele estará ativo dentro do nosso orquestrador.

Em vez de navbar vamos escrever hello-world na linha 13 e fazer o mesmo para o system.Import.

registerApplication({
  name: "@home-hub/hello-word",
   app: () => System.import("@home-hub/hello-world"),
   activeWhen: ["/"]
 });
COPIAR CÓDIGO
Ao salvar, ele vai dar um erro, porque ainda não temos essa importação funcionando. Precisamos fazer o registro dele dentro do nosso index.ejs.

No index.ejs vamos inserir um import para hello-world:

  "imports": {
    "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
    "@home-hub/hello-world": "//localhost:8500/home-hub-hello-world.js",
  }
COPIAR CÓDIGO
Vamos voltar no nosso navegador, porque se não me engano ele tem mais algumas informações para nós. Ah sim, tem um pequeno problema aqui por enquanto, vamos voltar no nosso Registro Application e comentar isso aqui rapidamente. Só para pegar esse trecho aqui, que será importante, que são as configurações do React e do React-DOM, que caso utilizemos o micro front-end do tipo React, precisamos passar essas dependências no nosso import map, no arquivo de configuração do orquestrador.

Vamos simplesmente copiar essas duas linhas, ir no nosso index.ejs no Visual Studio Code, na linha 34 o import map está carregando as dependências que vão utilizar no nosso orquestrador. Então aqui na linha 35 vamos colocar uma vírgula no final da linha e colar o trecho de código que copiamos da documentação. Ao salvar, ele já fez o carregamento desses dois novos módulos, ele acabou de passar no terminal essa informação, de que ele carregou esses dois novos módulos, que colocamos no nosso import map.

Se voltarmos aqui, ele não vai aparecer nada, porque não colocamos nenhuma informação ainda, então vamos voltar no nosso Home Hub e descomentar essa parte aqui. Ao salvar, ele está dando um erro aqui, vamos ver... Ah, tem que passar o Lifecycles aqui também, copiando e colando o outro arquivo. Esse Lifecycles é uma tipagem, então como estamos utilizando TypeScript, temos que passar as configurações da forma que o TypeScript espera, senão ele vai dar erro no nosso navegador.

Voltando no nosso navegador, no local roxo 9000, se descermos essa página até o final, vemos que ele carregou o nosso micro front-end React que criamos. Como sabemos disso? Exatamente o @home-hub/hello-world está montado. Se voltarmos no nosso Visual Studio Code, e abrir aqui o root.component.tsx, dentro da pasta hello world, ele está passando justamente essa informação.

Para fechar com chave de ouro, temos que mostrar o nosso hello world, então, no nosso home hub root config, vamos comentar essa parte que ele está mostrando a documentação para nós, que é esse single SPA welcome, entre as linhas 3 e as linhas 8, vamos fazer esse comentário, salvar, agora voltando no nosso root.component, dentro do hello world, dentro da pasta hello world, vamos passar aqui hello world, e em vez de section, vamos passar como um h1, salvar, e se voltarmos no nosso navegador, finalmente temos o nosso hello world, agora utilizando micro front-end.

Mas um detalhe, fechamos com chave de ouro aqui, mostramos o nosso hello world, então, estamos mais do que prontos para começar o desenvolvimento aqui do nosso projeto do home hub, colocando as dependências de estilização, e manipulando isso de uma forma que a arquitetura micro front-end se encaixe nesse projeto. Só que antes, aconteceu uma coisa muito engraçada, então, vamos descomentar essa parte da documentação, salvar e voltar no nosso navegador, e olha só que coisa engraçada, ele está renderizando ao mesmo tempo esses dois micro front-ends, porque querendo ou não, esse welcome aqui, ele é um micro front-end que existe, ele está disponível aqui nesse unpackage, que já discutimos previamente, então, aqui no nosso Visual Studio Code, conseguimos visualizar que é um micro front-end que existe, que está configurado e tudo mais, só que ele está exibindo os dois ao mesmo tempo, que é justamente o que queremos, quando estamos falando aqui de um projeto onde várias equipes vão estar trabalhando no mesmo código, é exatamente essa integração que esperamos, que ao mesmo tempo tenha código de um tipo e código de outro tipo.

Nesse caso aqui, o hello world está sendo em React, a forma que esse welcome foi desenvolvido nós não sabemos, mas vamos supor que ele foi feito agnóstico, sem nenhum framework. Então, está renderizando aqui, para nós é o que interessa, que tenha esse compartilhamento de código e eles renderizem ao mesmo tempo em tela, tanto que se mudarmos aqui o nosso hello world, colocar aqui dois exclamações e voltar no nosso código, ele está renderizando ao mesmo tempo. É exatamente isso que queremos, tanto para o ambiente de desenvolvimento, quanto para o ambiente produtivo, que projetos rodem em paralelo e ao mesmo tempo as atualizações ocorram em paralelo.

Então, vamos fazer o seguinte, na próxima aula começamos a implementar já a nossa dashboard do Home Hub e vamos ver também algumas questões aqui sobre esse roteamento do ActiveWay, que talvez seja interessante mudar algumas configurações e tudo mais para evitar código duplicado. Então, só para fechar a aula, ficar com o código igualzinho, vamos remover aqui essa parte do Welcome, então das linhas 3 a 8, estamos removendo ele, salvar e também só para dar uma limpada no nosso código, esse slint.rc, ele está reclamando do parser, por isso que alguns arquivos ele está mostrando como vermelhinho, que não estamos utilizando o slint do Babel aqui no projeto. Então, vamos retirar esse parser da nossa pasta root, salvar e fazer a mesma coisa na pasta hello world, ele também tem um slint.rc, vamos tirar o parser do Babel e salvar.

Vamos salvar aqui que ele está reclamando, deixa ver aqui, quick fix, é problema de pre-read, então não é nada, não é nenhum problema nem nada, é só a configuração do meu pre-read que não está batendo com as configurações do slint.rc aqui, mas isso aqui não tem problema, só de tirar aqueles erros do importe e tudo mais para nós já está suficiente. Então, aguardamos você na nossa próxima aula para começarmos a implementação da dashboard e colocar algumas dependências bem interessantes aqui para estilizar o projeto. Então, aguardamos você.






## para saber mais
Imagine que você está construindo um grande quebra-cabeça, onde cada peça representa uma parte diferente da imagem final. No desenvolvimento de aplicações web, esse quebra-cabeça pode ser comparado a um projeto grande, e cada peça, a uma parte menor e independente desse projeto, conhecida como micro-frontend.

Micro-frontends são, basicamente, pequenas partes de uma aplicação web que trabalham juntas para formar um sistema maior. Cada micro-frontend é responsável por uma funcionalidade ou seção específica da aplicação, e pode ser desenvolvido, testado e implantado de forma independente.

Por que a Comunicação é Importante?
Agora que temos várias peças independentes (micro-frontends), precisamos de uma forma de fazê-las trabalhar juntas, como as peças de um quebra-cabeça se encaixam para formar uma imagem completa. Isso é onde a comunicação entre micro-frontends se torna crucial.

Métodos de Comunicação
Existem várias maneiras de permitir que micro-frontends se comuniquem entre si. Vamos explorar três métodos principais: eventos, callbacks e o uso de um barramento de eventos.

Eventos
Uma forma comum de comunicação em aplicações web é através do uso de eventos. Um micro-frontend pode "escutar" por eventos específicos. Quando outro micro-frontend "emite" ou "dispara" esse evento, o primeiro pode reagir a ele.

Exemplo:

// Micro-frontend A emite um evento
document.dispatchEvent(new CustomEvent('atualizarUsuario', { detail: { nome: 'João' } }));

// Micro-frontend B escuta o evento
document.addEventListener('atualizarUsuario', (e) => {
  console.log(`Nome do usuário atualizado para: ${e.detail.nome}`);
});
COPIAR CÓDIGO
Callbacks
Callbacks são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma tarefa. Um micro-frontend pode fornecer uma função callback para outro, que a executa em um momento apropriado.

Exemplo:

// Micro-frontend A define uma função callback
function mostrarAlerta(mensagem) {
  alert(`Alerta do Micro-frontend A: ${mensagem}`);
}

// Micro-frontend B recebe a função callback e a executa
function atualizarDados(callback) {
  // Atualiza os dados aqui...
  callback('Dados atualizados com sucesso!');
}

atualizarDados(mostrarAlerta);
COPIAR CÓDIGO
Barramento de Eventos
Um barramento de eventos é uma forma mais avançada de gerenciar a comunicação entre micro-frontends. Ele funciona como um sistema centralizado onde os micro-frontends podem publicar (emitir) eventos ou se inscrever (escutar) para receber notificações de eventos específicos.

Exemplo:

// Criação de um simples barramento de eventos
const barramentoDeEventos = {
  listeners: {},
  subscribe(eventType, listener) {
    this.listeners[eventType] = this.listeners[eventType] || [];
    this.listeners[eventType].push(listener);
  },
  publish(eventType, arg) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].forEach(listener => listener(arg));
    }
  }
};

// Micro-frontend A se inscreve para ouvir o evento 'atualizar'
barramentoDeEventos.subscribe('atualizar', (dados) => {
  console.log(`Recebendo dados para atualizar: ${dados}`);
});

// Micro-frontend B publica o evento 'atualizar'
barramentoDeEventos.publish('atualizar', 'Dados novos');
COPIAR CÓDIGO
Conclusão
A comunicação entre micro-frontends é essencial para construir aplicações web complexas e escaláveis. Utilizando eventos, callbacks e um barramento de eventos, podemos garantir que diferentes partes da nossa aplicação possam trabalhar juntas de forma eficiente. Compreender esses métodos de comunicação é um passo importante para dominar o desenvolvimento de micro-frontends. Continue explorando e experimentando com esses conceitos para se tornar ainda mais proficiente nessa área!


## mao na massa 
Descrição do Problema:
Você está construindo o "HomeHub", um painel de controle centralizado para gerenciar várias aplicações micro-frontend, como um painel de notícias, clima, e controle de dispositivos inteligentes em casa. Você decidiu usar o single-spa para orquestrar essas aplicações de forma eficiente. No entanto, você percebeu que o painel de navegação, um componente crucial para a navegação entre as diferentes aplicações, ainda não foi registrado no seu orquestrador. Sua tarefa é adicionar o registro da aplicação de navegação ao seu orquestrador single-spa, garantindo que ela esteja ativa e acessível em todas as páginas.

Código:
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "<https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js>"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@home-hub/navbar",
  app: () => System.import("@home-hub/navbar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
COPIAR CÓDIGO
VER OPINIÃO DO INSTRUTOR
Opinião do instrutor

Solução + Explicação:
Para resolver este problema, você precisa registrar a aplicação de navegação (navbar) no orquestrador single-spa. Isso é feito utilizando a função registerApplication, onde você especifica o nome da aplicação (@home-hub/navbar), a função para carregar a aplicação (app: () => System.import("@home-hub/navbar")), e as condições sob as quais a aplicação deve estar ativa (activeWhen: ["/"]). Isso garante que a barra de navegação esteja disponível em todas as páginas do "HomeHub". O método start com a opção urlRerouteOnly: true é utilizado para iniciar o single-spa, garantindo que ele só manipule as rotas que mudam, otimizando o desempenho.


# 3. Trabalhando com MFE's

## transcrição aula 2
Agora, criaremos o micro front-end para a navbar do dashboard.

Criando o micro front-end para Navbar
No VS Code, abrimos uma nova aba do terminal. Para isso, na lateral inferior direita, clicamos no botão identificado pelo ícone de "+".

Rodamos o comando npx create-single-spa e, como já fizemos esse comando algumas vezes, faremos esse processo um pouco mais rápido.

npx create-single-spa
COPIAR CÓDIGO
O diretório para esse novo micro front-end será chamado de react-navbar. Após selecionamos a primeira opção, single-spa application / parcel.

Queremos utilizar o React, então selecionamos essa opção, e depois selecionamos o npm como gerenciador de pacotes. Após, usaremos o TypeScript, então selecionamos a opção "Yes". Em seguida, passamos o nome da organização como home-hub e o nome do projeto react-navbar.

Registrando a aplicação no orquestrador
Enquanto a configuração inicial está sendo feita, adiantaremos algumas configurações. No arquivo home-hub-root-config.ts, no orquestrador, faremos o registro da aplicação.

Para isso, duplicamos o código das linhas 3 e 7, onde está o hello world. Após, substituímos o hello-word por react-navbar e salvamos o arquivo.

home-hub-root-config.ts

//Código omitido

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: ['/'],
});
COPIAR CÓDIGO
Configurando o import
Enquanto o preview está formatando e salvando, abrimos o arquivo index.ejs. Duplicamos o trecho de código da linha 51 e colamos logo abaixo. Na linha acima, adicionamos uma vírgula, pois é um JSON e pode ocasionar algum problema de configuração.

Na linha que duplicamos, mudamos de hello world por react-navbar, o nome do novo micro front-end. Após, mudamos a porta para 8501 para fazermos alguns testes. O código fica da seguinte forma:

index.ejs

<script type="systemjs-importmap">
    {
        "imports": {
            "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
            "@home-hub/hello-world": "//localhost:8500/home-hub-hello-world.js",
            "@home-hub/react-navbar": "//localhost:8501/home-hub-react-navbar.js"
        }
    }
</script>
COPIAR CÓDIGO
Ajustando o arquivo .eslintrc
Voltamos para o arquivo home-hub-root-config.ts. Manteremos dessa forma, pois queremos mostrar um detalhe interessante. No explorador, na lateral esquerda do VS Code, abrimos a pasta do react-navbar que acabamos de instalar o micro front-end.

Abrimos o arquivo .eslintrc e apagamos as linhas de código "parser" e "plugin" para parar de conflitar com as configurações do sistema que configuramos. Ficando conforme abaixo.

.eslintrc

{
    "extends": ["ts-react-important-stuff"]
}
COPIAR CÓDIGO
Renderizando o componente Navbar
Feito isso, acessamos src > root.componet.tsx. Em return, apagamos o trecho {promps.name} is mounted! e passamos Navbar para visualizarmos esse componente sendo renderizado na tela.

root.componet.tsx

export default function Root(props) {
    return<section>Navbar</section>;
}
COPIAR CÓDIGO
Se voltarmos ao navegador, notamos que ainda não está sendo exibido, pois não rodando o projeto que acabamos de criar. Sendo assim, no terminal que criamos, passamos o comando cd para irmos para dentro da pasta.

cd
COPIAR CÓDIGO
Após, passamos npm start -- --port 8501.

npm start -- --port 8501
COPIAR CÓDIGO
Após analisar, notamos que por enquanto não ocorreu nenhum erro. Foi pego as referências externas do react e do react-dom e gerou o código. Abrimos novamente o navegador e atualizamos a página. Feito isso, é exibido o novo micro front-end que usaremos para a navbar.

Entendendo as rotas
Antes de começarmos a instalar algumas dependências de estilização, há um detalhe muito interessante sobre a rota. Nesse momento, não estamos lidando com roteamento e autenticação. Esse não é o objetivo desse curso, é um tema que podemos nos aprofundar futuramente em outro curso sobre roteamento e autenticação.

Porém, no navegador, se adicionarmos na URL /docs e pressionarmos "Enter", perceba que continua sendo exibido o "Hello world" e o "Navbar".

Voltarmos então no arquivo home-hub-root-config.ts, que é onde fazemos a verificação de onde estará ativo o micro front-end e onde estará desativado.

Configurando rotas específicas
Por exemplo, no hello-world, se em activeWhen: ['/'] passarmos '/hello-world' e salvarmos, estaremos dizendo para ser exibido apenas nessa rota.

//Código omitido

registerApplication({
    name: '@home-hub/hello-world',
    app: () => System.import<LifeCycles>('@home-hub/hello-world'),
    activeWhen: ['/hello-world'],
});
COPIAR CÓDIGO
Se voltarmos no navegador e atualizarmos a página, passando o caminho "localhost:9000/docs" visualizamos apenas o "Navbar". O mesmo acontece se voltarmos para a raíz "localhost:9000".

Porém, se acessarmos "localhost:9000/hello-world" repare que a mensagem "Hello World" e o "Navbar" aparecem. Porém, o interessante é que aparecem em ordem invertida.

Ordem de registro das aplicações
No arquivo home-hub-root-config.ts tem uma ordem em que essas aplicações estão sendo registradas. Nesse caso, a ordem não importa, pois a navbar está sendo renderizada em todas as rotas e o hello-world tem a condição de aparecer apenas nessa rota.

Nesse caso, é utilizado o princípio de que o componente que está sendo renderizado em todas as rotas estará sempre no topo, enquanto os outros, que são condicionais, serão renderizados abaixo dele.

Esse é um fator muito importante no momento de fazer o registro das aplicações e colocar as rotas onde estarão ativos. Perceba que isso é um array, então, conseguimos passar mais de uma rota para estar ativo.

Podemos, por exemplo, adicionar vírgula e passar '/docs'. Conforme abaixo:

//Código omitido

registerApplication({
    name: '@home-hub/hello-world',
    app: () => System.import<LifeCycles>('@home-hub/hello-world'),
    activeWhen: ['/hello-world', '/docs'],
});
COPIAR CÓDIGO
Assim, o hello-world passa a ser exibido nessas duas rotas. Se acessarmos "localhost:9000/docs", ele aparece. Porém, repare que a ordem inverteu. Isso acontece, pois temos duas condições que a rota está exibindo o nosso componente de hello-world. Como ele tem mais de uma condição de exibição, ele volta para o topo da pilha de componentes e a Navbar vai para baixo.

É importante sabermos disso no momento de fazer a configuração das rotas que as aplicações serão exibidas.

Outro ponto importante é que no activeWhen, podemos entrar na documentação e explorar como ele está sendo utilizado. Conseguimos trocar a forma que ele está sendo exibido por um array e utilizar a função de location, (location) => location.pathname ===.

Nessa função, conseguimos passar exatamente o caminho que será exibido. Nesse caso, queremos que seja exibido somente na hello-world. Podemos fazer o mesmo na Navbar, da seguinte forma:

//Código omitido

registerApplication({
    name: '@home-hub/hello-world',
    app: () => System.import<LifeCycles>('@home-hub/hello-world'),
    activeWhen: (location) => location.pathname === '/hello-world',
});

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: (location) => location.pathname === '/',
});
COPIAR CÓDIGO
Após salvar o arquivo e acessarmos a rota "localhost:9000/docs", não visualizamos nada. Já se acessarmos a raiz, visualizamos somente a navbar e em "localhost:9000/hello-world" visualizamos apenas o "Hello World".

Assim, conseguimos colocar um array de caminhos que será exibido nessas localizações dentro do navegador ou conseguimos fazer essas configurações mais específicas para ser exibida somente em um local.

Isso será muito interessante quando trabalharmos com roteamento compartilhamento de informações. Lembrando que esse não é o foco do curso, mas é importante sabermos como configurar rotas em casos mais específicos.

No vídeo seguinte lidaremos com as dependências para estilizar a navbar. Te esperamos lá!

## Transcrição aula 3
Faremos a estilização do projeto. Nosso foco é a arquitetura micro front-end, então, para facilitar, usaremos os componentes do Material UI. Se analisarmos o Figma, o projeto está utilizando esses componentes para facilitar a implementação e poupar tempo.

Preparando o projeto e instalando as dependências
Vamos instalar as dependências do Material UI no Micro front-end de navbar. Para isso, acessamos a documentação do Material UI e copiamos o trecho de código referente ao Default installation.

Antes de prosseguirmos, precisamos parar de rodar o projeto navbar. Então, no terminal pressionamos "Ctrl + C". Depois, colamos o trecho de código npm install.

npm install @mui/material @emotion/react @emotion/styled
COPIAR CÓDIGO
Enquanto a instalação ocorre, faremos algumas limpezas referentes ao Hello World no projeto. Já ilustramos as situações de navegação que queríamos para este momento, então não precisaremos dele mais.

No arquivo home-hub-root-config.ts do orquestrador, apagamos o registro do Hello World da linha 3 até a 7 e salvamos.

home-hub-root-config.ts

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: (location) => location.pathname === '/',
});

start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Depois, no arquivo index.ejs, apagamos a linha 51 onde está fazendo a importação do hello-world. Aproveitamos também para trocar a porta que o react-navBar está rodando para 8500.

//Código omitido

<script type="systemjs-importmap">
    {
        "imports": {
            "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
            "@home-hub/react-navbar": "//localhost:8500/home-hub-react-navbar.js"
        }
    }
</script>

//Código omitido
COPIAR CÓDIGO
Removendo componentes não utilizados
Após, no explorer, procuramos pela pasta "hello-world", clicamos com o botão direito e depois em "Delete", já que não usaremos mais.

Agora, temos o "root", que é o orquestrador dos micro front-end e o micro front-end* da navbar, onde fizemos a instalação das dependências do Material UI.

Instalando dependências adicionais
Feito isso, voltamos para a documentação do Material UI para instalar as outras dependências. Descemos a tela até a seção Roboto font e copiamos o trecho de código.

No VS Code, faremos a instalação no micro front-end da navbar, então colamos e executamos.

npm install @fontsource/roboto
COPIAR CÓDIGO
Novamente no navegador, copiamos o comando da seção Icons e colamos no terminal.

npm install @mui/icons-material
COPIAR CÓDIGO
Configurações e conceitos do micro front-end
É importante ressaltarmos alguns pontos na forma como o micro front-end trabalha. O hello-world era um projeto todo em React, que estava renderizando o "Hello World" na tela. Mas, ele tinha suas próprias dependências, gerenciamento de estado, seu próprio ciclo de vida. Era um projeto totalmente à parte da navbar.

Agora, estamos instalando essas dependências do Material UI na navbar, só ela que terá essas dependências do Material UI. Se quisermos um novo projeto, por exemplo, em Angular, e quisermos utilizar o SASS, LESS, ou qualquer outra coisa dentro do Angular, temos liberdade de fazer isso sem nenhum problema.

Será um projeto separado, com seu próprio guia de estilos, só que vão conversar entre esses projetos. Essa característica do micro front-end, de ter projetos separados com suas próprias dependências e funcionando juntos, é muito interessante.

Iniciando o projeto
As dependências que precisaremos para a estilização da navbar estão concluídas. Sendo assim, abrimos outra aba no terminal. Feito isso, passamos o comando cd .. para voltarmos uma pasta, para a raiz do projeto.

cd
COPIAR CÓDIGO
Após, passamos cd root e executamos o npm start do root, na porta 9000.

cd root
COPIAR CÓDIGO
npm start
COPIAR CÓDIGO
Nenhum erro foi encontrado. Após, no terminal que está rodando a navbar, passamos npm start, porém agora utilizando a porta 8500.

npm start -- --port 8500
COPIAR CÓDIGO
Gerou os arquivos sem nenhum erro. Então, abrimos o navegador e atualizamos a rota "localhost:9000". Feito isso, a navbar está sendo exibida sem nenhum problema.

Refatorando o projeto
Agora, começaremos a implementação da navbar, utilizando os componentes do Material UI. No explorador, acessamos "react-navbar". Limparemos o que não usaremos mais. Apagamos o arquivo root- component.test.tsx e o jest.config .js.

Dentro do "src", acessamos o arquivo root.component.tsx. Depois, clicamos nele com o botão direito e depois em "Rename". Renomeamos para App, seguindo a nomenclatura. Após, no campo de código, na primeira linha, mudamos de Root() para App().

App.tsx

export default function App() {
    return <section>Navbar</section>;
}
COPIAR CÓDIGO
Até refatorarmos todo o código com essa atualização, aparecerão alguns erros. Mas, acessamos o arquivo home-hub-react-navbar.tsx e, próximo à linha 4, mudamos o import Root para import App. Dentro de const lifecycles, próximo à linha 9, mudamos de rootComponent: Root para rootComponent: App.

Aproveitamos também para apagar as linhas de código abaixo, referentes ao errorBoundary(), pois não faremos mais essa implementação no micro front-end.

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const { bootstrap, mount, unmount } = lifecycles;
COPIAR CÓDIGO
Salvamos o arquivo e voltamos ao navegador. Ao atualizar a página, repare que continua aparecendo a navbar.

Próximos passos
Antes de começarmos a implementação, navegaremos na documentação do Material UI. Na barra de menu, na lateral esquerda da tela, clicamos em "Componentes > App Bar".

Esse será o componente que usaremos no topo do aplicativo. Na página em que somos direcionados, encontramos exemplos de código que podemos utilizar.

No vídeo seguinte, utilizaremos esse componente do Material UI dentro da navbar. Até lá!


## Instalando a biblioteca material design no projeto navbar
- https://mui.com/material-ui/getting-started/installation/


## mao na massa 
Descrição do Problema:
Você está construindo o "HomeHub", um dashboard centralizado para gerenciar dispositivos inteligentes em casa. Você precisa adicionar um micro-frontend para controlar as luzes. Este micro-frontend deve ser uma nova seção na página, permitindo ao usuário ligar/desligar as luzes e ajustar a intensidade. Como desenvolvedor iniciante, seu desafio é integrar este micro-frontend ao "HomeHub", garantindo que ele se comunique corretamente com o restante da aplicação.

Código para o Exercício:
import React, { useState } from 'react';
import { Box, Slider, Switch, Typography } from '@mui/material';

function LightControl() {
  const [light, setLight] = useState(false);
  const [intensity, setIntensity] = useState(30);

  const handleLightChange = (event) => {
    setLight(event.target.checked);
  };

  const handleIntensityChange = (event, newValue) => {
    setIntensity(newValue);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h6">Luzes</Typography>
      <Switch checked={light} onChange={handleLightChange} />
      <Typography>Intensidade</Typography>
      <Slider value={intensity} onChange={handleIntensityChange} aria-labelledby="continuous-slider" />
    </Box>
  );
}


export default LightControl;


--
Solução + Explicação:
O código acima representa um micro-frontend para controlar as luzes no "HomeHub". Ele utiliza componentes do Material-UI para criar uma interface de usuário interativa. O componente LightControl mantém o estado da luz (ligada/desligada) e sua intensidade. Utiliza-se um Switch para ligar/desligar as luzes e um Slider para ajustar a intensidade. A integração desse micro-frontend no "HomeHub" permite ao usuário controlar as luzes de sua casa diretamente do dashboard.

Para integrar este micro-frontend ao "HomeHub", você deve importar e renderizar o componente LightControl na aplicação principal. Isso pode ser feito adicionando <LightControl /> no componente principal ou em qualquer outro componente que represente a página ou seção onde você deseja que o controle de luzes apareça.

## Para saber mais: segurança em arquiteturas de micro-frontends
Quando falamos sobre construir aplicações web modernas, uma das abordagens que vem ganhando bastante destaque é a arquitetura de micro-frontends. Essa abordagem permite que equipes diferentes trabalhem em partes distintas da interface do usuário (UI) de forma independente, como se cada parte fosse um pequeno aplicativo. Mas, como em qualquer arquitetura, garantir a segurança dos dados e das comunicações entre esses componentes separados é crucial. Vamos entender melhor como fazer isso.

Segurança dos Dados
A segurança dos dados em micro-frontends é fundamental. Cada micro-frontend pode precisar acessar informações sensíveis, como dados do usuário ou informações de pagamento. Para garantir que esses dados sejam tratados de forma segura, você pode adotar algumas práticas:

1. Autenticação e Autorização
Cada micro-frontend deve verificar se o usuário está autenticado (ou seja, se ele é quem diz ser) e autorizado (se tem permissão para acessar determinados dados ou realizar certas ações). Isso geralmente é feito através de tokens de autenticação, como JWT (JSON Web Tokens).

Exemplo de código:

// Verificar se o token de autenticação está presente e é válido
if (tokenValido) {
    // Permitir acesso ao micro-frontend ou a determinada funcionalidade
} else {
    // Redirecionar para a página de login ou mostrar mensagem de erro
}
COPIAR CÓDIGO
2. Comunicação Segura
Quando micro-frontends precisam se comunicar entre si ou com o backend, é importante que essa comunicação seja segura. Isso geralmente é feito usando HTTPS, que criptografa os dados enviados pela rede, impedindo que sejam interceptados ou alterados.

3. CORS (Cross-Origin Resource Sharing)
Quando você tem micro-frontends hospedados em diferentes domínios, você precisa configurar adequadamente as políticas de CORS no servidor. Isso garante que apenas os domínios autorizados possam fazer requisições ao seu serviço, protegendo contra ataques de cross-site.

Segurança das Comunicações
Além de proteger os dados, é importante garantir que as comunicações entre os micro-frontends sejam seguras. Isso inclui tanto a comunicação direta entre micro-frontends quanto a comunicação com o backend.

1. Isolamento de Runtime
Uma prática recomendada é isolar o ambiente de execução (runtime) de cada micro-frontend. Isso significa que, mesmo que um micro-frontend seja comprometido, ele não conseguirá afetar os outros. Frameworks e bibliotecas de micro-frontends geralmente oferecem meios para fazer esse isolamento.

2. Validação de Entradas
Sempre valide as entradas recebidas, seja de usuários ou de outros micro-frontends. Isso ajuda a prevenir ataques como injeção de SQL ou XSS (Cross-Site Scripting), onde entradas maliciosas são usadas para comprometer a aplicação.

Exemplo de código:

// Função para validar entradas
function validarEntrada(entrada) {
    // Verificar se a entrada é segura
    // Por exemplo, remover tags HTML para prevenir XSS
    return entradaSegura;
}
COPIAR CÓDIGO
Conclusão
Garantir a segurança em arquiteturas de micro-frontends envolve proteger tanto os dados quanto as comunicações entre os componentes. Isso inclui implementar autenticação e autorização robustas, garantir comunicações seguras, configurar políticas de CORS adequadamente, isolar os ambientes de execução e validar todas as entradas. Adotando essas práticas, você pode construir aplicações mais seguras e confiáveis.

Lembrando que a segurança é um campo em constante evolução, então é importante estar sempre atualizado sobre as melhores práticas e novas vulnerabilidades que possam surgir.

##
# 4. 
## Criando o menu lateral
## transcricao aula 2
Para deixarmos a nossa barra de navegação, Navbar, ainda mais completa e bem próxima do design que temos no Figma, precisamos implementar dois menus flutuantes.

Inserindo menus flutuantes
O primeiro que vamos implementar é um menu que surge quando clicamos no ícone do perfil. O segundo menu flutuante será um menu com um nome diferente, ele será do tipo Drawer (em portuês, "gaveta"). Portanto, iremos criar dois menus diferentes, mas que desempenham a mesma função, de abrir um menu dependendo do local que clicarmos.

Iniciamos voltando ao navegador e acessando o Figma do projeto para entender como serão esses menus.

Analisando no Figma
O primeiro que vamos implementar, na visão do Figma, é este no canto superior direito.

Interface de usuário de um aplicativo com menu contendo o nome 'Pedro Mello', o e-mail 'pedro.mello@gmail.com' e opções de menu para Configurações, Perfil e Sair, com ícones representativos ao lado de cada opção. Na parte superior, há um ícone de sino e outro de perfil da pessoa usuária que expande esse menu flutuante.
Ao clicarmos no ícone da conta, representado por um boneco junto a um círculo branco, é aberto um menu flutuante. Esse menu exibe o nome da pessoa logada, o e-mail, e contém dois botões: um de configuração e outro de perfil.

Após esses itens, há um divisor (divider) seguido por um botão para sair da conta. Este será o primeiro menu que implementaremos.

Interface de usuário do aplicativo na tela Home Hub mostrando o menu de navegação com quatro opções: 'Visão geral', 'Dispositivos', 'Segurança' e 'Configurações', com ícones correspondentes ao lado de cada opção.
Em seguida, implementamos o menu do lado esquerdo, que aparece ao clicarmos no ícone do Home Hub. Este ícone ainda não foi implementado em nossa aplicação, mas em breve o adicionaremos para melhorar a aparência da nossa barra de navegação.

No entanto, vamos desviar um pouco do protocolo e do estilo definidos no Figma, pois pretendemos implementar um Drawer em vez do menu flutuante. Isso porque o Drawer, ao deixar o fundo da tela esmaecido e levemente desfocado, proporciona uma experiência visual mais agradável. Isso permitirá uma diferenciação na experiência da pessoa usuária dentro da aplicação.

Se você preferir implementar o menu flutuante e personalizar o código ao seu gosto, não há problema. Basta seguir o que faremos nesta primeira etapa do código. A segunda etapa, que envolve a implementação do Drawer, é opcional, caso você queira replicar o que estamos fazendo.

Já temos o código copiado do Material UI para o menu lateral do ícone da conta, em "App bar with a primary search field" (em português, "Barra de aplicativos com um campo de busca principal").

Ao clicarmos no menu no ícone da conta no canto superior direito, será aberto um menu flutuante, onde aparece Profile (Perfil) e My Account (Minha Conta).

Já temos esse código pronto. Voltamos ao VS Code e, dentro do arquivo App.tsx do micro front-end React Navbar, após a declaração function App(), pulamos duas linhas da linha 6 para a linha 7 para garantir uma boa indentação.

Depois na linha 7, colamos o seguinte trecho de código que já temos copiado do Material UI.

App.tsx

// código omitido

export default function App() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

// código omitido
COPIAR CÓDIGO
Para explicar o que este código está fazendo: como o nosso menu será ancorado a um elemento no HTML, estamos criando um useState na linha 7. Esse useState definirá o elemento ancorado a partir de uma tag HTML. Além disso, faremos o import do useState, que ainda não está sendo feito, na linha 5, importando-o do React.

App.tsx

// código omitido

import { useState } from 'react';

// código omitido
COPIAR CÓDIGO
Na linha 9 (const isMenuOpen = Boolean(anchorEl)), estamos validando se o menu está aberto utilizando a função Boolean() do JavaScript. Como o anchorEl pode ser nulo ou conter um elemento HTML, essa validação é feita com Boolean, que retorna verdadeiro ou falso, indicando se existe um elemento ali ou se ele é nulo. Assim, conseguimos determinar se o menu está aberto ou fechado.

Na linha 11 temos a função handleMenuClose() que vai fechar o menu quando ele estiver aberto. A função handleProfileMenuOpen() vai abrir este menu, então, quando clicarmos no ícone do perfil, ele vai abrir a partir desta função, e na linha 19 temos o render deste menu.

Adicionaremos alguns imports do Material UI. Na linha 20, faremos o import do menu do Material UI, e na linha 34 faremos o import do menuItem. Esse import servirá tanto para fechar a tag na mesma linha quanto para o menuItem na linha abaixo, onde está escrito "My Account" (Minha Conta).

Para realizar o import, você pode clicar no ícone de lâmpada à esquerda da linha sublinhada em vermelho. Isso se aplica às linhas que contêm "Menu" e "MenuItem".

No MenuItem, podemos alterar de "Profile" para "Configurações" e de "My account" para "Perfil".

// código omitido

        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
    </Menu>
);

// código omitido
COPIAR CÓDIGO
Acima e abaixo temos mais um menu, então copiamos a linha de Configurações para cima e também para baixo.

// código omitido

        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
    </Menu>
);

// código omitido
COPIAR CÓDIGO
Na linha 34, adicionamos a opção "Usuário" para já tê-la disponível no menu, mas por enquanto não faremos nenhuma alteração. Abaixo dela, adicionamos o Divider do Material UI para definição. Após as linhas 36 e 37, colocaremos outro Divider e na linha 39, colocaremos a opção "Sair".

// código omitido

        <MenuItem onClick={handleMenuClose}>Usuário</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
);

// código omitido
COPIAR CÓDIGO
No momento, os ícones estão apenas realizando uma função de onClick que fecha o menu ao serem clicados. Estamos focando na estilização neste momento, sem considerar ainda a funcionalidade específica de cada menu.

Questões como perfil, configurações e outros detalhes funcionais não serão abordadas neste curso. Nosso objetivo é deixar o projeto mais próximo do design neste momento.

O menu está configurado conforme o design do Figma, com o divider abaixo da opção "Usuário", outro divider abaixo das opções "Configurações" e "Perfil", e a opção "Sair".

Ajustando o menuItem
Descendo o código na linha 57, vamos adicionar mais um trecho de código referente ao menuItem no momento que ele abre o menu para nós. Para isso, voltamos à documentação do Material UI na seção "App bar with a primary search field". Nela, clicamos em "Show code" (em português, "mostrar código") e deixamos "TS" selecionado.

Linha de código copiado da documentação:

<MenuItem onClick={handleProfileMenuOpen}>
COPIAR CÓDIGO
Copiamos essa linha de código, voltamos ao arquivo onde estamos chamando o IconButton referente às informações de conta do usuário e colamos. Fechamos a tag na linha 68 e salvamos.

// código omitido

<MenuItem onClick={handleProfileMenuOpen}>
    <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        onClick={() => {}}
        color='inherit'
    >
        <AccountCircle />
    </IconButton>
</MenuItem>

// código omitido
COPIAR CÓDIGO
Estou enfrentando um erro no arquivo devido ao eslint que estou utilizando, pois as configurações do projeto em TypeScript estão um pouco diferentes do que o eslint espera.

Esse erro não afeta a compilação nem está relacionado a alguma regra específica; é apenas o eslint que está reclamando de uma tag que não estava esperando. Portanto, pode desconsiderar isso, não há nenhum problema real.

Precisamos adicionar o renderMenu abaixo do nosso código, entre a linha 86 (AppBar) e a linha 87 (Box).

// código omitido

            </AppBar>
            {renderMenu}
        </Box>
    );
}
COPIAR CÓDIGO
Inserimos o renderMenu, salvamos o arquivo e depois verificamos no navegador se a função está funcionando corretamente.

Testando o projeto
localhost:9000
COPIAR CÓDIGO
Estamos testando o projeto, o micro front-end da NavBar. Quando clicamos no ícone de conta no canto superior direito, ele abre as opções de usuário, configurações, perfil e sair, com os dividers conforme configurado no Figma. Ainda há alguns ajustes a serem feitos, como adicionar informações como e-mail e ícones.

Próximos Passos
Porém, vamos encerrar por aqui e continuar a implementação do nosso Drawer no próximo vídeo. Espero você para criarmos um Drawer interessante para o nosso Home Hub!

##
##
##