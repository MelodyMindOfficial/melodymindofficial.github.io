<?php

session_start();
require_once('connect.php');

if ($_SESSION['user']) {
    $email = $_SESSION['user'][1];
    $password = $_SESSION['user'][2];
    $sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email && password = '$password'");
    $user = mysqli_fetch_assoc($sql);
    $_SESSION['userData'] = [true, $user['id'], $user['name'], $user['email'], $user['password'], $user['surname'], $user['displayName'], $user['photo'], $user['location'], $user['bio'], $user['status'], $user['subscription'], $user['followers'], $user['plays'], $user['tracks'],];
    $response[] = $_SESSION['userData'];
    echo json_encode($response);
}
