// verifie si l'utilisateur est connecté et agit en conséquence

(function(){
    'use strict';
    $(() =>{
        
        // $(document).ready(function(){
        //     let CheminComplet = document.location.href;
        //     let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
        //     let NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
        //     let nomVar = CheminComplet.substring(CheminComplet.lastIndexOf( "?" )+1 )
        //     alert ('NomDuFichier : \n'+NomDuFichier+ ' \n\n CheminRepertoire : \n' +CheminRepertoire+ ' \n\n CheminComplet :\n ' +CheminComplet+ ' \n\n nomvar :\n '+ nomVar );            
        // })

        function bonjour(message){
            console.log(message);
        };

        

        let CheminComplet = document.location.href;
        let quizName = CheminComplet.substring(CheminComplet.lastIndexOf( "?" )+1 ); //ça j ai galeré dans la doc pour trouver, je sais qu il y a d autres manieres plus simples mais je prefere faire comme ça.

        $.ajax({
            url: 'json/quizManager.php?' + quizName,
            method: 'GET'
        })	
        .done(function(data){
            if(data.success){
                console.log("quizName : " + data.name);
                
                // console.log(data.currentQuestion);
                // console.log(data.numQuestion);
                // console.log(data.nbQuestion);
                // console.log(data.currentQuestion["answer"]);

                var numQuestion = parseInt(data.numQuestion);

                if(numQuestion < data.nbQuestion){

                    let currentQuestionMessage = data.currentQuestion["questionMessage"];

                    let currentAnswer = data.currentQuestion["answer"];
                    let currentAnswerMessage = data.currentQuestion["answerMessage"];

                    $("#questionMessage").append(currentQuestionMessage);


                    $(".answerButton").click(function(){
                        console.log(numQuestion);

                        let userAnswer = $(this).attr("id");
                        console.log(userAnswer);
            
                        if (userAnswer == currentAnswer){
                            //compter le nombre de points, oui normalement il faut faire la verification cote servezur mais je l ai pas fait
                            $("#question")
                            .html("Bravo! Bonne réponse. La réponse est " + currentAnswer + ".")
                            .css("color", "lightgreen")
                        }
                        else{
                            $("#question")
                            .html("Désolé! Mauvaise réponse. La réponse est " + currentAnswer + ".")
                            .css("color", "red")
                        }
                        
                        $("#questionMessage").html(currentAnswerMessage)

                        $("#answerPosibilitiesContainer").html(
                            $("<div />")
                            .attr("class", "nextButton")
                            .append(
                                $("<p />").html("Suivant ➡")
                            )
                        )   
                        $(".nextButton").click(function (){
                            window.location.href = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf("&")) + "&numQuestion=" + (numQuestion+1);
                        })   
                 });
                }
                else{
                    // $("#questionMessage").html("Votre score est : " + nbPoint + "/" +  nbQuestion)
                    // je n ai pas compté les point parce que je n ai pas eu le temps de le faire, il faudrait les comptabiliser coté serveur
                    $("#questionMessage").html("merci d'avoir participé")
                    $("#answerPosibilitiesContainer").html(
                        $("<div />")
                        .attr("class", "nextButton")
                        .append(
                            $("<p />").html("menu")
                        )
                    )
                    $(".nextButton").click(function(){
                        window.location.href = "menu.html";
                    })  

                }
            }
            else{
                $('body').html('Erreur dans l\'url du site');

            }
        })
        .fail(function() {
            $('body').html('Erreur du coté serveur. <br/> Envoyez un mail au proprietaire du site pour plus plus d\'informations.');
        });

            

        
        
    });
}) ();


