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
            if (data.isConnected === true){
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
                            window.location.href = '/login.html';
                        })
                    })
                )
            } 
        }) 
        // envoyer les variables issues d'un formulaire HTML à un script PHP en AJAX
        $('#login-form').submit(function() {
            $.ajax({
                url: $(this).attr('action'), 
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
            //si la combi user/pass est ok :
            .done(function(data) {
                console.log(data);
                if(data.success === true) {
                    window.location.href = '/';
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
