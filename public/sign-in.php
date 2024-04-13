<?php
// session_start();
require_once('connect.php');

$email = $_POST['email'];
$password = md5($_POST['password']);

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email' && password = '$password'");

if (mysqli_num_rows($sql) > 0) {
    // $user = mysqli_fetch_assoc(mysqli_query($link, $sql));
    // $_SESSION['user'] = [$user['id'], $user['name'], $user['surname'], $user['email'], $user['password'], $user['status']];
    // $_SESSION['message'] = "Вы успешно вошли";
    header('Location: https://cg30388.tw1.ru/profile');
} else {
    // $_SESSION['message'] = "Такого пользователя не существует";
    header('Location: https://cg30388.tw1.ru/feed');
}
