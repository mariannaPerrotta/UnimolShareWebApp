document.getElementById("btnmaterie").onclick = function () {

    var matricola = $('#Matricola').val();

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapermatricola",

        type: 'POST',

        data: {matricola: matricola},

        dataType: "json",

        success: function (data) {
            if (data.nomi_materie.error === false) {

                var n = data.nomi_materie.contatore;
                var array = [];

                if (document.getElementById("btnmaterie").options.length == 0) {

                    for (var i = 0; i < n; i++) {

                        var materia = {
                            id: data.nomi_materie[i].id,
                            nome: data.nomi_materie[i].nome
                        };
                        array.push(materia);

                        $('#btnmaterie').append('<option value="' + array[i].id + '" name="' + array[i].nome + '" id="Materia"> ' + array[i].nome + ' </option>'
                        );
                    }

                }

            }

        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
        // '            <div id ="'+array[i].nome+'" class="form-group mt-4">' +
        // '               <a id="'+array[i].nome+'_button"   value="'+array[i].nome+'" onclick="MyClick('+"'"+array[i].nome+"'"+')"+ ' '+ array[i].nome + '</a>' +

    });


}