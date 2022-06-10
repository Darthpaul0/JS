const d = document,
  w = window;
export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    // aquí es donde almacenamos la variable que habla
    speechMessage = new SpeechSynthesisUtterance();

  // aquí guardamos las voces disponibles
  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // el método getVoices() debe estar dentro
    // de su propio evento
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = speechSynthesis.getVoices();
      // para cada voz, le creamos un option
      voices.forEach((voice) => {
        // creamos el elemento
        const $option = d.createElement("option");
        // le damos el valor de la voz
        $option.value = voice.name;
        // le damos de contenido el nombre de la voz y el idioma
        $option.textContent = `${voice.name} >>> ${voice.lang}`;
        // agregamos el elemento al select
        $speechSelect.appendChild($option);
      });
    });
  });
  // para cuando seleccionemos otra voz
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      // asignamos la voz a la seleccionada
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  // para cuando hagamos click en leer
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      // tiene que decir lo que venga en el textarea
      speechMessage.text = $speechTextarea.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}
