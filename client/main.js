class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
        <div>name: 진진진</div>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        `
    }
}

customElements.define('user-card',UserCard);