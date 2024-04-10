<?php

$user = 'cg30388';
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
