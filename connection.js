(function(){
    'use strict';
    $(() =>{
        /* verifie si l'utilisateur est connecté */
        $.ajax({
            url: 'json/is_connected.php',
            method: 'GET'
        })
        .done(function (data){
            console.log(data);
            //TODO si tu es deja connecte, affiche la page d ACCUEIL
            if (data.isConnected){
                $('body').append(
                    $('<button />')
                    .html('Déconnexion')
                    .click(function(){
                        $.ajax({
                            url: 'json/logout.php',
                            method: 'GET'
                        })
                        .done(function() {
                            console.log("logout");
                            window.location.href = 'index.html';
                        })
                        .fail(function() {
                            console.log("pb de connexion");
                        })
                    })
                )
            } 
        })

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
                    $('body').html('connecté !');// regiriger ver l'ACCUEIL
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

        $('#register-btn').click(function(){
            window.location.href = 'register.html';
        })
    });
}) ();
