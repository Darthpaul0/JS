const d = document,
  $selectCommunity = d.getElementById("select-primary"),
  $selectProvince = d.getElementById("select-secondary"),
  $selectTown = d.getElementById("select-third");

function loadCommunity() {
  fetch("https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json.data.length);
      let $options = `<option value="">Elige una CCAA</option>`;
      for (let i = 0; i < json.data.length; i++) {
        $options += `<option value="${json.data[i].CCOM}">${json.data[i].COM}</option>`;
      }
      $selectCommunity.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ha ocurrido un error";
      $selectCommunity.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

function loadProvince(community) {
  fetch(
    `https://apiv1.geoapi.es/provincias?CCOM=${community}&type=JSON&key=&sandbox=1`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      let $options = `<option value="">Elige un municipio</option>`;
      for (let i = 0; i < json.data.length; i++) {
        $options += `<option value="${json.data[i].CPRO}">${json.data[i].PRO}</option>`;
      }
      $selectProvince.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ha ocurrido un error";
      $selectProvince.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

function loadTown(province) {
  fetch(
    `https://apiv1.geoapi.es/municipios?CPRO=${province}&type=JSON&key=&sandbox=1`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      let $options = `<option value="">Elige un municipio</option>`;
      for (let i = 0; i < json.data.length; i++) {
        $options += `<option value="${json.data[i].CMUM}">${json.data[i].DMUN50}</option>`;
      }
      $selectTown.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ha ocurrido un error";
      $selectTown.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}
d.addEventListener("DOMContentLoaded", loadCommunity);
$selectCommunity.addEventListener("change", (e) => loadProvince(e.target.value));
$selectProvince.addEventListener("change", (e) => loadTown(e.target.value));
