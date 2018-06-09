document.getElementById("btnlogin").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite username e password

    var email = $("#InputEmail").val();

    var password =$("#InputPassword").val();
    var campi_vuoti= false;

    if(email.toString()==='' || password.toString()==='' ){
        campi_vuoti=true;
        alert("Campi vuoti");
    }

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

        dataType: "json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
        success: function (data) {
//questo serve per vedere quando l'utente è autenticato

            if (data.error === false) {


                var utente = {
                    matr: data.utente.matricola,
                    nome: data.utente.nome,
                    cognome: data.utente.cognome,
                    email: data.utente.email,
                    tipo: data.utente.tabella,
                    cdl:[],
                }

                if(data.utente.tabella==="studente"){
                    $.ajax({

                        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperidstudente",

                        type: 'POST',

                        data: {matricola: utente.matr},

                        dataType: "json",

                        success: function (data) {

                            if (data.CDL.error == false) {


                                utente.cdl = data.CDL[0].id;


                                $.ajax({
                                        url: "../pages/session.php",

                                        type: 'POST',

                                        data: utente,

                                        dataType: "html",

                                        success: function (data) {

                                                window.location.assign('Studente/index.php');



                                        }

                                    }
                                )
                            }



                        }


                    })
                }
                if(data.utente.tabella==="docente"){
                    $.ajax({

                        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperiddocente",

                        type: 'POST',

                        data: {iddoc: data.utente.matricola},

                        dataType: "json",

                        success: function (data) {


                            if (data.CDL.error === false) {

                                var n = data.CDL.contatore;
                                var lista_cdl = [];
                                for (var i = 0; i < n; i++) {

                                    var cdl = {
                                        id_cdl: data.CDL[i].id_cdl,
                                    }


                                    lista_cdl.push(cdl);


                                }
                                utente.cdl= lista_cdl;


                                $.ajax({
                                        url: "../pages/session.php",

                                        type: 'POST',

                                        data: utente,

                                        dataType: "html",

                                        success: function (data) {

                                                window.location.assign('Docente/index_doc.php');


                                        }

                                    }
                                )
                            }



                        }


                    })
                }





            }
            if(data.error===true){
                if(campi_vuoti===false){
                alert("Credenziali errate");
                }
            }

        },

        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
    });

};