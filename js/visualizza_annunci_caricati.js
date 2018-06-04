
$(document).ready(function() {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/utente.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannuncioperid",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.annunci.error == false) {

                        var n = data.annunci.contatore;
                        var annunci = [];
                        for (var i = 0; i < n; i++) {

                            var annuncio = {
                                titolo: data.annunci[i].titolo,
                                autore: data.annunci[i].autore,
                                corsodistudio: data.annunci[i].corsodistudio,
                                materia: data.annunci[i].materia,
                                contattotelefonico: data.annunci[i].contattotelefonico,
                                prezzo: data.annunci[i].prezzo,
                            }

                            annunci.push(annuncio);

                            $('#card_annunci_caricati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuoviannuncio">' +
                                '                                    <i class="fa fa-fw fa-minus-circle"></i>' +
                                '                                    <label for="rimuoviannuncio" style="padding-left: auto">Rimuovi</label>' +
                                '                                    </a>' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titoloannuncio">Titolo annuncio:' + ' '+ annunci[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiaannuncio">Materia:</label>' +
                                '                                </div>' +
                                '                                <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzaannuncio">Download annuncio</a>' +
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