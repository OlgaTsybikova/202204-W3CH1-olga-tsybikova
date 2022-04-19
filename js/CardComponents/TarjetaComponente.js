import Componente from "./Componente.js";

class TarjetaComponente extends Componente {
  text;

  constructor() {
    super("li", "card character__card");
    this.element.className = "character col";
    document.querySelector("characters-list").append(this.element);
    this.render();
  }

  render(personaje) {
    this.element.innerHTML = `
   <div class="card character__card">
            <img src="${
              personaje.nombre === "Joffrey" ? "./img/joffrey.jpg" : ""
            }
              ${personaje.nombre === "Jaime" ? "./img/jaime.jpg" : ""}
              ${personaje.nombre === "Daenerys" ? "./img/daenerys.jpg" : ""}
              ${personaje.nombre === "Tyrion" ? "./img/tyrion.jpg" : ""}
              ${personaje.nombre === "Bronn" ? "./img/bronn.jpg" : ""}"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4"></h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
  }
}
export default TarjetaComponente;
