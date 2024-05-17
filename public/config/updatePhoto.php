<?php
session_start();
require_once('connect.php');

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

$id = (int)$dData['id'];
$imgData = ($dData['img']);

$sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");

if (!mysqli_fetch_assoc($sql)) {
	if ($language == 'en') {
		$result = "User doesn't exists!";
	} else {
		$result = "Такой пользователь не существует";
	}
} else {
	$img = addslashes(file_get_contents($_FILES[$imgData]['tmp_name']));
	$sql = "UPDATE users SET photo = '$imgData' where id = '$id'";
	$link->query($sql);
	if ($link->query($sql)) {
		$sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");

		unset($_SESSION['user']);
		$user = mysqli_fetch_assoc($sql);
		$_SESSION['user'] = [true, $user['id'], $user['name'], $user['email'], $user['password'], $user['surname'], $user['displayName'], ($user['photo']), $user['location'], $user['bio'], $user['status'], $user['subscription'], $user['followers'], $user['plays'], $user['tracks'],];

		if ($language == 'en') {
			$result = "We're updating your data";
		} else {
			$result = "Мы обновляем ваши данные";
		}
	} else {
		if ($language == 'en') {
			$result = "Error";
		} else {
			$result = "Ошибка";
		}
	}
}

$link->close();
$response[] = array("result" => $result, "img" => $show_img);
echo json_encode($response);
