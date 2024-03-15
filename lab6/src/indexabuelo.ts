
import { workers } from './data/data';
import './components/indexpadre';
import Compo, { Attribute } from './components/mycomponent/mycomponent';


class AppContainer extends HTMLElement {
  Component: Compo[]=[];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		const filterdworkers = workers.filter((item)=> item.id % 2 === 0);
		filterdworkers.forEach((user) => {
			const mycomponentcard = this.ownerDocument.createElement('my-component') as  Compo;	
	  mycomponentcard.setAttribute(Attribute.name, user.name);
	  mycomponentcard.setAttribute(Attribute.uid, String(user.id));
	  mycomponentcard.setAttribute(Attribute. image, user.image);
      mycomponentcard.setAttribute(Attribute. age, String(user.age));
      mycomponentcard.setAttribute(Attribute. gender, user.gender);
      mycomponentcard.setAttribute(Attribute. area, user.jobDetails.area);
      mycomponentcard.setAttribute(Attribute. position, user.jobDetails.position);
      mycomponentcard.setAttribute(Attribute. timeincompany, String(user.jobDetails.timeInCompany));
      mycomponentcard.setAttribute(Attribute. experience, String(user.jobDetails.experience));
			this.Component.push(mycomponentcard);
		});
	}   
  connectedCallback() {
		this.render();
	}
  render() {
		if (this.shadowRoot) {
			this.Component.forEach((Component) => {
				this.shadowRoot?.appendChild(Component);
			});
		}
	}
}   

customElements.define('app-container', AppContainer);