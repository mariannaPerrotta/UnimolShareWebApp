//btnlogin è l'id del bottone login
document.getElementById("btnregisterdoc").onclick= function () {

    alert("almeno entra");

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite i vari campi

    var nome = $("#InputNome").val();

    var cognome = $("#InputCognome").val();

    var email = $("#InputEmail").val();

    var matricola = $("#InputMatricola").val();

    var password =$("#InputPassword").val();

    var Conferma_password =$("#ConfirmPassword").val();

    alert(nome+' '+cognome + ' ' + email + ' ' + matricola + ' ' +password);


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

                alert("tenta di registrare");
                alert(JSON.stringify(data.error));

//questo serve per vedere quando l'utente è autenticato
                if (JSON.stringify(data.error) === "false") {

                    alert("già è qualcosa ha registrato");


                    var checkbox = document.getElementById("checkbox").childNodes;
                    var text = (checkbox[1].textContent);
                    text = text.replace('  ',' ');

                    var array = [];
                    var tmp = "";

                    for(var i = 1; i < text.length; i++) {
                        var current = text[i];
                        tmp = tmp + current;
                        if(current === ' ') {
                            // Check the element has no children && that it is not empty
                            array.push(tmp);
                            tmp = "";
                        }
                    }
                    for (var i = 1; i < array.length; i++) {

                        alert("siamo nel for");

                        var data = {

                            id: array[i],

                            matricola: matricola
                        };

                        $.ajax({

                            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricacdldocente",

                            type: 'POST',

                            data: data,

                            dataType: "json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
                            success: function (data) {

                                alert("Bravoooooo");

                            }
                        });
                    }
                }
                console.log(data);
                window.location.assign('./../index.php')// serve per cambiare pagina

            },

            error: function (err) {

                alert("NO " + err.responseJSON.toString());

                console.log(err.responseJSON);


            }


        });

    }

};