<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

session_start();

$obj = new stdClass;

$accountExist = false;

$accountFile = "account.json";

if (file_exists($accountFile)) {

    $contentFileJson = file_get_contents($accountFile);
    $scoreBoard = json_decode($contentFileJson, true);
    unset($contentFileJson); // pas necessaire

    $newUser = new stdClass;
    $newUser ->username = $_POST["username"];
    $newUser ->password = $_POST["password"];
    $newUser ->email = $_POST["email"];
    
    foreach ($scoreBoard['users'] as $value){
        if ($value["username"] == $_POST["username"])
        {
            // revoyer que le username est deja utilisé 
            $accountExist = true;
            break;
        }
    }
    // inscrire les 3 datas de l utilisateur dans le json
    if (!$accountExist) {// a verifier
        array_push($scoreBoard['users'], $newUser);
        file_put_contents($accountFile, json_encode($scoreBoard));
        $obj ->success = true;
    }else{
        $obj ->message = "nom d'utilisateur deja existant";
        $obj ->success = false;
    }
}

echo json_encode($obj);
?>