document.getElementById("btnregister-studente").onclick= function () {



    var nome = $("#exampleInputNome1").val();

    var cognome = $("#exampleInputCognome1").val();

    var email = $("#exampleInputEmail1").val();

    var matricola = $("#exampleInputMatricola1").val();

    var password =$("#exampleInputPassword1").val();

    var password =$("#exampleConfirmPassword").val();


    var data = {

        nome: nome,

        cognome : cognome,

        email: email,

        matricola: matricola,

        password: password,

        conferma_pasword : conferma_password,
    };


    $.ajax({

        url: "http://localhost/UnimolShare/public/register-docente",

        type: 'POST',

        data: data,

        dataType:"json", //json perchè l'output deve essere un json


        success: function (data) {

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