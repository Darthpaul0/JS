import STRIPE_KEYS from "./stripe-keys.js";

//console.log(STRIPE_KEYS);

const d = document,
  $aceites = d.getElementById("aceites"),
  $template = d.getElementById("aceite-template").content,
  $fragment = d.createDocumentFragment(),
  /**Siguiendo la API de Stripe, tenemos que autenticarnos
   * de esta forma. En otras APIs puede ser diferente.
   */
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

// creamos dos variables para almacenar las peticiones fetch
let prices, products;

/** Usando el método all no tenemos que hacer peticiones fetch
 * individuales, sino que una vez realizadas, se ejecutará nuestra
 * programación
 */
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  /** recibimos las respuestas de los fetch
   * para cada respuesta creamos un array
   * pasamos el contenido a formato json
   */
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  // mostramos las solicitudes
  .then((json) => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    //console.log(products, prices);

    /** recorremos cada variable para obtener la información*/
    prices.forEach((el) => {
      /**  para cada producto, comparamos el id que viene
       * en prices con el que viene en products
       */
      let productData = products.filter((product) => product.id === el.product);
      //console.log(productData);
      /**asignamos a cada producto un nuevo data attribute con el id*/
      $template.querySelector(".aceite").setAttribute("data-price", el.id);

      // asignamos la imagen del producto a img
      $template.querySelector("img").src = productData[0].images[0];

      // atributo alt de la imagen
      $template.querySelector("img").alt = productData[0].name;

      //figcaption
      $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${el.unit_amount_decimal / 100} ${el.currency}
      `;

      // hacemos una copia del template
      let $clone = d.importNode($template, true);

      // asignamos nuestra copia al fragment
      $fragment.appendChild($clone);
    });

    $aceites.appendChild($fragment);
  })
  // captura de errores
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ha ocurrido un error con la API.";
    $aceites.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

/** ⬆⬆⬆ OPTIMIZAMOS ESTE CÓDIGO USANDO PROMISE.ALL ⬆⬆⬆ **/
// /**Con esta estructura de Fetch obtenemos los precios */
// fetch("https://api.stripe.com/v1/products", fetchOptions)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });
// /**Con esta estructura de Fetch obtenemos los precios */
// fetch("https://api.stripe.com/v1/prices", fetchOptions)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

/**Ahora programamos el evento click, de manera que al seleccionar
 * un producto, nos redirija al pago
 */
d.addEventListener("click", (e) => {
  // si hacemos click en cualquier cosa que haya dentro de taco
  if (e.target.matches(".aceite *")) {
    let price = e.target.parentElement.getAttribute("data-price");
    console.log(price);
    // este método viene en la librería de Stripe, y necesita
    // una clave pública para funcionar
    // el método redirectToCheckout nos lleva a Stripe, a pagar
    Stripe(STRIPE_KEYS.public)
      // necesita una serie de parámetros
      .redirectToCheckout({
        // precio de lo que compramos y cantidad
        lineItems: [{ price, quantity: 1 }],
        // si es una compra única o una suscripción
        mode: "subscription",
        // la página a la que se redirige si todo va bien
        successUrl: "http://127.0.0.1:5500/Curso%20JavaScript/Ejercicios/Ejercicios%20AJAX/Stripe+Fetch/Stripe-success.html",
        // la página a la que se redirige si sale del proceso
        cancelUrl: "http://127.0.0.1:5500/Curso%20JavaScript/Ejercicios/Ejercicios%20AJAX/Stripe+Fetch/Stripe-cancel.html",
      })
      .then((res) => {
        if (res.error) {
          $aceites.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});
