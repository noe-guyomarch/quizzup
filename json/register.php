<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

session_start();

$obj = new stdClass;
$obj ->mail = "noeguyomarchpro@gmail.com";

$accountExist = false;

$accountFile = "account.json";

if (file_exists($accountFile)) {

    $contentFileJson = file_get_contents($accountFile);
    $scoreBoard = json_decode($contentFileJson, true);
    unset($contentFileJson); // pas necessaire

    $identifierSize = 6;

    $emailExistMsg = "Email deja existant, un email ne peut pas créer plusieurs comptes";
    $usernameExistMsg = "Nom d'utilisateur deja existant";
    $fileNotFindMsg = "Proble lié au fichier de comptes utilisateurs";
    $identifierSizeMsg = "Le Nom d'utilisateur et le mot de passe doitvent avoir une taille minimum de ".$identifierSize." caractère.";


    $newUser = new stdClass;

    $newUser ->email = $_POST["email"];
    $newUser ->username = $_POST["username"];
    $newUser ->password = $_POST["password"];
    
    if (strlen($newUser ->username) < $identifierSize || strlen($newUser ->password) < $identifierSize)
    {
        $obj ->message = $identifierSizeMsg;
        $obj ->success = false;
    }else{
        foreach ($scoreBoard['users'] as $value){
            if ($value["username"] == $_POST["username"])
            {
                // revoyer que le username est deja utilisé 
                $accountExist = true;
                $obj ->message = $usernameExistMsg;
                break;
            }elseif($value["email"] == $_POST["email"])
            {
                // revoyer que le mail est deja utilisé 
                $accountExist = true;
                $obj ->message = $emailExistMsg;
                break;
            }
        }
        // inscrire les 3 datas de l utilisateur dans le json
        if (!$accountExist) {// a verifier
            array_push($scoreBoard['users'], $newUser);
            file_put_contents($accountFile, json_encode($scoreBoard));
            $obj ->success = true;
        }else{
            $obj ->success = false;
        }             
    }

}else{
    $obj ->message = $fileNotFindMsg;
}

echo json_encode($obj);
?>