<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

require_once('db.php');

$email = $_POST['email'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];
$id = rand(100000, 999999);


if ($email == '' || $pass == '' || $repeatpass == '') {
    echo "ИДИ НАХУЙ ДОЛБОЕБ";
} else {
    if ($pass != $repeatpass) {
        echo "Пароли не совпадают!";
    } else {
        if (strlen($pass) < 10){
            echo "Пароль слишком короткий (Минимум 10 символов)";  
        } else {
            $id_sql = mysqli_query($link, "SELECT * FROM users WHERE id = '$id'");

            while (mysqli_fetch_assoc($id_sql)) {
                $id = rand(100000, 999999);
            }

            $sql = mysqli_query($link, "SELECT * FROM users WHERE email = '$email'");

            if (!mysqli_fetch_assoc($sql)) {
                $pass = md5($pass);

                $sql = "INSERT INTO users (id, email, pass) VALUES ('$id', '$email', '$pass')";

                if ($connect -> query($sql)){
                    echo "Регистрация прошла успешно!!!";

                } else {
                    echo "Ошибка: " . $connect -> error;
                }

                $link->close();
            } else {
                echo "ТАКОЙ ЕСТЬ";
            }
        }
    }
}

?>  

<form action="index.php" method="post">
<button type = "back"> Назад </button>
</form>

</body>
</html>



