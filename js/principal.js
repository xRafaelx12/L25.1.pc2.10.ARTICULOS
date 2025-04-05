
import Cl_juguete from "./Cl_juguete.js";

let juguete1 = new Cl_juguete ("carrito", 2, 10, 2)
let juguete2 = new Cl_juguete ("peluche", 3, 20, 1)

let salida = document.getElementById ("salida")
salida.innerHTML = `REPORTE:<br>
<br> Nombre del juguete: ${juguete1.nombre}
<br> Cantidad: ${juguete1.cantidad}
<br> Precio base: $${juguete1.precioBase.toFixed(2)}
<br> Edad recomendada: ${juguete1.edad}
<br> Monto a pagar por el carrito: $${juguete1.aPagar().toFixed(2)}<br>
<br> Nombre del juguete: ${juguete2.nombre}
<br> Cantidad: ${juguete2.cantidad}
<br> Precio base: $${juguete2.precioBase.toFixed(2)}
<br> Edad recomendada: ${juguete2.edad}
<br> Monto a pagar por el peluche: $${juguete2.aPagar().toFixed(2)}`