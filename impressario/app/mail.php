<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $project_name = trim($_POST["project_name"]);
    $admin_email  = trim($_POST["admin_email"]);
    $form_subject = trim($_POST["form_subject"]);
    $message = '';

    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
            $message .= "
            " . ( (strpos($message, '<tr>') === false) ? '<tr>' : '<tr style="background-color: #f8f8f8;">' ) . "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            </tr>
            ";
        }
    }

    $message = "<table style='width: 100%;'>$message</table>";

    function adopt($text) {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }

    $headers = "MIME-Version: 1.0" . "\r\n" .
                        "Content-Type: text/html; charset=utf-8" . "\r\n" .
                        "From: " . adopt($project_name) . " <" . $admin_email . ">" . "\r\n" .
                        "Reply-To: " . $admin_email . "\r\n";

    if (mail($admin_email, adopt($form_subject), $message, $headers)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send email.';
    }
}
?>
