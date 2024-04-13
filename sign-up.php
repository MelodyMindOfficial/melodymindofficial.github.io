<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "root", "users");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $email = $dData['email'];
    $password = $dData['password'];

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    $res = mysqli_query($conn, $sql);

    $result = "";

    if ($res) {
        $result = "Вы успешно зарегестрировались";
    } else {
        $result = "";
    }
}

$conn->close();
$response[] = array("result" => $result);
echo json_encode($response);
// session_start();
// require_once('connect.php');

// $email = $_POST['email'];
// $password = $_POST['password'];
// $id = rand(100000, 999999);

// $id_sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");
// while (mysqli_fetch_assoc($id_sql)) {
//     $id = rand(100000, 999999);
// }

// $sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email'");
// if (!mysqli_fetch_assoc($sql)) {

//     $password = md5($password);
//     $sql = "INSERT INTO users (id, email, password) VALUES ('$id', '$email', '$password')";

//     if ($connect->query($sql)) {
//         $_SESSION['message'] = "Вы успешно зарегестрировались";
//         header('Location: https://cg30388.tw1.ru/profile');
//     } else {
//         $_SESSION['message'] = "Ошибка регистрации";
//         header('Location: https://cg30388.tw1.ru/');
//     }
//     $link->close();
// } else {
//     $_SESSION['message'] = "Такой пользователь существует";
//     header('Location: https://cg30388.tw1.ru/feed');
// }
