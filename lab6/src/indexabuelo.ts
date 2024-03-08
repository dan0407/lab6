// <indexabuelo></indexabuelo>
import { workers } from './data/data';
class Indexabuelo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    ...
  }
  connectedCallback() {
    ...
  }
  disconnectedCallback() {
    ...
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    ...
  }
}

window.customElements.define('indexabuelo', Indexabuelo);