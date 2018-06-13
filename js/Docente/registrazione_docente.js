//btnlogin è l'id del bottone login
document.getElementById("btnregisterdoc").onclick = function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite i vari campi

    var nome = $("#InputNome").val();

    var cognome = $("#InputCognome").val();

    var email = $("#InputEmail").val();

    var matricola = $("#InputMatricola").val();

    var password =$("#InputPassword").val();

    var Conferma_password =$("#ConfirmPassword").val();



    if(password.length< 8){
        alert("Password non valida. Inserisci password di almeno 8 caratteri");
    }

    else {


        if (nome != '' && cognome != '' && email != '' && matricola != '' && password != '' && Conferma_password != '') {
            if (password !== Conferma_password) {
                alert("Le password non coincidono");
            }
            else {
// questo serve per mettere insieme i due input

                var data = {

                    nome: nome,

                    cognome: cognome,

                    email: email,

                    matricola: matricola,

                    password: password,

                };

// qui chiamate il servizio

                $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/registrazione",

                    type: 'POST',

                    data: data,

                    dataType: "json", //json perchè l'output deve essere un json


                    // funzione che dice che è stato effettuato il servizio
                    success: function (data) {

                        if (JSON.stringify(data.error) === "false") {
                            var myForm = document.getElementById("form");
                            var go = false;
                            for (var i = 1; i < myForm.elements.length; i++) {

                                if (myForm.elements[i - 1].id === "start") {
                                    go = true;
                                }
                                if (myForm.elements[i].id === "stop")
                                    go = false;
                                if (go) {
                                    if ((myForm.elements[i]).checked) {
                                        id = myForm.elements[i].value;
                                        var data = {
                                            id: id,
                                            matricola: matricola
                                        };
                                        //Servizio REST per caricare cdl al Docente
                                        $.ajax({

                                            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricacdldocente",

                                            type: 'POST',

                                            data: data,

                                            dataType: "json", //json perchè l'output deve essere un json

                                            success: function (data) {

                                            },

                                            error: function (err) {

                                                alert("NO " + err.responseJSON.toString());
                                                console.log(err.responseJSON);
                                            }
                                        });
                                    }

                                }
                            }

                            alert("Abbiamo inviato un link di conferma alla tua email");
                            console.log(data);
                            window.location.assign('../../index.php')// serve per cambiare pagina
                        }

                        else {
                            alert(JSON.stringify(data.message))
                        }

                    },

                    error: function (err) {

                        alert("NO " + err.responseJSON.toString());
                        console.log(err.responseJSON);
                    }
                });
            }


        }

        else {
            alert("Campi vuoti");
        }

    }
};