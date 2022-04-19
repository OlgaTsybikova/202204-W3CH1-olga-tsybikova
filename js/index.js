/* eslint-disable no-unused-vars */
import personajes from "./Modules/personajes.js";
import TargetaComponente from "./CardComponents/TarjetaComponente.js";

for (let i = 0; i < personajes.length; i++) {
  const personaje = new TargetaComponente(personajes[i]);
}
