function modifica_click() {

    var email = $('#Email').val();
    var matricola = $('#Matricola').val();
    var nome = $('#InputName').val();
    var cognome = $('#InputSurname').val();
    var vecchia_password = $('#InputOldPassword').val();
    var nuova_password = $('#InputNewPassword').val();
    var tabella = $('#Tabella').val();

    var data = {
        email: email,
        password: vecchia_password
    };

    // qui chiamate il servizio

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/login",

        type: 'POST',

        data: data,

        dataType: "json", //json perchè l'output deve essere un json

        success: function (data) {

            if (data.error === false) {

                //Controllo se i valori non sono cambiati
                if(nome === "")
                    nome = $('#InputName').attr('placeholder');
                if(cognome === "")
                    cognome = $('#InputSurname').attr('placeholder');

                data = {

                    matricola: matricola,
                    nome: nome,
                    cognome: cognome,
                    password: nuova_password,
                    tabella: tabella

                };

                $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/update",

                    type: 'POST',

                    data: data,

                    dataType: "json", //json perchè l'output deve essere un json

                    success: function (data) {

                       aggiungi_materie(matricola);
                       alert(data.message);

                    },

                    error: function (err) {

                        alert("NO " + err.responseJSON.toString());

                        console.log(err.responseJSON);

                    }

                });

            } else {
                alert(data.message);
            }

        },

        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);

        }
    });
}

function aggiungi_materie(matricola) {

    var myForm = document.getElementById("form");
    var go = false;
    var cdl = 0;
    for (var i = 2; i < myForm.elements.length; i++) {
        if (myForm.elements[i - 1].id === "start"){
            go = true;
            cdl = myForm.elements[i - 2].id;
        }
        if (myForm.elements[i].id === "stop")
            go = false;
        if (go) {
            if ((myForm.elements[i]).checked) {
                id = myForm.elements[i].id;
                var data = {
                    cod_docente: matricola,
                    cod_materia: id
                };

                aggiungi_cdl(cdl, matricola);

                $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/assegnadocentemateria",

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

}

function aggiungi_cdl(id, matricola) {

    var data = {
        id: id,
        matricola: matricola
    };
    //Servizio REST per caricare cdl al Docente
    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/checkcdlperiddocente",

        type: 'POST',

        data: data,

        dataType: "json", //json perchè l'output deve essere un json

        success: function (data) {
            if(!data.Check[0].check){

                data = {
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
        },

        error: function (err) {

            alert("NO " + err.responseJSON.toString());
            console.log(err.responseJSON);
        }
    });
}

