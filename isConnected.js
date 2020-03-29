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
            let fullPath = document.location.href;
            let  currentWindow = fullPath.substring(fullPath.lastIndexOf( "/" )+1 );
			
			// si on est pas connecté
            if (!data.isConnected){
				if (currentWindow != 'index.html'){
					window.location.href = 'index.html';
				}
            }   

			// si on est connecte dans l INDEX, redirige vers la page ACCUEIL
            if (data.isConnected){
                if ( currentWindow == 'index.html' ||  currentWindow == ''){
                    window.location.href = 'menu.html';
				}

				// si on est connecté dans le MENU, affiche un boutton de DECONNEXION
                else if (currentWindow == 'menu.html'){
					$('header').append(
						$('<button />')
						.html('Déconnexion')
						.attr('class', 'logoutBtn')
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
			}
        })
    });
}) ();
