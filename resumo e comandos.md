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


# 3. 