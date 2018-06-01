document.getElementById("btnlogin").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite username e password

    var email = $("#InputEmail").val();

    var password =$("#InputPassword").val();



// questo serve per mettere insieme i due input

    var data = {

        email: email,

        password: password,
    };


// qui chiamate il servizio

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/login",

        type: 'POST',

        data: data,

        dataType:"json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
        success: function (data) {
//questo serve per vedere quando l'utente è autenticato

            if(data.error==false){



                var utente={
                    matr: data.utente.matricola,
                    nome: data.utente.nome,
                    cognome: data.utente.cognome,
                    email: data.utente.email,
                    tipo: data.utente.tabella,

                }
              //  var tabella= data.utente.tabella;

                alert("yes " + JSON.stringify(utente.tipo));
                $.ajax({
                        url: "http://localhost/UnimolShareWebApp/pages/session.php",

                        type: 'POST',

                        data: utente,

                        dataType: "html",

                        success:function (data) {
                            alert("yes " + JSON.stringify(data));
                            if( data=="studente"){
                                window.location.assign('Studente/index.php');
                            }
                            if( data=="docente"){
                                window.location.assign('Docente/index_doc.php');
                            }


                        }

                    }


                )




                // serve per cambiare pagina

            }


            console.log(data);

        },

        error: function ( err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });

};