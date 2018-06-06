$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/matricola.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({
                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannunciopermatricola",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.annnunci.error == false) {

                        var n = data.annunci.contatore;
                        var annunci = [];
                        for (var i = 0; i < n; i++) {

                            var annuncio = {
                                titolo: data.annunci[i].titolo,
                                autore: data.annunci[i].autore,
                                cdl: data.annunci[i].cdl,
                                materia: data.annunci[i].materia,
                                prezzo: data.annunci[i].prezzo,
                            }

                            annunci.push(annuncio);

                            $('#card_lista_annunci').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titolo">Titolo:' + ' ' + annunci[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="autore">Autore:</label>' +
                                '                                </div>' +


                                '\n' +
                                '                                </form>' +
                                '                                </div>' +
                                '                                </div>' +
                                '                            }');


                        }
                    }


                },
                error: function (err) {

                    alert("NO " + err.responseJSON.toString());

                    console.log(err.responseJSON);


                }


            });

        }

    });

})