function modifica_click() {

    var email = $('#Email').val();
    var matricola = $('#Matricola').val();
    var nome = $('#InputName').val();
    var cognome = $('#InputSurname').val();
    var vecchia_password = $('#InputOldPassword').val();
    var nuova_password = $('#InputNewPassword').val();
    var tabella = $('#Tabella').val();



        if (nuova_password.length < 8) {
            alert("Password non valida. Inserisci password di almeno 8 caratteri");
        }
        else {

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
                        if (nome === "")
                            nome = $('#InputName').attr('placeholder');
                        if (cognome === "")
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

                                alert(data.message);
                                location.reload();

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


}