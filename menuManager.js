(function(){
    'use strict';
    $(() =>{
        // TODO  gérer les clicks de l'utilisateur sur les quiz avec des appel ajax
        
        //
        function fillQuizContainer(idQuizContainer, nbItemContainer, imgSources, quizName){
            for (let i = 0; i < nbItemContainer; ++i) {
                $('#'+ idQuizContainer).append(
                    $('<div />')
                    .attr('class', 'itemContainer')
                    .append(
                        $('<div />')
                        .attr({
                            class: 'item',
                            'quizName': quizName[i]
                        })
                        .append(
                            $('<img />')
                            .attr({
                                class: 'quizThumbnail',
                                src: imgSources[i]
                            })
                        )
                    )
                )
            }
        }

        // remplir le document modulairement avec les QuizContainer
        function fillDocument(numSection, nbSectionContainer, nbItemContainer, imgSources, quizName){
            for (let i = 0; i < nbSectionContainer; ++i) {
                
                let idQuizContainer = 'quizContainer' + numSection;
                $('#mainContent').append(
                    $('<div />')
                    .attr('class', 'sectionContainer')
                    .append(
                        $('<div />')
                        .attr('class', 'titleContainer')
                        .append(
                            $('<h2 />')
                            .html('Tous les quizs')
                            .attr('class', 'sectionTitle'),
                        )
                    )
                    .append(
                        $('<div />')
                        .attr({
                            'id': idQuizContainer,
                            'class': 'quizContainer'
                        })
                    )
                )

                fillQuizContainer(idQuizContainer, nbItemContainer, imgSources, quizName)
            }
        }

        let quizName = ["bigflo", "famoustreet", "rockstar"]
        let sources = ["src\\img\\bigflo_1200x800_v4.jpg", "src\\img\\famousstreet_FR.jpg", "src\\img\\rockstars_1200x800_v1_FR.jpg"]

        fillDocument(1, 1, 3, sources, quizName);


        $('.item').click(function() {
            let name = $(this).attr('quizName');
            window.location.href = 'quizPage.html?quizName='+ name + "&numQuestion=0";
        })


        

        // $(document).ready(function(){
        //     let CheminComplet = document.location.href;
        //     let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
        //     let NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
        //     alert ('NomDuFichier : \n'+NomDuFichier+ ' \n\n CheminRepertoire : \n' +CheminRepertoire+ ' \n\n CheminComplet :\n ' +CheminComplet);            
        // })
    });
}) ();
