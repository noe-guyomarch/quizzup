<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

$obj = new stdClass;

// $obj ->retour = $_GET["ok"];
$obj ->fonctionne = "c bon";
$obj ->retour =$_GET["ok"];
echo json_encode($obj);

?>