import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@home-hub/navbar",
  app: () => System.import<LifeCycles>("@home-hub/navbar"),
  activeWhen: (location) => location.pathname.includes('/')
});

registerApplication({
  name: "@home-hub/dashboard",
  app: () => System.import<LifeCycles>("@home-hub/dashboard"),
  activeWhen: (location) => location.pathname.includes('/')
});

start({
  urlRerouteOnly: true,
});
