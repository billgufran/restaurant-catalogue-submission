import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/App';

const app = new App({
  button: document.querySelector('#hamburger-buttom'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
