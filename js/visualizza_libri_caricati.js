$(book).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/utente.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzalibripercodicedocente",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.libri.error == false) {

                        var n = data.annunci.lenght;  // n = libri.lenght ???
                        var libri = [];
                        for (var i = 0; i < n; i++) {

                            var libro = {
                                titolo: data.libri[i].titolo,
                                autore: data.libri[i].autore,
                                casa_editrice: data.libri[i].casa_editrice,
                                edizione: data.libri[i].edizione,
                                //link: data.libri[i].link,
                            }

                            libri.push(libro);

                            /*$('#card_documenti_caricati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuovidocumento">' +
                                '                                    <i class="fa fa-fw fa-minus-circle"></i>' +
                                '                                    <label for="rimuovidocumento" style="padding-left: auto">Rimuovi</label>' +
                                '                                    </a>' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titolodocumento">Titolo documento:' + ' '+ documenti[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Materia:</label>' +
                                '                                </div>' +
                                '                                <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzadocumento">Download documento</a>' +
                                '\n' +
                                '                                </form>' +
                                '                                </div>' +
                                '                                </div>' +
                                '                            }');*/
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