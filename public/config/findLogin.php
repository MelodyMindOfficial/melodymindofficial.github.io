<?php
header('Access-Control-Allow-Origin: *');

require_once('connect.php');

$login = $_POST['login'];

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$login'");

if (!mysqli_fetch_assoc($sql)) {
    header('Location: https://cg30388.tw1.ru/sign-up');
} else {
    header('Location: https://cg30388.tw1.ru/sign-in');
}
