//btnlogin è l'id del bottone login
document.getElementById("btnforgot-password").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite username e password

    var email = $("#exampleInputEmail1").val();

// questo serve per mettere insieme i due input

    var data = {

        email: email,
    };

// qui chiamate il servizio

    $.ajax({

        url: "http://localhost/UnimolShare/public/login",

        type: 'POST',

        data: data,

        dataType:"json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
        success: function (data) {
//questo serve per vedere quando l'utente è autenticato
            if(data.error==false){
                window.location.assign('index.php')// serve per cambiare pagina

            }


            console.log(data);

        },

        error: function ( err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });



};