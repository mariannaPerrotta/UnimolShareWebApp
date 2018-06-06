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

                        for (var i = 0; i < n; i++) {

                            var materia = {
                                nome: data.nomi_materie[i].nome,
                            }
                            array.push(materia);

                            if(i > 0) {
                                hook = '#' + array[i - 1].nome;
                            }

                            $('#form_materie').append('  <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '        <div class="card-body">' +
                                '            <form  method="POST" style="padding-left: 0.25%">' +

                                '           <div id ="'+array[i].nome+'" class="form-group mt-4">' +
                                '               <a id="'+array[i].nome+'_button"   value="'+array[i].nome+'" onclick="MyClick('+"'"+array[i].nome+"'"+')">' + ' '+ array[i].nome + '</a>' +
                                '            </div>'+
                                '            </form>' +
                                '        </div>' +
                                '    </div>'
                               );

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

    });

})