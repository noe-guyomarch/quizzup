(function(){
    'use strict';
    $(() =>{
        // TODO  gérer les clicks de l'utilisateur sur les quiz avec des appel ajax
        $('.item').click(function() {
            let afficher = $(this).attr('idQuiz');
            // window.location.search = "idQuiz=" + afficher;
            $.ajax({
                url: 'json/quizManager.php',
                method: 'GET'
            })
            .done(function(data) {
                // console.log(typeof(data.retour));
                // console.log(data.fonctionne);
                console.log(data.retour);
            })
            .fail(function(){
                console.log(afficher);
            })
        })
        
        //
        function fillQuizContainer(idQuizContainer, nbItemContainer, imgSources){
            for (let i = 0; i < nbItemContainer; ++i) {
                $('#'+ idQuizContainer).append(
                    $('<div />')
                    .attr('class', 'itemContainer')
                    .append(
                        $('<div />')
                        .attr({
                            class: 'item',
                            idQuiz: i
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

        // remplir le document modulairement
        function fillDocument(numSection, nbSectionContainer, nbItemContainer, imgSources){
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

                fillQuizContainer(idQuizContainer, nbItemContainer, imgSources)
            }
        }

        let sources = ["src\\img\\bigflo_1200x800_v4.jpg", "src\\img\\famousstreet_FR.jpg", "src\\img\\rockstars_1200x800_v1_FR.jpg"]

        fillDocument(1, 1, 3, sources);
        fillDocument(2, 1, 3, sources);


        

        // $(document).ready(function(){
        //     let CheminComplet = document.location.href;
        //     let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
        //     let NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
        //     alert ('NomDuFichier : \n'+NomDuFichier+ ' \n\n CheminRepertoire : \n' +CheminRepertoire+ ' \n\n CheminComplet :\n ' +CheminComplet);            
        // })
    });
}) ();
