$(document).ready(function() {

    $.ajax({
        url: "../cdls.php",

        type: 'POST',

        data: {cdls: true},

        dataType: "html",

        success: function (data) {

            var n = data;

            for (var j = 0; j < n; j++) {

                var id_cdl = $('#Cdl_value' + j).val();

                $.ajax({
                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                    type: 'POST',

                    indexValue: j,

                    data: {
                        cod_cdl: id_cdl
                    },

                    dataType: "json",

                    success: function (response) {

                        if (!response.nomi_materie.error) {

                            var m = response.nomi_materie.contatore;
                            var materie = [];
                            var hook = '#Cdl' + this.indexValue;
                            $(hook).append(' <input id = "start" style="display: none"/>');
                            for (var i = 0; i < m; i++) {

                                var materia = {
                                    nome: response.nomi_materie[i].nome,
                                    id: response.nomi_materie[i].id
                                };

                                materie.push(materia);

                                $(hook).append('  <div id="'+ materie[i].id +'_hook" class="form-group" xmlns="http://www.w3.org/1999/html">' +
                                    '               <input type="checkbox" id="'+ materie[i].id +'"> ' + materie[i].nome + '</input>' +
                                    '             </div>');

                                vecchieMaterie(materie[i].id);

                            }
                            $(hook).append(' <input id = "stop" style="display: none"/>');
                        } else {
                            alert(response.message);
                        }


                    },
                    error: function (err) {

                        alert("NO " + err.responseJSON.toString());

                        console.log(err.responseJSON);


                    }


                });
            }

        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }

    });

});

function vecchieMaterie(id_materia) {

    $.ajax({
        url: "../matricola.php",

        type: 'POST',

        data: '',

        success: function(data) {

            var matricola = data;

            $.ajax({
                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/checkmateriaperiddocente",

                type: 'POST',

                data: {
                    id: id_materia,
                    codice_docente: matricola
                },

                dataType: "json",

                success: function (data) {

                    if(!data.Check.error) {

                        if(data.Check[0].check) {
                            $("#" + id_materia).attr({
                                "checked" : true,
                                "disabled" : true
                            });
                        }
                    }
                    else
                        alert(data.Check.message);

                },
                error: function (err) {

                    alert("NO " + err.responseJSON.toString());

                    console.log(err.responseJSON);


                }

            });

        },
            error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }

    });

}