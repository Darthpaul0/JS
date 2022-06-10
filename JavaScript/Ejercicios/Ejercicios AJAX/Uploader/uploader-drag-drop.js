const d = document,
  $main = d.querySelector("main"),
  $dropZone = d.querySelector(".drop-zone");

//función para subir los archivos
const uploader = (file) => {
  const xhr = new XMLHttpRequest(),
    formData = new FormData();
  // el objeto FormData recibe un formulario,
  // como no tenemos uno, le pasamos file
  formData.append("file", file);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log(json);
    } else {
      let message = xhr.statusText || "ERROR";
      console.log(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open("POST", "../assets/uploader.php");
  xhr.setRequestHeader("enc-type", "multipart/form-data");
  xhr.send(formData);
};

// función para mostrar la carga de la barra de progreso
const progressUpload = (file) => {
  // creamos una etiqueta progress y un span
  const $progress = d.createElement("progress"),
    $span = d.createElement("span");

  // la barra de progreso debe empezar en 0 y terminar en 100
  $progress.value = 0;
  $progress.max = 100;

  // vamos añadiendo al final del main el progress (pero dentro)
  $main.insertAdjacentElement("beforeend", $progress);
  $main.insertAdjacentElement("beforeend", $span);

  // necesitamos el objeto FileReader para los porcentajes de carga
  const fileReader = new FileReader();

  // tenemos que especificar cómo vamos a leer ese archivo
  fileReader.readAsDataURL(file);

  // asignamos eventos al proceso de carga y al fin de la carga
  fileReader.addEventListener("progress", (e) => {
    /**para simular el progreso, haremos una regla de 3 para calcular
     * qué porcentaje corresponde a cada archivo subido
     */
    let progress = parseInt((e.loaded * 100) / e.total);
    // asignamos ese porcentaje al input progress
    $progress.value = progress;
    // en la etiqueta span ponemos el nombre del archivo y el progreso
    $span.innerHTML = `<b>${file.name} >>> ${progress}%</b>`;
  });
  fileReader.addEventListener("loadend", (e) => {
    // cuando acabamos de cargar el archivo, lo subimos al servidor
    uploader(file);
    // cuando pasen unos segundos, eliminamos la barra de carga y el texto
    setTimeout(() => {
      $main.removeChild($progress);
      $main.removeChild($span);
    }, 5000);
  });
};

// hemos puesto el listener directamente sobre la zona drop,
// puesto que es la única zona que nos interesa que interactúe
$dropZone.addEventListener("dragover", (e) => {
  // al ponernos sobre la zona de drop
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("is-active");
});

$dropZone.addEventListener("dragleave", (e) => {
  // al abandonar la zona de drop
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("is-active");
});

$dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  // recuperamos los archivos del evento
  const files = Array.from(e.dataTransfer.files);
  files.forEach((el) => progressUpload(el));
  e.target.classList.remove("is-active");
});
