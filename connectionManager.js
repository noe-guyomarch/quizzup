(function(){
    'use strict';
    $(() =>{

        // quand l utilisateur envoi le formulaire de CONNEXION
        $('#login-form').submit(function() {
            $.ajax({
                url: $(this).attr('action'), // json/login.php
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
            .done(function(data) {
                // si la combi user/password est bonne
                console.log(data.success);
                if(data.success) {
                    window.location.href = 'menu.html';// regiriger ver l'ACCUEIL
                } else {
                    $('#message')
                    .html(data.message)
                    .fadeIn();
                }
            })
            .fail(function(data) {
                console.log(data);
                $('body').html('Erreur fatale');
            });
            return false;
        })

        // quand l utilisateur envoie le formulaire d INSCRIPTION
        $('#register-form').submit(function() {
            $.ajax({
                url: $(this).attr('action'), // json/register.php
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
            .done(function(data) {
                // si l inscription est bonne retour a la CONNEXION
                if(data.success) {
                    window.location.href = 'index.html';
                } else {
                    $('#message')
                    .html(data.message)
                    .fadeIn();
                }
            })
            .fail(function(data) {
                console.log(data);
                $('body').html('Erreur fatale');
            });
            return false;
        })



        // $(document).ready(function(){
        //     let CheminComplet = document.location.href;
        //     let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
        //     let NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
        //     alert ('NomDuFichier : \n'+NomDuFichier+ ' \n\n CheminRepertoire : \n' +CheminRepertoire+ ' \n\n CheminComplet :\n ' +CheminComplet);            
        // })
    });
}) ();
