/*Dato che non posso sapere a priori che id avrà il button (non so quanti ne saranno visualizzati)
invece di cercare l'elemento nel js, attivo una funzione js col click del button stesso*/

function MyClick(materia) {

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzadocumentopermateria",

        type: 'POST',

        data: {materia: materia},

        dataType: "json",

        success: function (data) {

            if (!data.error) {
                if (!data.documenti.error) {

                    var n = data.documenti.contatore;

                    var array = [];
                    $("#form_materie").html("");
                    for (var i = 0; i < n; i++) {

                        var doc = {
                            titolo: data.documenti[i].titolo,
                            id: data.documenti[i].id,
                            link: data.documenti[i].link,
                            materia: materia,
                            cod_docente: data.documenti[i].cod_docente,
                        }

                        array.push(doc);
                        if (array[i].cod_docente != null) {

                            $('#lista_documenti').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                '                <div class="card-body">\n' +
                                '                    <form method="post" style="padding-left: 0.25%"  id="' + array[i].id + '">\n' +
                                '                <div class="form-group mt-4">\n' +
                                '                    <label for="titolodocumento">Titolo documento: ' + ' ' + ' ' + array[i].titolo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="materiadocumento">Materia: ' + ' ' + array[i].materia + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label for="valutazione">Valutazione </label>\n' +
                                '<select id="' + array[i].id + 'id_button">' +
                                '                       <option type="button" value="1" id="' + array[i].id + '_val_1"> ★ </option>' +
                                '                       <option type="button" value="2" id="' + array[i].id + '_val_2" > ★★ </option>' +
                                '                       <option type="button" value="3" id="' + array[i].id + '_val_3" > ★★★ </option>' +
                                '                       <option type="button" value="4" id="' + array[i].id + '_val_4" > ★★★★ </option>' +
                                '                       <option type="button" value="5" id="' + array[i].id + '_val_5" > ★★★★★ </option>' +
                                '        </select>       ' +
                                '                <div class="form-group">\n' +
                                '                        <label for="valutazione" style="padding-left: 50%"  id="val' + array[i].id + '" >Valutazione media </label>\n' +
                                // var val=valutazione_media( array[i].id)
                                (val = valutazione_media(array[i].id) <= 1 ? '<label>★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 1 && valutazione_media(array[i].id) <= 2 ? '<label>★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 2 && valutazione_media(array[i].id) <= 3 ? '<label>★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 3 && valutazione_media(array[i].id) <= 4 ? '<label>★★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 4 && valutazione_media(array[i].id) <= 5 ? '<label>★★★★★</label>' : '') +

                                ' </div>\n' +


                                ' </div>\n' +

                                '                <a class="btn btn-primary btn-block" style="color:white; width: 30%;" id="' + array[i].id + '_valuta" onclick="valuta(' + "'" + array[i].id + "'" + ')">Valuta</a>\n' +
                                '                <a class="btn btn-primary btn-block" style="color:white" id="' + array[i].id + '" onclick="Download(' + "'" + array[i].id + "'" + ')">Download documento</a>\n' +
                                '\n' +
                                '            </form>\n' +
                                '        </div>\n' +
                                '    </div>');
                        }
                        else {
                            $('#lista_documenti').append(
                                '<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                '                <div class="card-body">\n' +

                                ' <div class="card-header" style="text-align: center; background: lightgrey">' + array[i].materia + '</div> ' +
                                '                    <form method="post" style="padding-left: 0.25%"  id="' + array[i].id + '">\n' +
                                '                <div class="form-group mt-4">\n' +
                                '                    <label for="titolodocumento">Titolo documento: ' + ' ' + ' ' + array[i].titolo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="materiadocumento">Materia: ' + ' ' + array[i].materia + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label for="valutazione">Valutazione </label>\n' +
                                '<select id="' + array[i].id + 'id_button">' +
                                '                       <option type="button" value="1" id="' + array[i].id + '_val_1"> ★ </option>' +
                                '                       <option type="button" value="2" id="' + array[i].id + '_val_2" > ★★ </option>' +
                                '                       <option type="button" value="3" id="' + array[i].id + '_val_3" > ★★★ </option>' +
                                '                       <option type="button" value="4" id="' + array[i].id + '_val_4" > ★★★★ </option>' +
                                '                       <option type="button" value="5" id="' + array[i].id + '_val_5" > ★★★★★ </option>' +
                                '        </select>       ' +
                                '                <div class="form-group">\n' +
                                '                        <label for="valutazione" style="padding-left: 50%"  id="val' + array[i].id + '" >Valutazione media </label>\n' +
                                // var val=valutazione_media( array[i].id)
                                (val = valutazione_media(array[i].id) <= 1 ? '<label>★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 1 && valutazione_media(array[i].id) <= 2 ? '<label>★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 2 && valutazione_media(array[i].id) <= 3 ? '<label>★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 3 && valutazione_media(array[i].id) <= 4 ? '<label>★★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 4 && valutazione_media(array[i].id) <= 5 ? '<label>★★★★★</label>' : '') +

                                ' </div>\n' +


                                ' </div>\n' +

                                '                <a class="btn btn-primary btn-block" style="color:white; width: 30%;" id="' + array[i].id + '_valuta" onclick="valuta(' + "'" + array[i].id + "'" + ')">Valuta</a>\n' +
                                '                <a class="btn btn-primary btn-block" style="color:white" id="' + array[i].id + '" onclick="Download(' + "'" + array[i].id + "'" + ')">Download documento</a>\n' +
                                '\n' +
                                '            </form>\n' +
                                '    </div>' +
                                '        </div>\n' +

                                '    </div>'
                            );
                        }


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

    function valutazione_media(id) {
        var int;
        $.ajax({

            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/mediavalutazione",

            type: 'POST',

            data: {cod_documento: id},

            dataType: "json",
            async: false,

            success: function (data) {
                int = JSON.parse(data.contatti[0].media);

            },
            error: function (err) {

                alert("NO " + err.responseJSON.toString());

                console.log(err.responseJSON);


            }


        });
        return int;
    }

}