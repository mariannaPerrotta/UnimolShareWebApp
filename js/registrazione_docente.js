//btnlogin è l'id del bottone login
document.getElementById("btnregister-docente").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite i vari campi

    var nome = $("#exampleInputNome1").val();

    var cognome = $("#exampleInputCognome1").val();

    var email = $("#exampleInputEmail1").val();

    var matricola = $("#exampleInputMatricola1").val();

    var password =$("#exampleInputPassword1").val();

    var Conferma_password =$("#exampleConfirmPassword").val();

// questo serve per mettere insieme i due input

    var data = {

        nome: nome,

        cognome : cognome,

        email: email,

        matricola: matricola,

        password: password,

        conferma_pasword : conferma_password,
    };

// qui chiamate il servizio

    $.ajax({

        url: "http://localhost/UnimolShare/public/register-docente",

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