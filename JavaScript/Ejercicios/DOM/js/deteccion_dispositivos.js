const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    /*Vamos a crear tres objetos que recogerán 
    desde dónde nos ven*/
    isMobile = {
      //Cada propiedad recoge un tipo de dispositivo móvil
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      //Cuando esté en cualquier dispositivo móvil
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      //Cada propiedad recoge un tipo de sistema operativo
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      //Cuando esté en cualquier sistema
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      //Cada propiedad recoge un tipo de dispositivo móvil
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      //Cuando esté en cualquier dispositivo móvil
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>    
    `;

  /*Contenido exclusivo por plataforma*/
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo de Chrome</mark></p>`;
  }

  /*Redireccionando */
  if (isMobile.android()) {
    window.location.href = "https://google.es";
  }
}
