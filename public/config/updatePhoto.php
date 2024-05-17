<?php
session_start();
require_once('connect.php');

$eData = file_get_contents("php://input");
// $dData = json_decode($eData, true);

$email = json_decode($eData['email'], true);
$imgData = $eData['img'];

$sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email'");

if (!mysqli_fetch_assoc($sql)) {
	if ($language == 'en') {
		$result = "User doesn't exists!";
	} else {
		$result = $email;
	}
} else {
	$img_type = substr($_FILES[$imgData]['type'], 0, 5);
	$img_size = 2 * 1024 * 1024;
	if (!empty($_FILES[$imgData]['tmp_name']) and $img_type === 'image' and $_FILES[$imgData]['size'] <= $img_size) {
		$img = addslashes(file_get_contents($_FILES[$imgData]['tmp_name']));
		$link->query("UPDATE users SET photo = '$img' where id = '$id'");
	} else {
		$result = 'ara';
	}

	if ($connect->query($sql)) {
		$sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");

		unset($_SESSION['user']);
		$user = mysqli_fetch_assoc($sql);
		$_SESSION['user'] = [true, $user['id'], $user['name'], $user['email'], $user['password'], $user['surname'], $user['displayName'], base64_encode($user['photo']), $user['location'], $user['bio'], $user['status'], $user['subscription'], $user['followers'], $user['plays'], $user['tracks'],];

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
