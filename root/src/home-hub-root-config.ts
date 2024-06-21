import { registerApplication, start, LifeCycles } from "single-spa";

//mostra a documentação principal
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });


registerApplication({
  name: "@home-hub/hello-world",
  app: () => System.import<LifeCycles>("@home-hub/hello-world"),
  //Definindo onde estara visivel
  // activeWhen: ["/hello-word", "/docs"]
  //definindo somente uma rota para ver esse servico
  activeWhen: (location) => location.pathname === '/hello-world'
});


start({
  urlRerouteOnly: true,
});
