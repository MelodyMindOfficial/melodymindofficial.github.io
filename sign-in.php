<?php

require_once('connect.php');

$email = $_POST['email'];
$password = $_POST['password'];
$id = rand(100000, 999999);

$id_sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");
while (mysqli_fetch_assoc($id_sql)) {
    $id = rand(100000, 999999);
}

$password = md5($password);
$sql = "INSERT INTO users (id, email, password) VALUES ('$id', '$email', '$password')";

if ($connect->query($sql)) {
    header('Location: https://cg30388.tw1.ru/profile');
} else {
    header('Location: https://cg30388.tw1.ru/');
}
$link->close();
