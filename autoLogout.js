// verifie si l'utilisateur est connecté et agit en conséquence

(function(){
    'use strict';
    $(() =>{
        function closeSession() {
            $.ajax({
                url: 'json/logout.php',
                method: 'GET' 
            })
            .done(function() {})
            .fail(function() {
                console.log('failed close session');
            })
        }

        // if (Window.closed){
        //     closeSession();
        // } 
        // Window.onExit = closeSession();
        // $(window).onexit(closeSession());
    });
}) ();
