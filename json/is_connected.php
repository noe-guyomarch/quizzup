<?php
// verifie si l utilisateur est déja connecté

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


session_start();

$obj = new stdClass();


if (isset($_SESSION['username'], $_SESSION['password'])){
    $obj->isConnected = true;
    
    $obj ->sessionUser = $_SESSION['username'];
    $obj ->sessionPassword = $_SESSION['password'];
}else {
    $obj ->isConnected = false;
}

// $obj ->isConnected = isset($_SESSION);

echo json_encode($obj); // renvoie l objet $obj
?>