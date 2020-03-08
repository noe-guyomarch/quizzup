<?php
session_start();

// $is_connected = isset($_SESSION['user']);

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$obj = new stdClass();

if (isset($_SESSION['username'], $_SESSION['password'])){
    $obj->isConnected = true;
}else {
    $obj->isConnected = false;
}
echo json_encode($obj); // encode en format json pour des données en dur