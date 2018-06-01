document.getElementById("btnregister-studente").onclick= function () {



    var nome = $("#InputNome1").val();

    var cognome = $("#InputCognome1").val();

    var email = $("#InputEmail1").val();

    var matricola = $("#InputMatricola1").val();

    var password =$("#InputPassword1").val();

    var password =$("#ConfirmPassword").val();


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

        dataType:"json",

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