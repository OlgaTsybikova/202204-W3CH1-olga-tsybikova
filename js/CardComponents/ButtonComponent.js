import Component from "./Componente.js";

class ButtonComponent extends Component {
  text;
  action;
  constructor(parentElement, className, text, action) {
    super(parentElement, "button", className);
    this.element.textContent = text;
    this.element.addEventListener;
  }
}
export default ButtonComponent;
