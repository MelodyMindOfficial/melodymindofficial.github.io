<?php

require_once('connect.php');

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

$email = $dData['email'];
$newEmail = $dData['newEmail'];
$language = $dData['language'];

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email'");
if (!mysqli_fetch_assoc($sql)) {
    if ($language == 'en') {
        $result = "User doesn't exists!";
    } else {
        $result = "Такой пользователь не существует!";
    }
} else {
    $password = md5($password);
    $sql = "UPDATE `users` SET `email` = '$newEmail' WHERE `users`.`email` = '$email'";

    if ($connect->query($sql)) {
        if ($language == 'en') {
            $result = "You've successfully changed email";
        } else {
            $result = "Вы успешно сменили эл. почту";
        }
    } else {
        if ($language == 'en') {
            $result = "Error";
        } else {
            $result = "Ошибка";
        }
    }
}

$link->close();
$response[] = array("result" => $result);
echo json_encode($response);
