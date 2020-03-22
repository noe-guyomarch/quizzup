// verifie si l'utilisateur est connecté et agit en conséquence

(function(){
    'use strict';
    $(() =>{
        $.ajax({
            url: 'json/is_connected.php',
            method: 'GET'
        })
        .done(function (data){
            console.log(data);// affiche les donnes de session pour debug

            // stockage du chemin de la page en cours
            var cheminComplet = document.location.href;
            var nomDuFichier     = cheminComplet.substring(cheminComplet.lastIndexOf( "/" )+1 );
            
            // si on est connecte dans l index, redirige vers la page accueil
            if (nomDuFichier == 'index.html' || nomDuFichier == ''){
                if(data.isConnected){
                    window.location.href = 'menu.html';
                }
            // si on est connecté dans le menu, affiche un boutton de deconnexion
            }else if (data.isConnected && nomDuFichier == 'menu.html'){
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
    });
}) ();
