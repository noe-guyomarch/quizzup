<?php
// verifie si l utilisateur est déja connecté

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


session_start();

$obj = new stdClass();

$obj ->nbQuestion = 0;

if(isset($_GET["quizName"]) && isset($_GET["numQuestion"])){
    $obj ->success = true;
    $obj ->name = $_GET["quizName"];
    $obj ->numQuestion = $_GET["numQuestion"];

    $accountFile = "quiz.json";
    if(file_exists($accountFile)){

        $contentFileJson = file_get_contents($accountFile);
        $scoreBoard = json_decode($contentFileJson, true);
        unset($contentFileJson);

        foreach ($scoreBoard['quiz'] as $value){
            if($_GET["quizName"] == $value["quizName"]){

                if (isset($value['question'][$_GET["numQuestion"]])){    
                    $obj ->currentQuestion = $value['question'][$_GET["numQuestion"]];   
                    $obj ->end = false;  
                }else{
                    $obj ->end = true;  
                }
                


                foreach($value['question'] as $question){
                    $obj ->nbQuestion += 1; 
                }
            }
        }
    }
}
else{
    $obj ->success = false;
}

echo json_encode($obj); // renvoie l objet $obj
?>

