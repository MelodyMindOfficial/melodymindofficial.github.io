<?php

session_start();

if ($_SESSION['user']) {
    $_SESSION['userData'] = [true, $user['id'], $user['name'], $user['email'], $user['password'], $user['surname'], $user['displayName'], $user['photo'], $user['location'], $user['bio'], $user['status'], $user['subscription'], $user['followers'], $user['plays'], $user['tracks'],];
    $response[] = $_SESSION['userData'];
    echo json_encode($response);
}
