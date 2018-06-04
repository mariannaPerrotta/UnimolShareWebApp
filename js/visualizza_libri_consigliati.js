$(document).ready(function() {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/utente.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                // URL DA MODIFICARE
                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzalibriconsigliati",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.consigliati.error == false) {

                        var n = data.consigliati.contatore;
                        var consigliati = [];
                        for (var i = 0; i < n; i++) {

                            var consigliati = {
                                titolo: data.consigliati[i].titolo,
                                autore: data.consigliati[i].autore,
                                casaEditrice: data.consigliati[i].casaEditrice,
                                edizione: data.consigliati[i].edizione,
                            }

                            consigliati.push(consigliato);

                            $('#card_libri_consigliati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titololibro">Titolo libro:' + ' '+ data.consigliati[i].titolo + '</label>' +
                                '                                    <label for="autore">Autore:' + ' '+ data.consigliati[i].autore + '</label>' +
                                '                                    <label for="casaEditrice">Casa editrice:' + ' '+ data.consigliati[i].casaEditrice + '</label>' +
                                '                                    <label for="edizione">Edizione:' + ' '+ data.consigliati[i].edizione + '</label>' +
                                '                                </div>' +
                                '                                </div>' +
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