<?php

session_start();
session_reset();

if ($_SESSION['user']) {
    $response[] = $_SESSION['user'];
    echo json_encode($response);
}
