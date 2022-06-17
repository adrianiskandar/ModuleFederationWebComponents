import ReactDOM from 'react-dom';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      this
    );
  }
}

customElements.define('react-module-root', ReactElement);
