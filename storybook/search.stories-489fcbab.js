import{c as e,p as t,q as i}from"./lit-element-089a5717.js";import{q as s,k as r,x as a}from"./storybook-preview-9aba481c.js";import{_ as o}from"./tslib.es6-d9c764b6.js";import{i as p}from"./if-defined-f9b5fa5b.js";import"./index-16f3b7d2.js";import"./spectrum-icon-alert-small.css-52aaded2.js";import"./focusable-f84f80fc.js";import"./iconset-svg-7745673b.js";import"./index-71d657ab.js";import"./observe-slot-text-5194cee4.js";import"./spectrum-icon-checkmark-small.css-32c1abfd.js";import{T as c}from"./index-ddc4b59d.js";var n=e`:host{display:inline-block;position:relative}#button{position:absolute;right:0;top:0}#input{display:block;-webkit-appearance:none;outline-offset:-2px;padding-left:var(--spectrum-search-padding-left,36px);text-indent:0;padding-right:var(--spectrum-search-padding-right,28px)}#input::-webkit-search-cancel-button,#input::-webkit-search-decoration{-webkit-appearance:none}:host([quiet]) #input{padding-left:var(--spectrum-search-quiet-padding-left,24px);padding-right:var(--spectrum-search-quiet-padding-right,20px)}:host([quiet]) #input~#icon{left:0}:host([quiet]) #input~#button{right:-8px}:host([quiet]) #input~.spectrum-Search-rightIcon{right:0}#icon{display:block;position:absolute;left:12px;top:calc(var(--spectrum-textfield-height,var(--spectrum-alias-single-line-height))/ 2 - var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200))/ 2);pointer-events:none;color:var(--spectrum-textfield-icon-color,var(--spectrum-alias-icon-color))}#input:disabled~#icon{color:var(--spectrum-textfield-text-color-disabled,var(--spectrum-alias-text-color-disabled))}`,l=e`.magnifier{width:var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-icon-magnifier-height,var(--spectrum-global-dimension-size-200))}`;class d extends c{constructor(){super(...arguments),this.label="Search",this.placeholder="Search"}static get styles(){return[...super.styles,n,l]}handleSubmit(e){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))||e.preventDefault()}reset(){this.form&&(this.value="",this.form.reset())}render(){return s` <sp-icons-medium></sp-icons-medium> <form action="${p(this.action)}" id="form" method="${p(this.method)}" @submit="${this.handleSubmit}"> ${super.render()} <sp-icon id="icon" class="icon magnifier" size="s" name="ui:Magnifier"></sp-icon> ${this.value?s` <sp-clear-button id="button" label="Reset" @click="${this.reset}"></sp-clear-button> `:s``} </form> `}updated(e){super.updated(e),e.has("multiline")&&(this.multiline=!1)}}o([t()],d.prototype,"action",void 0),o([t()],d.prototype,"label",void 0),o([t()],d.prototype,"method",void 0),o([t()],d.prototype,"placeholder",void 0),o([i("#form")],d.prototype,"form",void 0),customElements.get("sp-search")||customElements.define("sp-search",d);var u=()=>r`
    <sp-search
        @submit=${e=>{e.preventDefault();var t=e.target;a(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search disabled></sp-search>
`,m=()=>r`
    <sp-search
        quiet
        @submit=${e=>{e.preventDefault();var t=e.target;a(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search quiet disabled></sp-search>
`,h=["Default","Quiet"];export default{component:"sp-search",title:"Search"};export{u as Default,m as Quiet,h as __namedExportsOrder};
//# sourceMappingURL=search.stories-489fcbab.js.map