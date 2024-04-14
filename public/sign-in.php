<?php
session_start();
require_once('connect.php');

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

$email = $dData['email'];
$password = md5($dData['password']);
$language = $dData['language'];

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email' && password = '$password'");

if (mysqli_num_rows($sql) > 0) {
    $user = mysqli_fetch_assoc($sql);
    $_SESSION['user'] = [$user['id'], $user['name'], $user['email'], $user['password']];
    if ($language == 'en') {
        $result = "You've successfully login";
    } else {
        $result = "Вы успешно вошли";
    }
} else {
    if ($language == 'en') {
        $result = "Incorrect email or password";
    } else {
        $result = "Неверный адрес эл. почты или пароль";
    }
}

$response[] = array("result" => $result, "login" => $_SESSION['user']);
echo json_encode($response);
