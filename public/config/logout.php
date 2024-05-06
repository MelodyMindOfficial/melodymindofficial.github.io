<?php
session_start();
unset($_SESSION['user']);
$result = "Вы вышли из аккаунта";
$response[] = array("result" => $result, "login" => false);
echo json_encode($response);
