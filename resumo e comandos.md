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

## Transcrição aula 3
Vamos agora implementar o Drawer para a nossa NavBar.

Para estarmos na mesma página, de uma aula para outra, adicionamos a logo do Home Hub dentro da pasta assets no nosso projeto. Também fizemos a seguinte troca no código:

App

// código omitido

<img src={HomeHubLogo} style={{ width: '176px' }} />

// código omitido
COPIAR CÓDIGO
Na linha 48, substituímos a tipografia e o texto "Home Hub" pela imagem da HomeHubLogo na nossa NavBar.

Vamos exibir rapidamente no navegador como está funcionando. Voltando ao navegador, na parte superior esquerda temos o nosso micro front-end da NavBar, agora utilizando a logo conforme o nosso protótipo do Figma.

Agora, vamos iniciar a implementação do Drawer.

Analisando a documentação
Primeiro, vamos na documentação do Material UI.

Já temos a implementação do Drawer no componente. Ao clicarmos no botão "Open Drawer" em "Temporary drawer" (em português, "Drawer temporário"), será exibido o comportamento desse Drawer.

No caso, será exibido um menu lateral esquerdo com as opções: "Inbox", "Starred", "Send email", "Drafts", "All mail", "Trash" e "Spam".

Desejamos adicionar um menu flutuante no lado direito, que será aberto ao clicarmos na logo do Home Hub, conforme ilustrado nesse exemplo da documentação.

Implementando o Drawer
Vamos pegar os trechos de código necessários para importar no nosso projeto. Para isso, abaixo do botão "Open Drawer", clicamos em "Expand code" (em português, "Expandir código") e deixamos "TS" selecionado.

Dentro disso, temos a seção UseState, responsável pela lógica de abrir e fechar o Drawer, e também a const, que abarca toda a lógica de estilização desse componente.

Trecho copiado da documentação:

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
COPIAR CÓDIGO
Copiamos esse trecho de código. Agora, vamos voltar ao nosso projeto no arquivo App.tsx do navbar. Na linha 10 após o isMenuOpen, vamos pular duas linhas para a indentação e colar o trecho de código.

// código omitido

export default function App() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

// código omitido
COPIAR CÓDIGO
Agora, temos o trabalho de arrumar os imports e retirar os imports desnecessários.

Vamos começar importando a lista na linha 20. Para isso, clicamos no ícone de lâmpada sobre o List que está sublinhado na cor vermelha e selecionamos "@mui/mater…".

Também importamos o ListItem do Material.UI na linha 22, o ListItemButton, o ListItemIcon e o ListItemText. Os ícones InboxIcon e MailIcon, por enquanto, não vamos fazer a importação deles, porque precisamos pegar esse código no Material.UI.

Por enquanto, é isso.

Agora, podemos voltar ao Material UI e subir um pouco o trecho de código. Copiamos as linhas onde ele está pegando o ícone de Mail e de Inbox para colar no nosso projeto.

Trecho copiado da documentação:

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
COPIAR CÓDIGO
Trecho de código no arquivo App.tsx:

// código omitido

import { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// código omitido
COPIAR CÓDIGO
Por enquanto, vamos fazer a troca pelos ícones corretos, de acordo com o Figma, mas só para termos a exibição inicial do nosso Drawer.

Por enquanto, não ocorrerá nenhuma ação, pois ainda não estamos invocando a implementação do Drawer que criamos. Portanto, na linha 86, após a tag Toolbar, vamos incluir um MenuItem e, junto a ele, vamos atribuir a função onClick={}.

Essa função onClick será responsável pelo toggleDrawer, que é a função responsável por abrir e fechar nosso Drawer, passando o valor booleano true.

Vamos recortar essa tag de fechamento e colocá-la após a nossa imagem, que o intuito é que cliquemos na imagem e ele abra o Drawer.

// código omitido

<Toolbar>
    <MenuItem onClick={toggleDrawer(true)}>
        <img src={HomeHubLogo} style={{ width: '176px' }} />
    </MenuItem>

// código omitido
COPIAR CÓDIGO
Ainda não finalizamos a implementação, precisamos adicionar a lógica de renderização do Drawer. Isso deve ser feito na parte final do código, onde o RenderMenu está sendo chamado. Para isso, podemos consultar a documentação do Material UI, descer um pouco na seção de código e encontrar o Drawer, que possui as propriedades Open e OnClose.

Trecho de código retirado da documentação:

<Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
</Drawer>
COPIAR CÓDIGO
Copiamos esse trecho de código e pulamos uma linha após o fechamento da tag AppBar (linha 120). Logo após, colamos o trecho de código.

// código omitido

</AppBar>
<Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
</Drawer>

// código omitido
COPIAR CÓDIGO
Agora, fazer a importação do Drawer do Material UI e salvar o nosso código.

Ao retornarmos à nossa navbar, podemos observar que ao passarmos o mouse sobre o HomeHub no canto superior esquerdo, o cursor muda para uma mão, indicando que é clicável. Além disso, o fundo da imagem fica ligeiramente mais escuro, criando a impressão de profundidade e destacando a capacidade de interação desse objeto.

Ao clicarmos no HomeHub, o Drawer é ativado no lado esquerdo, exibindo o menu lateral com as opções mencionadas anteriormente. Se clicarmos fora do Drawer, ele se fecha automaticamente. Também podemos clicar no menu de usuário no canto superior direito para visualizar as informações, como já havíamos configurado anteriormente.

Importante destacar que essas interações são independentes entre si. A diferença notável é que o Drawer escurece levemente o fundo, criando uma sensação de proximidade com o menu e proporcionando um efeito visual interessante, especialmente em interfaces de dashboard.

Particularmente, gosto muito de utilizar Drawers, principalmente em dashboards, porque acho que fica um efeito bem diferenciado.

Alterando as opções do menu
Vamos proceder à troca dos ícones temporários que estamos usando e também alterar os Arrays de objetos na linha 38, que atualmente exibem nossa lista.

Vamos voltar ao Figma para verificar quais são as opções que temos.

Será "visão geral", "dispositivos", "segurança" e "configurações". Vamos alterar para visão geral na linha 38 no nosso código, dispositivos, segurança e configurações.

App

// código omitido

<List>
    {['Visão geral', 'Dispositivos', 'Segurança', 'Configurações'].map((text, index) => (

// código omitido
COPIAR CÓDIGO
Salvamos essas alterações no código e voltamos ao navegador. Ao atualizar a página e clicar em "HomeHub" na parte superior esquerda, o menu é exibido com as informações fornecidas.

Visão geral
Dispositivos
Segurança
Configurações
Todos os ícones estão incorretos, precisamos fazer essa alteração.

Na verdade, vamos simplificar nossa abordagem. Em vez de mantermos uma lista em duas etapas e o divider nas linhas 47 a 57, vamos deletar essa lista inteira. Para isso, vamos remover as linhas 38 e 45 também.

Trecho de código removido:

<Divider />
<List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    ))}
</List>
COPIAR CÓDIGO
Linhas 38 e 45:

{['Visão geral', 'Dispositivos', 'Segurança', 'Configurações'].map((text, index) => (

))}
COPIAR CÓDIGO
Assim, ficamos com:

// código omitido

        <List>
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
        </List>
    </Box>
);

// código omitido
COPIAR CÓDIGO
Também removemos a lógica da linha 40, onde ele está fazendo essa renderização dos ícones: ({index % 2 === 0 ? <InboxIcon /> : <MailIcon />}).

Agora, dentro do ListItem, removemos as chaves (key={text}), dado que não temos mais uma lista e não estamos mais percorrendo um map.

// código omitido

        <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
        </List>
    </Box>
);

// código omitido
COPIAR CÓDIGO
Dentro do ListItemText na linha 41, digitamos entre aspas simples: 'Visão geral'.

// código omitido

        <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Visão geral'} />
                    </ListItemButton>
                </ListItem>
        </List>
    </Box>
);

// código omitido
COPIAR CÓDIGO
Em seguida, entre as linhas 43 e 38, vamos replicar o item existente mais três vezes, correspondendo aos quatro itens que compõem nossa lista de menu. Podemos contar esses itens como um, dois, três e quatro.

Agora, escrevemos "Dispositivos", "Segurança" e "Configurações" em cada item.

// código omitido

        <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Visão geral'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Dispositivos'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Segurança'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Configurações'} />
                    </ListItemButton>
                </ListItem>
        </List>
    </Box>
);

// código omitido
COPIAR CÓDIGO
Logo após, salvamos essas alterações no código e voltamos ao navegador para recarregá-lo.

Temos no menu lateral as opções de visão geral, dispositivos, segurança e configurações. Vamos agora incluir os ícones conforme o design do Figma.

Adicionando os ícones
Teremos um ícone para a dashboard, chamado de "dashboard", um ícone para Wi-Fi, um cadeado representando o "lock", e o ícone de configurações, chamado "settings" que é a engrenagem.

Dentro da documentação na aba lateral esquerda, dentro de onde encontramos os componentes e os mais adereços que temos dentro do material UI, temos uma seção chamada "Material Icons" e dentro dessa seção conseguimos fazer uma busca pelos ícones.

Os ícones vão ser do tipo Filled, sendo esse primeiro que está marcado em "Filter the style" (em português, "Filtrar o estilo") do lado esquerdo. Esse tipo de ícone é o que já vem preenchido, então é esse que vamos utilizar aqui.

Já temos os nomes dos ícones que registramos anteriormente. Isso nos permite agilizar um pouco mais o processo. O primeiro ícone da lista que iremos procurar no campo de busca é o "SpaceDashboard". Ao clicarmos nele, teremos acesso imediato às informações necessárias para copiar este ícone.

Código exibido no ícone:

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
COPIAR CÓDIGO
Portanto, vamos prosseguir rapidamente com a tarefa de copiar e importar esses ícones para o nosso projeto. Não se esqueça de excluir os ícones de inbox e e-mail da linha 20 e 21, já que não serão utilizados.

Imports removidos do arquivo App.tsx:

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
COPIAR CÓDIGO
Import adicionado ao arquivo App.tsx:

// código omitido

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

// código omitido
COPIAR CÓDIGO
O próximo é o ícone de Wi-Fi, seguido pelo ícone de bloqueio (lock) e, por último, o ícone de configurações (settings).

// código omitido

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WifiIcon from '@mui/icons-material/Wifi';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';

// código omitido
COPIAR CÓDIGO
Vamos colocá-los dentro de ListItemIcon.

Em seguida, temos o ícone de visão geral (SpaceDashboardIcon), o ícone de dispositivos de WifiIcon e de segurança o LockIcon. Por fim, na linha 60, o ícone de configurações (settings icon).

// código omitido

<List>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Visão geral'} />
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <WifiIcon />
            </ListItemIcon>
            <ListItemText primary={'Dispositivos'} />
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <LockIcon />
            </ListItemIcon>
            <ListItemText primary={'Segurança'} />
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Configurações'} />
        </ListItemButton>
    </ListItem>
</List>

// código omitido
COPIAR CÓDIGO
Após salvarmos e retornarmos ao navegador onde nosso projeto está em execução, a página será recarregada, e agora veremos os ícones corretos de acordo com a nossa empresa.

Desafio e Próximos Passos
Antes da próxima aula, gostaríamos de propor um desafio para você. No menu à direita, replicamos o ícone das configurações (settings icon), o ícone do perfil e o ícone de saída (logout). O desafio consiste em implementar esses ícones de acordo com a implementação que realizamos no drawer e também no nosso menu de pessoa usuária.

Esperamos você no nosso próximo vídeo para finalizarmos a personalização da nossa navbar e iniciarmos o micro front-end que vai ser responsável pela dashboard de conteúdos centrais que temos aqui no Figma com esses cards. Até mais!

## Transcrição aula 4
Agora é o momento de nos despedirmos da implementação da Navbar. Passamos alguns vídeos finalizando este processo e já temos o Drawer funcionando com os ícones. Se você completou o desafio, também temos o nosso menu lateral direito do perfil do usuário, com os ícones implementados.

Contextualizando o problema
Agora, voltando ao nosso código, precisamos garantir que a Navbar seja exibida em todas as rotas do projeto antes de iniciarmos o desenvolvimento do próximo micro front-end, que será o conteúdo da nossa dashboard.

Fechamos o arquivo App.tsx, a imagem da nossa logo (home-hub.png), e também o arquivo principal do React Navbar (home-hub-react-navbar), onde já fizemos algumas alterações. Vamos manter o index.ejs aberto, apenas para confirmar algumas questões. Precisamos alterar no arquivo de rotas onde a nossa Navbar vai aparecer.

Neste curso, não abordaremos profundamente questões de roteamento e import map, pois são tópicos mais avançados sobre o funcionamento dos micro front-ends. No entanto, discutiremos alguns conceitos básicos que já vêm sendo mencionados ao longo das aulas.

<%-- código omitido --%>

  <% if (isLocal) { %>
  < script type="systemjs-importmap">
    {
      "imports": {
        "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
        "@home-hub/react-navbar": "//localhost:8500/home-hub-react-navbar.js"
      }
    }

<%-- código omitido --%>

COPIAR CÓDIGO
No arquivo index.ejs, na linha 51, definimos o caminho local para executar o micro front-end da Navbar. Ao criarmos outra dashboard, será necessário adicionar mais uma porta e um import adicional. Verificando que está tudo certo, não será preciso alterar mais nada referente à Navbar nesse arquivo.

No arquivo home-hub-root-config.ts, localizado logo acima do index.ejs, encontramos um ponto crucial para a configuração da nossa aplicação.

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
A função que implementamos na linha 6, a Navbar, só estará ativa se estivermos na rota padrão da aplicação, ou seja, em localhost:9000/. Caso haja qualquer coisa após a barra, a Navbar não será exibida.

Por exemplo, ao voltarmos ao navegador e digitarmos uma rota como localhost:9000/dashboard, a Navbar não será exibida. Precisamos configurar a aplicação para garantir que a Navbar apareça em qualquer rota que contenha uma barra. Em outras palavras, a Navbar deve estar presente em todas as rotas que seguem o formato localhost:9000/*.

Voltamos ao código.

Inserindo a NavBar em todas as rotas
Podemos fazer isso de duas formas.

Primeira abordagem
A primeira abordagem envolve a função que já implementamos, onde passamos um parâmetro location na linha 6. Atualmente, comparamos o pathname com uma string específica. Em vez de verificar se são estritamente iguais, podemos modificar essa comparação para utilizar o método includes().

Dentro desse includes(), que é uma função do JavaScript, passamos dentro de parênteses qualquer string que desejamos que tenha dentro do pathname. Por exemplo, se o pathname incluir barra, desejamos que a Navbar apareça.

home-hub-root-config.ts

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: (location) => location.pathname.includes('/'),
});

start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Ao salvarmos esse trecho de código e retornarmos ao navegador, veremos que a Navbar já está aparecendo na rota dashboard.

localhost:9000/dashboard
COPIAR CÓDIGO
Além disso, se digitarmos qualquer outra rota, como login (localhost:9000/login), a Navbar também estará presente. Essa é uma das maneiras de garantir que a Navbar seja exibida em diversas rotas.

Segunda abordagem
A outra forma de configurar o projeto, que é a configuração padrão do orquestrador ao instalar, envolve especificar um activeWhen, seguido por dois pontos e então inserir um array de localizações.

Por exemplo, ao fornecer o array com "barra" como um dos parâmetros, indicando que "barra" está no conteúdo do array, o sistema interpretará que sempre que a rota incluir "barra", a Navbar será ativada.

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    //activeWhen: (location) => location.pathname.includes('/'),
    activeWhen: ['/'],
});

start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Após voltarmos ao navegador e recarregarmos a página, podemos observar que o NavBar está sendo exibido com sucesso nas rotas /login, /dashboard e na rota principal /.

Também podemos especificar para exibir o NavBar apenas em rotas específicas. Por exemplo, se quisermos que ele seja mostrado apenas nas rotas dashboard e login, podemos configurá-lo dessa forma.

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    //activeWhen: (location) => location.pathname.includes('/'),
    activeWhen: ['/dashboard', '/login'],
});

start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Após salvarmos as configurações e voltarmos ao navegador, notamos que na rota principal (representada apenas por "/"), o NavBar não é exibido. No entanto, se acessarmos a rota /login, ele aparece, e o mesmo ocorre na rota /dashboard.

Agora é uma questão de preferência. Você, estudante, pode escolher entre utilizar a implementação atual da linha 7 (activeWhen: ['/']), que está funcionando, ou seguir a implementação da linha 6 que está comentada. A decisão é sua.

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: (location) => location.pathname.includes('/'),
});

start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Optamos por manter a primeira implementação da linha 6, pois pode ser que precisemos fazer alterações no futuro. Este curso não focará muito em mexer com rotas e detalhes técnicos, mas já fornecemos uma explicação básica de como isso funcionaria.

Agora vamos abrir um novo terminal para fazermos a instalação do micro front-end da dashboard.

Instalando o micro front-end da dashboard
Executamos o comando npx create-single-spa, é o mesmo processo que abordamos em vídeos anteriores.

npx create-single-spa
COPIAR CÓDIGO
Obtemos como retorno:

Directory for new project

Nesse caso específico, vamos nomear o projeto como react-dashboard e defini-lo como do tipo application parcel. Portanto, em "Select type to generate" (em português, ""Selecione o tipo a ser gerado") selecionamos "single-spa application / parcel".

Utilizaremos as tecnologias react, então, em "Which framework do you want to use?" (em português, "Qual framework você deseja usar?") optamos por "react".

Em "Which package manager do you want to use?" (em português, "Qual gerenciador de pacotes você deseja usar?") optamos por "npm". A próxima pergunta é "Will this project use Typescript?" (traduzindo, "Este projeto utilizará TypeScript?"), digitamos "Yes".

Logo após, é solicitado o organization name em que digitaremos "home-hub". O nome do projeto é react-dashboard.

Directory for new project: react-dashboard
Select type to generate: single-spa application / parcel
Which framework do you want to use? react
Which package manager do you want to use? npm
Will this project use Typescript? Yes
Organization name: home-hub
Project name: react-dashboard
Ele apresentou um problema relacionado ao Babel, mas acreditamos que não houve nenhum erro em nossa aplicação. Para verificar se tudo está funcionando corretamente, vamos fechar a aba do terminal.

Vamos duplicar essa linha entre 3 e 4 dentro do root config. Passamos react-dashboard no código duplicado em vez de react-navbar.

import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
    name: '@home-hub/react-navbar',
    app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
    activeWhen: (location) => location.pathname.includes('/'),
});

registerApplication({
    name: '@home-hub/react-dashboard',
    app: () => System.import<LifeCycles>('@home-hub/react-dashboard'),
    activeWhen: (location) => location.pathname.includes('/'),
});
index.ejs
start({
    urlRerouteOnly: true,
});
COPIAR CÓDIGO
Por enquanto, manteremos o activeWhen conforme está aqui. Em seguida, duplicaremos a linha 51 no index.ejs e substituiremos "navbar" por "dashboard".

index.ejs

<%-- código omitido --%>

< % if (isLocal) { % >
< script type="systemjs-importmap">
    {
        "imports": {
            "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
            "@home-hub/react-navbar": "//localhost:8500/home-hub-react-navbar.js"
            "@home-hub/react-dashboard": "//localhost:8500/home-hub-react-dashboard.js"
        }
    }
        
< %-- código omitido --% >

Conclusão e Próximos Passos
Vamos verificar isso funcionando? Então, vamos combinar o seguinte: esperamos por você no próximo vídeo para rodarmos os dois micro front-end juntos e começarmos a desenvolver os cards e o conteúdo da dashboard.







## Transcrição aula 5 - navbar interativa
Você está desenvolvendo um "Home Hub", um painel de controle para gerenciar dispositivos inteligentes em casa. Você foi encarregado de criar a barra de navegação (navbar) que permitirá aos usuários navegar facilmente entre diferentes seções: Visão Geral, Dispositivos, Segurança e Configurações. Para tornar a interface amigável e moderna, você decidiu usar os componentes do Material UI. No entanto, você precisa garantir que a navbar seja não apenas funcional, mas também esteticamente agradável e consistente com o tema do "Home Hub". Sua tarefa é estilizar a navbar, adicionar ícones relevantes para cada seção e garantir que ela seja responsiva e acessível.

Código para o Exercício:
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/DevicesOther';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Visão Geral', icon: <HomeIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Dispositivos', icon: <DevicesIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Segurança', icon: <SecurityIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Configurações', icon: <SettingsIcon />, onClick: () => setDrawerOpen(false) },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Home Hub
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;

----
Opinião do instrutor

Solução + Explicação:
Este código cria uma barra de navegação (navbar) para o "Home Hub" usando Material UI. A navbar inclui um botão de menu que, quando clicado, abre um drawer lateral contendo uma lista de seções do aplicativo. Cada item da lista tem um ícone representativo e um texto. Os ícones usados são: HomeIcon para "Visão Geral", DevicesIcon para "Dispositivos", SecurityIcon para "Segurança" e SettingsIcon para "Configurações". O drawer pode ser fechado clicando fora dele ou selecionando um item. Este design melhora a usabilidade e a estética do painel de controle, tornando a navegação intuitiva e acessível.

## aula 6 Para saber mais: avançado com material UI - Temas personalizados, estilização avançada e otimização de desempenho
PRÓXIMA ATIVIDADE

Material UI é uma biblioteca de componentes de interface de usuário para React que permite desenvolver aplicações web de forma rápida e com um design atraente, seguindo os princípios do Material Design da Google. Mas, além de oferecer componentes prontos para uso, o Material UI é extremamente flexível, permitindo personalizações avançadas que podem elevar o nível do seu projeto. Vamos explorar como você pode aproveitar ao máximo essa biblioteca, focando em temas personalizados, estilização avançada e otimização de desempenho.

Temas Personalizados
O que são e por que usar?
Um tema no Material UI é um conjunto de configurações que definem a aparência dos seus componentes. Isso inclui cores, fontes, espaçamentos e outras propriedades visuais. Personalizar o tema permite que você aplique a identidade visual da sua marca ou projeto de forma consistente em todos os componentes.

Como criar e aplicar um tema personalizado?
Para criar um tema personalizado, você utiliza a função createTheme do Material UI e passa um objeto com as suas customizações. Depois, você usa o componente ThemeProvider para aplicar o tema aos seus componentes.

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Meu Botão Personalizado</Button>
    </ThemeProvider>
  );
}
COPIAR CÓDIGO
Estilização Avançada
Por que ir além do básico?
Embora o Material UI ofereça muitas opções de personalização através dos temas, às vezes você precisa de um controle mais fino sobre a estilização dos componentes. Isso pode incluir estilos condicionais, pseudo-classes, ou até estilizações que dependem do estado do componente.

Como fazer estilização avançada?
O Material UI oferece várias abordagens para estilização avançada, mas uma das mais poderosas é o uso do hook makeStyles.

import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function StyledButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Estilizado com makeStyles</Button>;
}
COPIAR CÓDIGO
Otimização de Desempenho
Por que é importante?
A otimização de desempenho é crucial para manter sua aplicação rápida e responsiva. Componentes pesados ou mal otimizados podem levar a atrasos no carregamento ou interações lentas, prejudicando a experiência do usuário.

Como otimizar o desempenho com Material UI?
Use o carregamento sob demanda (lazy loading): Importe componentes do Material UI (e outros recursos) apenas quando forem necessários.
Reutilize estilos: Evite a criação de estilos duplicados. Use o sistema de temas para definir estilos reutilizáveis.
Evite renderizações desnecessárias: Utilize técnicas como React.memo, useMemo e useCallback para evitar renderizações desnecessárias de componentes.
import React, { lazy, Suspense } from 'react';
const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
}
COPIAR CÓDIGO
Ao dominar temas personalizados, estilização avançada e otimização de desempenho no Material UI, você será capaz de criar aplicações React visualmente impressionantes e com alto desempenho. Experimente, explore e não tenha medo de personalizar cada detalhe para atender às necessidades do seu projeto.

## aula 7 
Você está prestes a finalizar seu projeto Home Hub, um dashboard elegante e funcional que integra diversos micro-frontends. Você já adicionou as dependências necessárias e utilizou os componentes do Material UI para dar vida ao seu projeto. Agora, está na fase de criar um componente personalizado dentro do seu micro-frontend que será a peça central da sua navbar, refletindo o tema Home Hub de maneira criativa e funcional.

Considerando o conhecimento adquirido no curso e a necessidade de sintetizar informações para criar um componente que se destaque na navbar do seu projeto Home Hub, qual das seguintes opções melhor representa uma implementação eficaz que combina estilização com funcionalidade, utilizando Material UI?

resposta 
Utilizar <AppBar color="primary" position="static"> para garantir que a barra superior permaneça fixa e adicionar um <Toolbar> com um <IconButton> para o menu e um <Typography> para o título do Home Hub.


Esta opção é eficaz porque combina a estilização fornecida pelo Material UI com a funcionalidade necessária para uma navbar. O uso de <AppBar> com position="static" garante que a barra permaneça visível, enquanto o <Toolbar> organiza os elementos internos, como o menu e o título, de forma intuitiva e acessível.




## Transcrição aula desafio
Nesta aula, foi adicionado um menu de perfil ao aplicativo React Navbar. O menu é acionado ao clicar no ícone de perfil e exibe opções como "Usuário", "Configurações", "Perfil" e "Sair". Além disso, foi adicionado um logo do HomeHub à barra de navegação.

O menu lateral é aberto ao clicar em um ícone e exibe opções como "Visão geral", "Dispositivos", "Segurança", e "Configurações". Além disso, foram adicionados ícones e funcionalidades para "Perfil" e "Sair" no menu de usuário.

Agora implemente dentro do código as instruções acima, conforme estudamos nos videos dessa aula.

## Transcrição aula 8 
É importante testar essa implementação em outros projetos e deixar a estilização personalizada de acordo com o seu gosto.

Para a implementação, conforme feito nos videos, o passo a passo é:

arquivo "react-navbar/src/App.tsx":

Importe os componentes Divider, Menu, MenuItem e useState do pacote @mui/material.
Adicione um estado anchorEl e um método setAnchorEl para controlar a abertura e fechamento do menu.
Crie uma função handleMenuClose para fechar o menu.
Crie uma função handleProfileMenuOpen para abrir o menu ao clicar no ícone de perfil.
Renderize o menu com as opções "Usuário", "Configurações", "Perfil" e "Sair".
Substitua o texto "HomeHub" por um logo chamado HomeHubLogo.
Substitua o IconButton do perfil por um MenuItem que chama a função handleProfileMenuOpen.
Adicione o menu renderizado após a barra de navegação.
Importe os componentes Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, LockIcon, LogoutIcon, PersonIcon, SettingsIcon, SpaceDashboardIcon e WifiIcon do @mui/material.
Crie um estado open e uma função toggleDrawer para controlar a abertura e fechamento do menu lateral.
Defina o conteúdo do menu lateral dentro de um componente DrawerList.
Adicione opções como "Visão geral", "Dispositivos", "Segurança" e "Configurações" no DrawerList.
Atualize a função handleProfileMenuOpen para abrir o menu lateral ao clicar em um ícone.
Substitua a imagem do logo dentro de um MenuItem pelo ícone de abertura do menu lateral.
Adicione o componente Drawer com o DrawerList dentro do retorno da função App.

# 5.

## Transcrição aula 2 
Transcrição
Olá, estudante! Curioso(a) para ver tudo funcionando? Vamos lá, então.

Definindo a porta para o react-dashboard
Vamos executar os dois micro-frontends no nosso projeto. No index.js do nosso orquestrador, precisamos definir a porta para executar o dashboard. Ela deve ser diferente da porta usada pela nav bar ou pelo orquestrador para evitar erros no navegador. Vamos definir a porta 8501 para o react-dashboard na linha 52.

<script type="systemjs-importmap">
{
    "imports": {
        "@home-hub/root-config": "//localhost:9000/home-hub-root-config.js",
        "@home-hub/react-navbar": "//localhost:8500/home-hub-react-navbar.js",
        "@home-hub/react-dashboard": "//localhost:8501/home-hub-react-dashboard.js"
    }
}
</script>
COPIAR CÓDIGO
Após salvar, vamos executar o projeto.

Executando o projeto
Para isso, abrimos mais uma instância do terminal e navegamos até a pasta do micro-frontend do dashboard com o comando cd react-dashboard. Em seguida, executamos npm start, passando a porta como 8501.

npm start -- --port8501
COPIAR CÓDIGO
Ótimo, o webpack foi executado, o arquivo foi gerado, e o typecheck passou sem erros. Vamos verificar o projeto no navegador acessando o localhost na porta 9000.

Ao acessar, veremos a mensagem inicial. Para manter a nossa tradição, dentro do react-dashboard, no arquivo root.component.tsx, vamos incluir um "Hello World!".

export default function Root(props) {
    return <section>Hello World!</section>;
}
COPIAR CÓDIGO
Ao atualizar o projeto no navegador, veremos a mensagem "Hello World!". Agora está tudo pronto para começarmos a estilizar nossos cards.

Design dos cards no Figma
Conferindo no Figma, teremos um card chamado "hero card" que será o card inicial no dashboard, com uma apresentação e uma imagem. Também teremos cards para usuários da família, gasto de água, lâmpadas e consumo de recursos. Por enquanto, não precisamos nos preocupar com outras telas, mas elas terão elementos semelhantes. Vamos criar um componente específico para cada um desses cards no nosso projeto.

Como estamos utilizando Material UI para facilitar a estilização, não precisamos criar um componente de card para servir como contêiner e receber essas informações. Podemos criar um card específico para cada tipo, contendo as informações necessárias, e utilizá-lo conforme a tela. Vamos focar inicialmente na criação desses cards conforme o design do Figma. Vamos voltar ao nosso código e começar.

Criação dos componentes de card
Dentro da pasta src, já criamos a pasta components no nosso microfrontend react-dashboard. Agora, dentro dessa pasta components, vamos criar três novas pastas: HeroCard, UsersCard, e WaterCard. Em cada uma dessas pastas, vamos criar um arquivo index.tsx.

Instalação das dependências do Material UI
Antes de começarmos a desenvolver cada um desses cards, precisamos instalar as dependências do Material UI neste projeto. Lembre-se de que cada microfrontend possui suas próprias dependências, mesmo que estejam se comunicando por meio do orquestrador.

Vamos abrir uma nova instância do terminal e navegar até a pasta do react-dashboard.

cd react-dashboard
COPIAR CÓDIGO
Agora, vamos voltar à documentação do Material UI. Em "Getting started", vamos clicar na seção de "Installation", copiar o comando de instalação padrão do Emotion e executar no terminal:

npm install @mui/material @emotion/react @emotion/styled
COPIAR CÓDIGO
Em seguida, vamos instalar a fonte Roboto, necessária para o Material UI. Para isso, copiamos o comando de instalação da fonte e executamos no terminal:

npm install @fontsource/roboto
COPIAR CÓDIGO
Por último, vamos instalar os ícones do Material UI, que também serão necessários. Para isso, copiamos o comando de instalação dos ícones e executamos no terminal:

npm install @mui/icons-material
COPIAR CÓDIGO
Além dessas dependências, para este projeto específico, vamos utilizar uma biblioteca interessante para gráficos chamada MUI X. Podemos acessá-la na documentação clicando na seção "Components". Depois, basta descer na barra de rolagem até encontrá-la.

Ao encontrar "MUI X", vamos clicar na seção "Charts" e, depois, em "Getting Started". Feito isso, copiamos o comando de instalação e o executamos no terminal:

npm install @mui/x-charts
COPIAR CÓDIGO
Agora, com todas as dependências instaladas, estamos prontos para começar a desenvolver nossos componentes de card.

Criação do HeroCard
Dentro da documentação do Material UI, no menu lateral esquerdo, vamos navegar até a seção "Surfaces", dentro de "Components", e clicar em "Card". Nela, encontraremos a seção "Basics", da qual copiaremos as duas linhas de importação mostradas:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
COPIAR CÓDIGO
Agora, vamos adicionar essas linhas ao index.tsx de cada um dos componentes, começando com o HeroCard, onde também criaremos uma função:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HeroCard = () => {
    return (
        <Card sx={{ background: '#F5F5F5' }}>
            <CardContent>
                <h2>Hero Card</h2>
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
Criação do UsersCard e WaterCard
Agora, faremos o mesmo para os outros dois componentes, UsersCard e WaterCard, lembrando de alterar os nomes conforme necessário:

UsersCard:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const UsersCard = () => {
    return (
        <Card>
            <CardContent>
                <h2>Users Card</h2>
            </CardContent>
        </Card>
    );
};
export default UsersCard;
COPIAR CÓDIGO
WaterCard:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const WaterCard = () => {
    return (
        <Card>
            <CardContent>
                <h2>Water Card</h2>
            </CardContent>
        </Card>
    );
};
export default WaterCard;
COPIAR CÓDIGO
Integração dos componentes de card
Agora que temos o esqueleto básico dos componentes prontos, vamos utilizá-los dentro do nosso root.component. No arquivo root.component.tsx, faremos as seguintes alterações:

Importaremos os componentes HeroCard, UsersCard, e WaterCard manualmente.
Substituiremos a seção atual por uma div que contenha esses componentes.
O código deve ficar assim:

import HeroCard from './components/HeroCard';
import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';

export default function Root() {
    return (
        <div>
            <HeroCard />
            <UsersCard />
            <WaterCard />
        </div>
    );
}
COPIAR CÓDIGO
Com isso, o esqueleto inicial da nossa aplicação está pronto e nossos componentes de card estão sendo exibidos corretamente no navegador.

Próximos passos
Os cards estão sendo exibidos, mas ainda precisam de alguns ajustes. A sombra entre os cards está muito sutil, e precisamos adicionar um fundo de cor, além de aplicar um display flex para seguirem a orientação especificada no Figma.

Nosso plano é que o HeroCard ocupe a parte superior, com um flex 1, enquanto os demais cards serão organizados em um flexbox, alinhados tanto por coluna quanto por fileira.

Na sequência, vamos adicionar os assets necessários ao projeto, incluindo os ícones e o conteúdo de cada card. Além disso, vamos ajustar a aparência dos cards para que fiquem de acordo com o design do dashboard no Figma!

 DISCUTIR NO FÓRUM
PRÓXIMA ATIVIDADE


## Transcrição aula 3
Transcrição
Agora que já temos o esqueleto dos nossos cards basicamente pronto, vamos atualizar você, estudante, sobre o que foi feito.

Organização dos recursos
Criamos uma pasta chamada assets, dentro da qual colocamos os PNGs que vamos utilizar para as lâmpadas, o usuário, a visão geral e o ícone da água. Essa pasta já está incluída no commit da última aula, portanto, ao acessar o código, esses recursos já estarão disponíveis para você.

Para tornar nosso componente de dashboard mais elegante, precisamos fazer alguns ajustes. Atualmente, o conteúdo está todo esticado, sem flexbox ou grid. No Material UI, temos o Box component, que funciona semelhante a uma div do HTML, mas já vem com configurações que facilitam o alinhamento, margens e personalização. Vamos utilizá-lo para envolver toda a nossa dashboard.

Além disso, temos um componente de "Grid" no Material UI, que pode ser acessado pela seção de mesmo nome na documentação. Esse componente permite adaptar cada item, definindo o tamanho do eixo X e do eixo Y, o que facilita bastante o espaçamento e a adição de mais cards ao nosso grid.

Implementação no root.component.tsx
No arquivo root.component.tsx, vamos deletar as linhas 7 a 11 e substituí-las pelo código que inclui a implementação do Box e do Grid:

import HeroCard from './components/HeroCard';
import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';

export default function Root() {
    return (
     <Box
    width={2/3}
    my={4}
    display='flex'
    alignItems='center'
    gap={4}
    p={2}
    sx={{ margin: 'auto' }}
>
    <Grid.container spacing={2}>
        <Grid item xs={12}>
            <HeroCard />
        </Grid>
        <Grid item xs={4}>
            <UsersCard />
        </Grid>
        <Grid item xs={4}>
            <WaterCard />
        </Grid>
    </Grid.container>
</Box>
  ); 
}
COPIAR CÓDIGO
Além disso, vamos incluir as importações do Box e do Grid do Material UI para fazer os ajustes necessários.

import { Box, Grid } from '@mui/material'; 
import HeroCard from './components/HeroCard';
import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';
COPIAR CÓDIGO
Agora, vamos entender o que faz o nosso código!

Análise do código
O Box possui dois terços do tamanho total da tela (width={2/3}), com uma margem no eixo Y de 4 unidades relativas (my={4}). Estamos utilizando display='flex' para centralizar os componentes, juntamente com a propriedade alignItems='center' para centralizar os itens na tela. Além disso, definimos um gap de 4 unidades e um padding de 2 unidades, ambos em tamanho relativo à tela.

Para garantir um alinhamento centralizado, utilizamos a propriedade sx, que permite alterar propriedades CSS sem usar a tag style, já que ela não existe no Material UI. Por fim, passamos a margem automática para centralizar o conteúdo (margin: 'auto').

Em seguida, iniciamos o Grid definindo o container com um espaçamento de 2 unidades relativas. O HeroCard ocupará todas as 12 colunas do Grid, preenchendo toda a primeira fileira. O segundo e o terceiro item ocuparão 4 colunas cada um, pois ainda teremos outro card que ocupará as 4 colunas restantes, conforme planejado no Figma.

Com essas configurações, nosso dashboard ficará mais organizado e visualmente agradável, seguindo a estrutura planejada. Agora, vamos salvar este arquivo. Ao fazer isso, note que ele passou pelo type check sem encontrar erros.

Voltando ao navegador, vemos que o design está mais centralizado e espaçado, começando a tomar forma.

Implementando a cor de fundo
O próximo passo é trocar a cor de fundo dos cards. Para o HeroCard, vamos pegar o código hexadecimal no Figma e aplicá-lo no fundo do card, substituindo o #F5F5F5 pelo código correto, que é #FFF3E0.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <h2>Hero Card</h2>
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
Agora, ao salvar e voltar no navegador, vemos que o HeroCard já está na cor correta, conforme o Figma.

Em seguida, aplicaremos a mesma cor de fundo no UsersCard e WaterCard, garantindo que todos os cards estejam consistentes com o design do Figma.

UsersCard:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const UsersCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <h2>Users Card</h2>
            </CardContent>
        </Card>
    );
};
export default UsersCard;
COPIAR CÓDIGO
WaterCard:

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const WaterCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <h2>Water Card</h2>
            </CardContent>
        </Card>
    );
};
export default WaterCard;
COPIAR CÓDIGO
Com os fundos dos cards ajustados, vamos adicionar conteúdo a eles!

Estilizando o HeroCard
O HeroCard terá duas tipografias e uma imagem alinhada à direita. Vamos criar um componente de tipografia (Typography) e adicionar um texto "Olá, usuário!". Além disso, precisamos importar essa tag no início do código.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Typography>Olá, usuário!</Typography>
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
Salvando essas alterações e verificando no navegador, podemos ver que o HeroCard agora exibe o texto corretamente. Às vezes, ao salvar um arquivo, podemos perceber uma leve instabilidade na apresentação da nossa dashboard. Isso é normal em ambiente de desenvolvimento, especialmente quando fazemos alterações frequentes. Para evitar distrações durante nosso desenvolvimento, vamos parar a execução do projeto da Navbar para nos concentrarmos apenas na dashboard.

Agora, vamos incluir o texto que está logo abaixo: "Confira as informações de sua casa inteligente!". Vamos copiá-lo do Figma e colar na linha seguinte, também em uma tipografia.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Typography>Olá, usuário!</Typography>
                <Typography>Confira as informações de sua casa inteligente!</Typography>
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
A fonte e a cor ainda precisam de ajustes, bem como o espaçamento, mas já estamos começando a ver o formato desejado do card.

Em seguida, vamos importar a imagem que será usada no HeroCard. Nomeamos essa imagem como VisaoGeral, então vamos importá-la da pasta assets. Lembre-se de que a imagem está localizada dentro da pasta components, por isso, é necessário voltar duas pastas.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import VisaoGeral from '../../assets/visao-geral.png';
COPIAR CÓDIGO
Feita a importação, vamos adicionar a tag de imagem, passando VisaoGeral e um texto alternativo para manter a padronização.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Typography>Olá, usuário!</Typography>
                <Typography>Confira as informações de sua casa inteligente!</Typography>
                <img src={VisaoGeral} alt='Visão Geral' />
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
Ao salvar e voltar ao navegador, percebemos que a imagem está muito grande. A imagem tem 468 pixels de largura e 264 pixels de altura. Vamos ajustar apenas a altura para 180 pixels.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Typography>Olá, usuário!</Typography>
                <Typography>Confira as informações de sua casa inteligente!</Typography>
                <img src={VisaoGeral} alt='Visão Geral' height={180}/>
            </CardContent>
        </Card>
    );
};
export default HeroCard;
COPIAR CÓDIGO
Ao salvar e verificar no navegador, vemos que a imagem está com um tamanho adequado.

Para finalizar, vamos adicionar o Box, do Material UI, para organizar melhor os elementos. O Box vai funcionar como uma div, então vamos criar um Box para todo o conteúdo e um Box específico para o conteúdo de texto.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Box>
                    <Box>
                        <Typography>Olá, usuário!</Typography>
                        <Typography>Confira as informações de sua casa inteligente!</Typography>
                    </Box>
                    <img src={VisaoGeral} alt='Visão Geral' height={180} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default HeroCard;
COPIAR CÓDIGO
Para o Box externo, que engloba tudo, definiremos um display={'flex'} e flexDirection={'row'} para alinhar os itens horizontalmente.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box>
                        <Typography>Olá, usuário!</Typography>
                        <Typography>Confira as informações de sua casa inteligente!</Typography>
                    </Box>
                    <img src={VisaoGeral} alt='Visão Geral' height={180} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default HeroCard;
COPIAR CÓDIGO
Agora, precisamos alinhar o texto. Para isso, aplicaremos um alignItems={'center} para centralizar verticalmente e justifyContent={'center'} para centralizar horizontalmente.

const HeroCard = () => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center} justifyContent={'center'}>
                    <Box>
                        <Typography>Olá, usuário!</Typography>
                        <Typography>Confira as informações de sua casa inteligente!</Typography>
                    </Box>
                    <img src={VisaoGeral} alt='Visão Geral' height={180} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default HeroCard;
COPIAR CÓDIGO
Ainda precisamos ajustar a fonte e outros detalhes, mas nossos cards já estão começando a tomar forma.

Próximos passos
No próximo vídeo, vamos finalizar a estilização deste card e deixar um desafio para você: replicar esses ajustes nos cards de Users e Water. Até já!

## Transcrição aula 4
Transcrição
Vamos começar o desenvolvimento dos últimos dois cards para concluirmos e juntarmos os dois micro front-ends novamente.

Dentro da documentação do Material UI, exploramos os componentes de gráficos e instalamos o MUIX para viabilizar o uso de gráficos de barra, pizza, linha, entre outros tipos.

Decidimos empregar o gráfico de pizza para integrá-lo ao nosso card de água, exibindo informações sobre o consumo desse recurso.

Para realizar isso, vamos acessar "Pie Overview" dentro da seção de "Charts" (gráficos) e copiar o código do gráfico de pizza que está listado como Basics.

Trecho de código retirado da documentação:

<PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
COPIAR CÓDIGO
Dentro do nosso Water Card no arquivo index.tsx, colamos esse trecho de código logo abaixo da tipografia.

index.tsx

// código omitido

    <CardContent>
        <Typography>Water Card</Typography>
        <PieChart
    series={[
    {
            data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
            ],
        },
    ]}
    width={400}
    height={200}
    />
        </CardContent>
            
// código omitido
COPIAR CÓDIGO
Faremos a importação do PieChart, que está destacado com um sublinhado vermelho. É importante lembrar de realizar essa importação do "@mui/x-charts", que é a segunda opção disponível. Após importarmos o PieChart, vamos proceder com a troca dos valores. Na primeira posição, atribuímos 'Chuveiros' à linha 15, seguido por 'Piscina' e repetindo 'Lava e Seca'.

index.tsx

// código omitido

<PieChart
    series={[
        {
            data: [
                { id: 0, value: 10, label: 'Chuveiros' },
                { id: 1, value: 15, label: 'Piscina' },
                { id: 2, value: 20, label: 'Lava e seca' },
            ],
        },
    ]}
    width={400}
    height={200}
/>
            
// código omitido
COPIAR CÓDIGO
Ajustando Dimensões e Estilo do Water Card
Ao salvar e retornar à nossa aplicação no endereço localhost:9000, já podemos observar a presença do "WaterCard". No entanto, é necessário ajustar o espaçamento desse card na aplicação. Precisamos corrigir a largura (width) para 300 e a altura (height) para 150, dentro do próprio WaterCard.

// código omitido

<PieChart
    series={[
        {
            data: [
                { id: 0, value: 10, label: 'Chuveiros' },
                { id: 1, value: 15, label: 'Piscina' },
                { id: 2, value: 20, label: 'Lava e seca' },
            ],
        },
    ]}
    width={300}
    height={150}
/>
            
// código omitido
COPIAR CÓDIGO
Devemos verificar se essas dimensões proporcionam uma aparência adequada.

Ao analisar mais detalhadamente no arquivo root.component.tsx, percebemos que o card está ocupando um espaço equivalente a 4, 4, 3 quartos. Talvez um valor de 350 no width seja mais adequado. Vamos experimentar com essa largura para verificar como fica. No entanto, após testar, notamos que 350 é excessivo. Optamos por manter a largura em 300, pois ainda há ajustes a serem feitos em relação à tipografia.

Precisamos importar a imagem que será utilizada dentro desse componente.

Importando a imagem do componente
Faremos o import da seguinte forma: 'WaterIcon from '../../assets/' seguido de '/water.png'.

index.tsx

// código omitido

import WaterIcon from '../../assets/water.png';

// código omitido
COPIAR CÓDIGO
Agora, adicionaremos uma tag de imagem chamada Water Icon após o CardContent e ajustaremos o tamanho para 50 para verificar se fica adequado. Caso contrário, podemos alterá-lo para 60, mas acredito que 50 seja o tamanho ideal.

index.tsx

// código omitido

<img src={WaterIcon} alt='Water Icon' style={{ width: 50, height: 50 }} />

// código omitido
COPIAR CÓDIGO
Em seguida, adicionamos um box para centralizar esse conteúdo na tela. Usamos o box do Material UI e colocamos logo abaixo, antes do nosso CardContent.

index.tsx

// código omitido

<Card sx={{ background: '#F5F5F5' }}>
    <CardContent>
        <Box>
                
// código omitido

        </Box>
    </CardContent>

// código omitido
COPIAR CÓDIGO
Agora, dentro da tag Box, vamos aplicar as propriedades de display={'flex'}, flexDirection={'column'} e alignItems={'center'} para ajustar a disposição dos elementos na tela.

// código omitido

<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>

// código omitido
COPIAR CÓDIGO
Vamos verificar como fica após essas modificações voltando à aplicação.

Vamos ajustar a cor da fonte.

Ajustando a cor da fonte
Primeiro, verificamos o código hexadecimal da cor dentro do nosso HomeHub. No Figma, selecionamos "Gasto de Água", e utilizamos o código hexadecimal para fazer a alteração na tipografia. Assim, basta copiarmos o código da cor e aplicá-la em color dentro da tag typography.

// código omitido

<Typography color={'#E65100'}>Water Card</Typography>

// código omitido
COPIAR CÓDIGO
Parece que o design está melhor, mas o componente ainda está um pouco grande. Vamos tentar reduzir para 250 no width e verificar como fica. Ainda não está ideal, talvez 200 seja melhor. No entanto, ao reduzir, o componente ficou muito centralizado.

Removemos o box do PieChart e verificamos o resultado. Para isso, passamos o fechamento da tag box para a linha acima da abertura de tag do PieChart.

Precisamos encontrar um meio-termo. Vamos comentar a altura (height) para não interferir no componente. Agora, ao verificarmos na aplicação, notamos que o componente sumiu.

Voltamos ao código e inserimos o valor 180 em height.

Encontrar o tamanho ideal para o componente requer experimentação. Vamos aumentar para 300 e verificar. Talvez 280 seja melhor. Estamos nos aproximando do tamanho ideal. Continuemos tentando até acertar. O tamanho atual de 280 é um pouco pequeno. Vamos tentar 400. Parece que 350 pode ser um bom tamanho para o componente aqui.

Estamos chegando perto, vamos tentar 320. Agora, reduzimos o height para 120 e continuamos com o processo de tentativa e erro. Estamos nos aproximando do tamanho ideal. Se aumentarmos para 300, talvez cheguemos ao valor certo.

// código omitido

<PieChart
    series={[
        {
            data: [
                { id: 0, value: 10, label: 'Chuveiros' },
                { id: 1, value: 15, label: 'Piscina' },
                { id: 2, value: 20, label: 'Lava e seca' },
            ],
        },
    ]}
    width={300}
    height={120}
/>
            
// código omitido
COPIAR CÓDIGO
Agora está com um tamanho adequado, podemos até adicionar uma margem. Ante do width, adicionamos um sx={} e passamos uma margem, só para termos um respiro referente ao texto que está em cima. Então, passar uma marginTop de 2.

// código omitido

sx={{ marginTop: 2 }}
width={300}
height={100}
            
// código omitido
COPIAR CÓDIGO
Nosso WaterCard ficou bem interessante, todas as informações estão visíveis e claras. Agora, ele está pronto para uso. Vamos aplicar um código semelhante no index do UsersCard.

Desenvolvimento do UsersCard
Para isso, já temos um código previamente copiado, o que facilitará nosso desenvolvimento deste novo componente. Vamos revisar o que cada parte desse código faz. Colamos o código no arquivo index para analisarmos juntos.

index.tsx

import { Box, Divider, Typography } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UsersIcons from '../../assets/users.png';

const UsersCard = () => {
    return (
        <Card sx={{ background: '#F5F5F5' }}>
            <CardContent>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    <img src={UsersIcons} alt='water icon' width={60} />
                    <Typography color={'#E65100'}>Usuários da família</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 2 }}>
                    <AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
                    <Typography variant='body2'>Usuário 1</Typography>
                </Box>
                <Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
                <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
                    <AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
                    <Typography variant='body2'>Usuário 2</Typography>
                </Box>
                <Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
                <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
                    <AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
                    <Typography variant='body2'>Usuário 3</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
export default UsersCard;
COPIAR CÓDIGO
Basicamente, do código da linha 16 até a linha 29, temos um código duplicado. Criamos um box, definimos seu comportamento como flex e centralizamos o conteúdo. Adicionamos ícones e texto.

A única diferença notável está na linha 13 (<img src={UsersIcons} alt='water icon' width={60}), onde substituímos o ícone do Material UI por uma imagem de usuários da família, conforme indicado no Figma.

Agora, vamos salvar esse componente. Todas as importações necessárias já estão incluídas no código que temos salvo, então não precisamos nos preocupar com isso.

Ao revisarmos nosso projeto, observamos que o card de usuários da família já está pronto, incluindo os usuários 1, 2 e 3. Notamos uma pequena diferença no tamanho e vamos aumentar a altura do index do WaterCard para 131.

Index

// código omitido

sx={{ marginTop: 2 }}
width={300}
height={131}
            
// código omitido
COPIAR CÓDIGO
Agora, sim, o espaçamento dos cards estão alinhados.

No lado esquerdo, encontramos um card denominado "Usuários da família" com uma lista de: Usuário 1, Usuário 2 e Usuário 3. Ao lado direito desse card, está outro chamado "Water Card", exibindo um gráfico de pizza dividido em categorias como Chuveiros, Piscina e Lava e Seca. Na parte superior, há o título "Olá, usuário!" com o texto "Confira as informações da sua casa inteligente!" com um ícone à direita de uma pessoa analisando dados.

Vamos seguir este plano: primeiro, vamos rodar nosso outro micro front-end, que é o NavBar. Para isso, abrimos uma nova instância do terminal e acessamos a página do React NavBar.

cd ..
cd react-navbar/
COPIAR CÓDIGO
Em seguida, executamos o comando npm start com a porta 8500 especificada.

npm start -- --port8500
COPIAR CÓDIGO
O Webpack terminou de rodar e gerou o fallback. Verificamos se tudo estava funcionando corretamente.

Foi concluído sem erros. Atualizamos a página da aplicação e notamos um problema de posicionamento devido ao refresh. No entanto, assim que a página foi atualizada no navegador, conseguimos visualizar o projeto em execução com os dois micro front-ends.

Conclusão e Próximos Passos
Temos o micro front-end individual da nossa NavBar, onde temos esse menu do tipo Drawer do lado esquerdo ao selecionarmos "HomeHub". Temos também esse menu lateral direito para as configurações de usuário. Por enquanto, um ícone de notificações que não fizemos a implementação.

No projeto, temos a dashboard como um micro front-end separado, onde exibimos as informações. Implementamos dois micro front-ends distintos, cada um com suas próprias características e dependências. A harmonia entre eles é mantida pelo orquestrador.

Esses são os aspectos que exploramos neste vídeo. No próximo, vamos concluir nossa jornada de aprendizado sobre micro front-ends neste projeto. Até lá!

## aula 5
Nesta aula, foi feita uma alteração no arquivo "index.ejs" para adicionar um novo endereço de importação para o módulo "@home-hub/react-dashboard".

Foram feitas alterações em vários arquivos para personalizar a aparência de cards em um dashboard React. No arquivo "HeroCard/index.tsx", a cor de fundo do card foi alterada, e foi adicionado um texto de boas-vindas e uma imagem. Já nos arquivos "UsersCard/index.tsx" e "WaterCard/index.tsx", foi adicionado um componente Typography com o título do card. Por fim, no arquivo "root.component.tsx", os cards foram organizados em uma grade com tamanhos diferentes.

E por fim, foram feitas alterações nos arquivos UsersCard e WaterCard de um projeto React. No UsersCard, foi adicionada a importação do ícone AccountCircleIcon, a imagem UsersIcons, e foram feitas modificações no layout para exibir informações de usuários da família. Já no WaterCard, foi importado o ícone WaterIcon e o componente PieChart para exibir um gráfico de pizza com dados relacionados ao consumo de água.

Agora implemente dentro do código as instruções acima, conforme estudamos nos videos dessa aula.

Opinião do instrutor

É importante testar essa implementação em outros projetos e deixar a estilização personalizada de acordo com o seu gosto.

Para a implementação, conforme feito nos videos, o passo a passo é:

arquivo "index.ejs":

Abra o arquivo "index.ejs" no diretório "root/src".
Localize a seção "imports" dentro do objeto JSON.
Adicione uma vírgula após o endereço do módulo "@home-hub/react-navbar".
Insira uma nova linha com o endereço do módulo "@home-hub/react-dashboard" seguido por ": "//localhost:8501/home-hub-react-dashboard.js"".
Salve as alterações feitas no arquivo "index.ejs".
arquivo: "HeroCard/index.tsx"

Importe os componentes Box e Typography do '@mui/material';
Substitua a cor de fundo do Card para '#FFF3E0';
Adicione um Box com propriedades de layout flexível;
Dentro do Box, adicione um Typography com o texto de boas-vindas;
Adicione outro Typography com informações adicionais;
Insira a imagem 'VisaoGeral' com um tamanho específico.
arquivo: "UsersCard/index.tsx"

Importe o componente Typography do '@mui/material';
Adicione um Typography com o título do card.
arquivo: "WaterCard/index.tsx"

Importe o componente Typography do '@mui/material';
Adicione um Typography com o título do card.
arquivo: "root.component.tsx"

Importe os componentes Box e Grid do '@mui/material';
Substitua a estrutura de div por um Box com propriedades de layout;
Defina a largura, margem, alinhamento e espaçamento do Box;
Crie um Grid container com espaçamento entre os itens;
Adicione os componentes HeroCard, UsersCard e WaterCard dentro de Grid items com tamanhos diferentes.
arquivo: UsersCard

Importe os componentes Box, Divider, Typography e o ícone AccountCircleIcon.
Substitua a importação de UsersIcons por import UsersIcons from '../../assets/users.png';.
Dentro do componente UsersCard, adicione um Box com as propriedades display={'flex'}, alignItems={'center'} e flexDirection={'column'}.
Adicione a tag <img> com a imagem UsersIcons, um Typography com a cor #E65100 e o texto "Usuários da família".
Crie três blocos de informações de usuário, cada um contendo um AccountCircleIcon e um Typography com o texto "Usuário X".
Adicione divisores entre os blocos de informações.
arquivo: WaterCard

Importe os componentes Box e Typography, e o componente PieChart do pacote @mui/x-charts.
Substitua a importação de WaterIcon por import WaterIcon from '../../assets/water.png';.
Dentro do componente WaterCard, adicione um Box com as propriedades display={'flex'} e flexDirection={'column'}.
Insira a tag <img> com a imagem WaterIcon, um Typography com a cor #E65100 e o texto "Water Card".
Adicione o componente PieChart com os dados e estilos desejados.


## aula 6
Descrição do Problema:
Na dashboard HomeHub, você está encarregado de adicionar um novo componente que exibe informações sobre o consumo de energia na casa inteligente. Este componente deve mostrar o total de energia consumida no mês atual e compará-lo com o mês anterior, incentivando a economia de energia. O componente deve ser visualmente atraente e fornecer informações claras e concisas para o usuário.

Código para o Novo Componente:
import { Box, Typography, Paper } from '@mui/material';
import EnergyIcon from '@mui/icons-material/FlashOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const EnergyCard = ({ currentMonthUsage, lastMonthUsage }) => {
  const usageDifference = currentMonthUsage - lastMonthUsage;
  const isIncreased = usageDifference > 0;

  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2, backgroundColor: '#E3F2FD' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <EnergyIcon sx={{ color: '#1E88E5', fontSize: 40 }} />
        <Typography variant="h6" color="textSecondary">
          Consumo de Energia
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }}>
        {currentMonthUsage} kWh
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        {isIncreased ? (
          <ArrowUpwardIcon color="error" />
        ) : (
          <ArrowDownwardIcon color="success" />
        )}
        <Typography color={isIncreased ? 'error' : 'success'}>
          {Math.abs(usageDifference)} kWh {isIncreased ? 'mais' : 'menos'} que o mês passado
        </Typography>
      </Box>
    </Paper>
  );
};

export default EnergyCard;



O código acima define um componente EnergyCard que aceita duas props: currentMonthUsage e lastMonthUsage, representando o consumo de energia no mês atual e no mês anterior, respectivamente. O componente utiliza o Material UI para estilização, exibindo o ícone de energia, o consumo atual em kWh e a diferença de consumo em relação ao mês anterior. A diferença é destacada com um ícone de seta para cima ou para baixo, indicando aumento ou diminuição do consumo, e a cor do texto muda de acordo com essa condição (vermelho para aumento, verde para diminuição). Este componente fornece uma maneira visual e intuitiva de apresentar informações sobre o consumo de energia, incentivando a conscientização e a economia de energia.

## Transcrição aula Para saber mais: testando micro-frontends - estratégias e ferramentas
PRÓXIMA ATIVIDADE

Quando você começa a aprender sobre desenvolvimento de aplicações web, logo percebe que a complexidade pode crescer rapidamente. Uma forma de gerenciar essa complexidade é dividir a aplicação em partes menores e mais gerenciáveis, conhecidas como micro-frontends. Mas, como garantir que cada parte funciona bem tanto isoladamente quanto em conjunto? Aqui entra a importância dos testes.

Por que Testar Micro-Frontends?
Testar micro-frontends é crucial por várias razões:

Isolamento: Garante que cada componente funciona corretamente por conta própria.
Integração: Verifica se os componentes interagem bem entre si e com o backend.
Qualidade: Ajuda a manter a qualidade do código e da experiência do usuário.
Estabilidade: Previne bugs e problemas quando novas funcionalidades são adicionadas ou quando existem atualizações.
Estratégias de Teste
Testes Unitários
Os testes unitários focam em verificar a menor parte do código, como funções ou componentes, de forma isolada. Eles são rápidos e ajudam a identificar erros básicos no código.

Exemplo:

Imagine que você tem um componente que mostra uma lista de produtos. Um teste unitário poderia verificar se, ao fornecer uma lista de produtos ao componente, cada produto é mostrado corretamente.

describe('Lista de Produtos', () => {
  it('deve mostrar cada produto fornecido', () => {
    const produtos = [{ id: 1, nome: 'Produto 1' }, { id: 2, nome: 'Produto 2' }];
    const componente = renderizarListaDeProdutos(produtos);
    expect(componente).toContain('Produto 1');
    expect(componente).toContain('Produto 2');
  });
});
COPIAR CÓDIGO
Testes de Integração
Enquanto os testes unitários verificam partes isoladas, os testes de integração garantem que diferentes partes do sistema (como micro-frontends) trabalhem bem juntas.

Exemplo:

Se um micro-frontend é responsável pela autenticação do usuário e outro pela exibição de conteúdo exclusivo, um teste de integração poderia verificar se, após o login bem-sucedido, o conteúdo exclusivo é de fato acessível.

Testes E2E (End-to-End)
Os testes E2E simulam o comportamento do usuário final, percorrendo a aplicação de ponta a ponta. Eles são úteis para garantir que o fluxo geral da aplicação esteja funcionando como esperado.

Exemplo:

Um teste E2E em uma aplicação de compras poderia simular o processo de adicionar um produto ao carrinho, realizar o checkout e verificar se a compra foi concluída com sucesso.

Ferramentas de Teste
Existem várias ferramentas disponíveis para ajudar nos testes de micro-frontends, como:

Jest: Popular para testes unitários e de integração.
Cypress: Excelente para testes E2E.
Storybook: Útil para documentar e testar componentes de UI isoladamente.
Conclusão
Testar micro-frontends é uma parte essencial do desenvolvimento de aplicações web modernas. Ao adotar estratégias de teste como testes unitários, de integração e E2E, e utilizando ferramentas adequadas, você pode garantir que cada componente e a aplicação como um todo funcionem corretamente, proporcionando uma experiência de qualidade para o usuário. Lembre-se, a prática leva à perfeição, então continue testando e aprimorando suas habilidades de teste!
## Transcrição aula























































