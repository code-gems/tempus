import { html, LitElement, css, customElement, property } from "lit-element";

@customElement("codegems-tempus")
export class CodegemsTempus extends LitElement {
	// styles
	static styles = css`
		:host {
			background: red;
		}
	`;

	@property()
	value: string;

	constructor() {
		super();
	}

	firstUpdated() {
		console.log("%c ⌛FIRST UPDATED", "font-size: 24px; color: green;");
	}

	connectedCallback() {
		super.connectedCallback();
		console.log("%c ⌛CONNECTED", "font-size: 24px; color: green;");
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		console.log("%c ⌛DISCONNECTED", "font-size: 24px; color: red;");
	}

	render() {
		return html`
			${this.tempus(this.value)}
		`;
	}

	tempus(input: string) {
		let now = new Date().getTime();
		let then = new Date(parseInt(input)).getTime();

		if (now - then >= 0) {
		} else {
		}
		return now - then;
	}
}
