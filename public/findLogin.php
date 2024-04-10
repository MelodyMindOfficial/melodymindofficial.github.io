<?php

require_once('connect.php');

$login = $_POST['login'];

$sql = "SELECT * FROM `users` WHERE email = '$login'";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    header('Location: https://cg30388.tw1.ru/sign-in.php');
} else {
    header('Location: https://cg30388.tw1.ru/sign-up.php');
}
