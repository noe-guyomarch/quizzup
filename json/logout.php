<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

session_unset(); //efface les variable session
session_destroy();//détruit la session
$_SESSION = null;

echo json_encode(true);
?>

