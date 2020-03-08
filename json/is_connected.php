<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


session_start();

$obj = new stdClass();

if (isset($_SESSION['username'], $_SESSION['password'])){
    $obj->isConnected = true;
}else {
    $obj->isConnected = false;
}
echo json_encode($obj); // renvoie l objet $obj
?>