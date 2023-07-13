import 'regenerator-runtime'; /* untuk transpile async/await */
import '../styles/main.css';
import '../styles/responsive.css';
import App from '../public/views/app';

const app = new App({
  skip_content: document.querySelector('#content'),
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('#main-content'),
  hero: document.querySelector('#hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
