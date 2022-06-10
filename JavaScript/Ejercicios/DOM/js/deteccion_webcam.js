const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    /**Esta función es una promesa */
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        /**Le pasamos la variable stream,
         * que contiene la información del vídeo
         */
        $video.srcObject = stream;
        /**Para que se vea un vídeo como tal
         * hay que ejecutar el método play
         */
        $video.play();
      })
      .catch((err) => {
        // Mostramos el error al usuario
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
        console.log(err);
      });
  }
}
