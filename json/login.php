<?php
// gere la CONNEXION de l utilisateur et la création de sa session
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

session_start();

$obj = new stdClass;

$obj ->message = 'mauvais nom d\'utilisateur ou mot de passe';
$obj ->success = false;

$contentFileJson = file_get_contents("account.json");

$scoreBoard = json_decode($contentFileJson, true);

// regarde si la combinaison user/pass est la meme que dans le account.json
foreach ($scoreBoard['users'] as $value){
    if ($value["username"] == $_POST["username"] && $value["password"] == $_POST["password"])
    {
        // definit la session
        $_SESSION['username'] = $value["username"];
        $_SESSION['password'] = $value["password"];   

        $obj ->success = true;
        break;
    }    
}
echo json_encode($obj);
?>