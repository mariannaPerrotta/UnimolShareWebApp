/*Dato che non posso sapere a priori che id avrà il button (non so quanti ne saranno visualizzati)
invece di cercare l'elemento nel js, attivo una funzione js col click del button stesso*/

function MyClick(materia) {

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzalibropermateria",

        type: 'POST',

        data: {materia: materia},

        dataType: "json",

        success: function (data) {

            if (!data.error) {
                if (!data.libri.error) {

                    var n = data.libri.contatore;


                    if (n === 0)
                        alert("Non ci sono libri per questa materia");

                    var array = [];
                    $("#form_materie").html(" ");
                    for (var i = 0; i < n; i++) {

                        var libro = {
                            titolo: data.libri[i].titolo,
                            autore: data.libri[i].autore,
                            casa_editrice: data.libri[i].casa_editrice,
                            edizione: data.libri[i].edizione,
                            link: data.libri[i].link,
                        }

                        array.push(libro);


                        $('#form_materie').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                            '                                    <div class="card-body">' +
                            '                                    <form method="POST" style="padding-left: 0.25%">' +
                            '                                    <div class="form-group mt-4">' +
                            '                                    <label for="titololibro">Titolo:' + ' ' + array[i].titolo + '</label>\n' + '<br>' +

                            '                                    <label for="titololibro">Autore:' + ' ' + array[i].autore + '</label>' + '<br>' +
                            '                                    <label for="titololibro">Casa Editrice:' + ' ' + array[i].casa_editrice + '</label>' + '<br>' +
                            '                                    <label for="titololibro">Edizione:' + ' ' + array[i].edizione + '</label>' + '<br>' +
                            '                                    <label for="titololibro" >Link:' + ' ' + '<a target="_blank" href="' + array[i].link + '">' + array[i].link + '</a></label>' + '<br>' +

                            '                                </div>' +
                            '                                </div>' +
                            '                                </form>' +
                            '                                </div>' +
                            '                                </div>' +
                            '                            ');


                    }
                }
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