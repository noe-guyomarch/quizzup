<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

session_start();

$obj = new stdClass;

$obj ->message = 'mauvais nom d\'utilisateur ou mot de passe';
$obj ->success = false;

$contentFileJson = file_get_contents("account.json");

$scoreBoard = json_decode($contentFileJson, true);


}
echo json_encode($obj);
?>