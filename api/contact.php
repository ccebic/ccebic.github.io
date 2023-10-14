<?php
    $name = $_POST['name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $mess = $_POST['mess'];


    $to = 'kecmanstudio@gmail.com';
    $subject = 'Kontakt za Studio Kecman';
    $headers = 'From: webmail@kecmanstudio.com';
    $body = "Ime: " . $name . "\nEmail: " . $email . "\nPoruка: " . $mess;
    $retval = mail ($to, $subject, $body, $headers);

    if($retval == true) {
        echo 'oki';
    } else {
        echo 'Message could not be sent...';
    }
?>