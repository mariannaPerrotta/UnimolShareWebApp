$(document).ready(function() {

    var matricola = "";

    $.ajax({
        url: "../matricola.php",

        type: 'POST',

        data: '',

        async: false,

        success: function (data) {

            matricola = data;
        }
    });

    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriedisponibili",

        type: 'POST',

        data: {
            matricola: matricola
        },

        dataType: "json",

        success: function (response) {

            if (!response.nomi_materie.error) {

                var m = response.nomi_materie.contatore;
                var materie = [];
                var hook = '#cdls';
                var old_cdl_printed = -1;
                for (var i = 0; i < m; i++) {

                    var materia = {
                        nome: response.nomi_materie[i].nome,
                        id: response.nomi_materie[i].id,
                        cod_docente: response.nomi_materie[i].cod_docente,
                        cod_cdl: response.nomi_materie[i].cod_cdl
                    };

                    materie.push(materia);

                    $.ajax({

                        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperid",

                        indexValue: i,

                        type: 'POST',

                        data: {
                            idcdl: materie[i].cod_cdl
                        },

                        dataType: "json",

                        async: false,

                        success: function (data) {

                            if (!data.CDL.error) {

                                var nome_cdl = data.CDL[0].nome;

                                if((this.indexValue === 0) || (old_cdl_printed !== materie[this.indexValue].cod_cdl)) {

                                    $(hook).append(' <input id = "stop" style="display: none"/>');
                                    $(hook).append(' <input id="' + materie[this.indexValue].cod_cdl + '" style="display: none" />' +
                                        '                   <label style="word-break: break-word; white-space:  normal;" id="Cdl' + this.indexValue + '" for="CdL' + this.indexValue + '">Lista materie - CdL: <font color="blue">' + nome_cdl + '</font></label>'
                                    );
                                    $(hook).append(' <input id = "start" style="display: none"/>');
                                    old_cdl_printed = materie[this.indexValue].cod_cdl;

                                }
                                $(hook).append('  <div id="' + materie[this.indexValue].id + '_hook" class="form-group" xmlns="http://www.w3.org/1999/html">' +
                                    '               <input  style="word-break: break-word; white-space:  normal;"type="checkbox" id="' + materie[this.indexValue].id + '"> ' + materie[this.indexValue].nome + '</input>' +
                                    '             </div>');

                                vecchieMaterie(materie[this.indexValue].id, materie[this.indexValue].cod_docente);

                            }
                        }

                    });
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
});

function vecchieMaterie(id_materia, doc) {

    if(doc !== null) {
        $("#" + id_materia).attr({
            "checked" : true,
            "disabled" : true
        });
    }

}