<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
$user = 'cg30388_users';
$password = 'AdBSlMoFl<3';
$db = 'cg30388_users';
$host = 'localhost';
$port = 21;

$link = mysqli_init();
$connect = mysqli_connect($host, $user, $password, $db);
$success = mysqli_real_connect(
	$link,
	$host,
	$user,
	$password,
	$db,
	$port
);

if (!$success) {
	die('ERROR TO CONNECT TO DATABASE');
}
