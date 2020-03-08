<?php
session_start();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

$obj = new stdClass;
$obj ->message = 'mauvais nom d\'utilisateur ou mot de passe';
$obj ->success = false;

$contentFileJson = file_get_contents("login.json");

$scoreBoard = json_decode($contentFileJson, true);

//regarde si la combinaison user/pass est la meme que dans le json -> success true
foreach ($scoreBoard['users'] as $key => $value){
    if ($value["username"] == $_POST["username"] && $value["password"] == $_POST["password"])
    {
        $obj -> success = true;
    }
    // echo $value['username']. ' | '.$value['password'].'<br>';
    
}

echo json_encode($obj);
?>