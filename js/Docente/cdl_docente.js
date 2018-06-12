$(document).ready(function() {

    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzatutticdl",

        type: 'POST',

        data: '',

        dataType: "json",

        success: function (data) {


            if (!data.CDL.error) {

                var n = data.CDL.contatore;


                if (n === 0)
                    alert("Non ci sono CDL");

                var array = [];


                    for (var i = 0; i < n; i++) {

                        var cdl = {
                            nome: data.CDL[i].nome,
                            id: data.CDL[i].id,
                        }
                        array.push(cdl);



                        $('#corsi_di_laurea').append('<br>' +
                            '<input id="check_'+array[i].nome+'" type="checkbox" name="' + array[i].nome +'" value="' + array[i].id +'"/> '+ array[i].nome+' </input>'


                        );
                    }

                }

                },

        // <option value="' + array[i].nome + '" name="' + array[i].nome + '" id="' + array[i].nome + '"> ' + array[i].nome +</option>


        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


                }

    });

});