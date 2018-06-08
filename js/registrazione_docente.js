//btnlogin è l'id del bottone login
document.getElementById("btnregisterdoc").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite i vari campi

    var nome = $("#InputNome").val();

    var cognome = $("#InputCognome").val();

    var email = $("#InputEmail").val();

    var matricola = $("#InputMatricola").val();

    var password =$("#InputPassword").val();

    var Conferma_password =$("#ConfirmPassword").val();


    if (password !== Conferma_password){
        alert("Le password non coincidono");
    }

    else {
// questo serve per mettere insieme i due input

        var data = {

            nome: nome,

            cognome: cognome,

            email: email,

            matricola: matricola,

            password: password

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

                    //Serializzo gli elemento successivi a checkbox
                    var checkbox = document.getElementById("checkbox").childNodes;
                    var text = (checkbox[1].textContent);
                    text = text.replace('  ',' '); //Elimino i doppi spazi

                    //Converto il testo serializzato in elementi di un array
                    var array = [];
                    var tmp = "";
                    for(var i = 1; i < text.length; i++) {
                        var current = text[i];
                        tmp = tmp + current;
                        if(current === ' ') {
                            // Check the element has no children && that it is not empty
                            tmp = tmp.replace(' ',''); //Elimino gli spazi nelle stringhe
                            array.push(tmp);
                            tmp = "";
                        }
                    }
                    //Scorro l'array dalla posizione 1 perché nella posizione 0 c'è "cdl"
                    for (var i = 1; i < array.length; i++) {

                        var id = 'check_' + array[i];
                        if (document.getElementById(id).checked) { //Solo se l'elemento è selezionato lo aggiungo al docente

                            id = document.getElementById(id).value;
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

                                    alert("Abbiamo inviato un link di conferma alla tua email");

                                },

                                error: function (err) {

                                    alert("NO " + err.responseJSON.toString());
                                    console.log(err.responseJSON);
                                }
                            });
                        }
                    }
                    console.log(data);
                    window.location.assign('../../index.php')// serve per cambiare pagina
                } else {
                    alert(JSON.stringify(data.message))
                }

            },

            error: function (err) {

                alert("NO " + err.responseJSON.toString());
                console.log(err.responseJSON);
            }
        });
    }
};