<?php
if (isset($_POST)) {
    error_reporting(0);

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    $domain = $_SERVER["HTTP_HOST"];
    $to = "pablofr95@gmail.com";
    $subjec_mail = "Contacto desde el formulario del sitio $domain: $subject";
    $message = "
    <p>
     Enviado desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
        <li>Nombre: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Subject: $subject<li>
        <li>Comments: $comments</li>
    </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n"
        . "Content-Type: text/html; charset=utf-8\r\n"
        . "From: Envío automatizado No Responder <no-reply@$domain>";

    $send_mail = mail($to, $subject_mail, $message, $headers);

    if ($send_mail) {
        $res = [
            "err" => false,
            "message" => "Datos enviados correctamente."
        ];
    } else {
        $res = [
            "err" => true,
            "message" => "Error al enviar los datos."
        ];
    }

    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json');
    echo json_encode($res);
    exit;
}
