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
            //si tu es deja connecté:
            if (data.isConnected === false){
                $('body').append(
                    $('<button />')
                    .html('Déconnexion')
                    .click(function (){
                        $.ajax({
                            url: 'json/logout.php',
                            method: 'GET'
                        })
                        .done(function() {
                            console.log("pb de connexion");
                            window.location.href = 'register.html';
                        })
                        .fail(function() {
                            console.log("pb de connexion");
                        })
                    })
                )
            } 
        }) 
        // quand l utilisateur envoi le formulaire de connexion
        $('#login-form').submit(function() {
            $.ajax({
                url: $(this).attr('action'), // json/login.php
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
            .done(function(data) {
                // si la combi user/password est bonne
                console.log(data);
                if(data.success) {
                    $('body').href('connecté !');
                    // window.location.href = 'index.html';
                } else {
                    $('#message')
                    .html(data.message)
                    .fadeIn();
                }
            })
            .fail(function() {
                $('body').html('Erreur fatale');
            });
            return false;
        });
    });
}) ();
