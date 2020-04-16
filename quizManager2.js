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

        $("#answerPosibilitiesContainer").html(
            $("<div />")
            .attr("class", "nextButton")
            .append(
                $("<p />").html("Commencer")
            )
        )

        $(".nextButton").click(function(){

            $("#answerPosibilitiesContainer").html(
                $("<div />")
                .attr({
                    "class": "answerButton",
                    "id": "vrai"
                })
                .append(
                    $("<p />").html("VRAI")
                )
            )
            $("#answerPosibilitiesContainer").append(
                $("<div />")
                .attr({
                    "class": "answerButton",
                    "id": "faux"
                })
                .append(
                    $("<p />").html("FAUX")
                )
            )

            let CheminComplet = document.location.href;
            let quizName = CheminComplet.substring(CheminComplet.lastIndexOf( "?" )+1 ); //ça j ai galeré dans la doc pour trouver, je sais qu il y a d autres manieres plus simples mais je prefere faire comme ça.

            $.ajax({
                url: 'json/quizManager.php?' + quizName,
                method: 'GET'
            })	
            .done(function(data){

                console.log("quizName : " + data.name);
                console.log(data.allTable);
                console.log(data.nbQuestion);
                console.log(data.allTable[0]["answer"]);

                    
                let answer = data.allTable[idQuestion]["answer"];
                let answerMessage = data.allTable[idQuestion]["answerMessage"];

                $("#questionMessage").append(data.questionMessage);


                $(".answerButton").click(function(){

                    let userAnswer = $(this).attr("id");
                    console.log(userAnswer);
        
                    if (userAnswer == answer){
                        //compter le nombre de points, oui normalement il faut faire la verification cote servezur mais je l ai pas fait
                        $("#question")
                        .html("Bravo! Bonne réponse. La réponse est " + answer + ".")
                        .css("color", "lightgreen")
                    }
                    else{
                        $("#question")
                        .html("Désolé! Mauvaise réponse. La réponse est " + answer + ".")
                        .css("color", "red")
                    }
                    
                    $("#questionMessage").html(answerMessage)

                    $("#answerPosibilitiesContainer").html(
                        $("<div />")
                        .attr("class", "nextButton")
                        .append(
                            $("<p />").html("Suivant ➡")
                        )
                    )   
                    $(".nextButton").click(function (){
                        window.location.href = 'quizPage.html?quizName='+name;

                    })   
                });
            })
            .fail(function() {
                $('body').html('Erreur du coté serveur. <br/> Envoyez un mail au proprietaire du site pour plus plus d\'informations.');
            });

            

        })
        
        
    });
}) ();


