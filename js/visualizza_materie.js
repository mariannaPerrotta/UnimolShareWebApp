$(document).ready(function() {

    $.ajax({
        url: "../../pages/cdl.php",

        type: 'POST',

        data: {cdl: null},

        dataType: "html",

        success: function (data) {
            var cdl = data;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {cod_cdl: cdl},

                dataType: "json",

                success: function (data) {
                    if (data.nomi_materie.error === false) {

                        var n = data.nomi_materie.contatore;
                        var array = [];
                        var hook = '#form_materie';
                        for (var i = 0; i < n; i++) {


                            var materia = {
                                nome: data.nomi_materie[i].nome,
                            }
                            array.push(materia);

                            if(i > 0) {
                                hook = '#' + array[i - 1].nome;
                            }


                            $(hook).append(' <div id ="'+array[i].nome+'" class="form-group mt-4">' +
                                '               <button id="'+array[i].nome+'_button" type="button"  value="'+array[i].nome+'" onclick="MyClick('+"'"+array[i].nome+"'"+')">' + ' '+ array[i].nome + '</button>' +
                                /*AGGIUNGERE CDL - MATERIA - NOME DOCENTE*/
                                '            </div>');

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