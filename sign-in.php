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

    $login = $_POST['remail'];
    $pass = md5($_POST['password']);

    if (empty($login) || empty($pass)) {
        echo "Заполните все поля";
    } else {
        $sql = "SELECT * FROM `users` WHERE email = '$login' AND pass = '$pass'";
        $resul = $connect->query($sql);


        if ($resul->num_rows > 0) {

            while ($row = $resul->fetch_assoc()) {
                echo "Добро пожаловать", '<br>', "Ваш емаил: ", $login, '<br>', "Ваш пароль: ", $_POST['password'];
            }
        } else {
            echo "Нет такого пользователя";
        }
    }

    ?>

    <form action="index.php" method="post">
        <button type="back"> Назад </button>
    </form>
</body>

</html>