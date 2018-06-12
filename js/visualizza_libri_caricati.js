$(document).ready(function() {
    $.ajax({
        url: "../../pages/matricola.php",

        type: 'POST',

        dataType: "html",

        success: function (data) {

            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzanomelibropermatricola",

                type: 'POST',

                data: {matricola: data},

                dataType: "json",

                success: function (data) {

                    if (data.libri.error === false) {

                        var n = data.libri.contatore;
                        var libri = [];
                        for (var i = 0; i < n; i++) {

                            var libro = {
                                titolo: data.libri[i].titolo,
                                autore: data.libri[i].autore,
                                casa_editrice: data.libri[i].casa_editrice,
                                edizione: data.libri[i].edizione,
                                link: data.libri[i].link,
                                id: data.libri[i].id
                            };

                            //libro.materia = nome_materie(libro.materia);
                            libri.push(libro);

                            $('#card_libri_caricati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important" >' +
                                '                                    <div class="card-body"  >' +
                                '                                    <form method="POST" style="padding-left: 0.25%" id="'+libri[i].id+'">' +
                                '                                    <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="'+libri[i].id+'_rimuovi" onclick="Rimuovi_libro('+"'"+libri[i].id+"'"+')">' +
                                '                                    <i class="fa fa-fw fa-minus-circle"></i> Rimuovi libro</a>' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titolodocumento">Titolo:' + ' '+ libri[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Autore:' + ' ' + libri[i].autore + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Casa editrice:' + ' ' + libri[i].casa_editrice + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Edizione:' + ' ' + libri[i].edizione + '</label>' +
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

});