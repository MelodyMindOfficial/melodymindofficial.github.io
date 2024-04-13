<?php
session_start();
require_once('connect.php');

$email = $_POST['email'];
$password = $_POST['password'];
$id = rand(100000, 999999);

$id_sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");
while (mysqli_fetch_assoc($id_sql)) {
    $id = rand(100000, 999999);
}

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email'");
if (!mysqli_fetch_assoc($sql)) {

    $password = md5($password);
    $sql = "INSERT INTO users (id, email, password) VALUES ('$id', '$email', '$password')";

    if ($connect->query($sql)) {
        $user = mysqli_fetch_assoc(mysqli_query($link, $sql));
        $_SESSION['user'] = [$user['id'], $user['name'], $user['surname'], $user['email'], $user['password'], $user['status']];
        $_SESSION['message'] = "Вы успешно зарегестрировались";
        header('Location: https://cg30388.tw1.ru/profile');
    } else {
        $_SESSION['message'] = "Ошибка регистрации";
        header('Location: https://cg30388.tw1.ru/');
    }
    $link->close();
} else {
    $_SESSION['message'] = "Такой пользователь существует";
    header('Location: https://cg30388.tw1.ru/');
}
