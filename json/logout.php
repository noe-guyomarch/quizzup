<?php
// gere la deconnexion de la session en cour et effacement des données de la session
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

session_unset(); //efface les variable session
session_destroy();//détruit la session


echo json_encode(true);
?>

