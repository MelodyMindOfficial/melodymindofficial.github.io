<?php
session_start();

if ($_SESSION['user']) {
    $response[] = $_SESSION['user'];
    echo json_encode($response);
}
