<?php

require_once('connect.php');

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);


$id = $dData['id'];
$name = $dData['name'];
$surname = $dData['surname'];
$displayName = $dData['displayName'];
$location = $dData['location'];
$bio = $dData['bio'];

$bio = str_replace('"', '\"', $bio);

$sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");
if (!mysqli_fetch_assoc($sql)) {
    if ($language == 'en') {
        $result = "User doesn't exists!";
    } else {
        $result = "Такой пользователь не существует!";
    }
} else {
    $sql = "UPDATE `users` SET `name` = '$name', `surname` = '$surname', `displayName` = '$displayName', `location` = '$location', `bio` = \"$bio\" WHERE `users`.`email` = '$email'";

    if ($connect->query($sql)) {
        if ($language == 'en') {
            $result = "You've successfully changed password";
        } else {
            $result = "Вы успешно обновили данные";
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
