$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/matricola.php",

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

                        var n = data.libri.contatore;  // n = libri.lenght ???
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

                            /*$('#card_libri_consigliati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titololibro">Titolo libro:' + ' ' + data.libri[i].titolo + '</label>' +
                                '                                    <label for="autore">Autore:' + ' ' + data.libri[i].autore + '</label>' +
                                '                                    <label for="casaEditrice">Casa editrice:' + ' ' + data.libri[i].casa_editrice + '</label>' +
                                '                                    <label for="edizione">Edizione:' + ' ' + data.libri[i].edizione + '</label>' +
                                '                                </div>' +
                                '                                </div>' +
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