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
                        }

                        array.push(doc);

                        $('#lista_documenti').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                            '                <div class="card-body">\n' +
                            '                    <form method="POST" style="padding-left: 0.25%"  id="'+ array[i].id+'">\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="titolodocumento">Titolo documento: '+' '+' '+array[i].titolo+'</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group">\n' +
                            '                    <label for="materiadocumento">Materia: '+' '+ array[i].materia+ '</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group">\n' +
                        '                        <label for="Valutazione">Valutazione </label>\n' +
                            '                       <button type="button" value="1" id="'+array[i].id+'_val_1" onclick="valuta('+"'"+array[i].id+"_val_1'"+', ' + "'" + array[i].id + "'" + ')"> ★ </button>'+
                            '                       <button type="button" value="2" id="'+array[i].id+'_val_2" onclick="valuta('+"'"+array[i].id+"_val_2'"+', ' + "'" + array[i].id + "'" + ')"> ★★ </button>'+
                            '                       <button type="button" value="3" id="'+array[i].id+'_val_3" onclick="valuta('+"'"+array[i].id+"_val_3'"+', ' + "'" + array[i].id + "'" + ')"> ★★★ </button>'+
                            '                       <button type="button" value="4" id="'+array[i].id+'_val_4" onclick="valuta('+"'"+array[i].id+"_val_4'"+', ' + "'" + array[i].id + "'" + ')"> ★★★★ </button>'+
                            '                       <button type="button" value="5" id="'+array[i].id+'_val_5" onclick="valuta('+"'"+array[i].id+"_val_5'"+', ' + "'" + array[i].id + "'" + ')"> ★★★★★ </button>'+
                            '                </div>\n' +
                            '                <a class="btn btn-primary btn-block" style="color:white" id="'+ array[i].id+'" onclick="Download('+"'"+array[i].id+"'"+')">Download documento</a>\n' +
                            '\n' +
                            '            </form>\n' +
                            '        </div>\n' +
                            '    </div>');
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