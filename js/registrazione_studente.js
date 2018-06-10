document.getElementById("btnregister-studente").onclick = function () {



    var nome = $("#InputNome1").val();

    var cognome = $("#InputCognome1").val();

    var email = $("#InputEmail1").val();

    var matricola = $("#InputMatricola1").val();


    var password =$("#InputPassword1").val();

    var cdl = document.getElementById("seleziona_cdl").value;


    var conferma_password =$("#ConfirmPassword").val();

    if(password.length< 12){
        alert("Password non valida. Inserisci password di almeno 12 caratteri")
    }



    else {



        if(password===conferma_password){
            var data = {
                matricola: matricola,
                nome: nome,
                cognome: cognome,
                email: email,
                password: password,
                cds:cdl,
            };

                $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/registrazione",

                    type: 'POST',

                    data: data,

                    dataType: "json",

                    success: function (data) {

                        if (data.error === false) {
                            alert("Registrazione effettuata");
                            window.location.assign('index.php')// serve per cambiare pagina

                        }
                        else{
                            alert(data.message);
                        }

                        console.log(data);

                    },

                    error: function (err) {

                        alert("NO " + err.responseJSON.toString());

                        console.log(err.responseJSON);


                    }


                });
            }




        else{
            alert("Le password non coincidono");
        }

    }

};