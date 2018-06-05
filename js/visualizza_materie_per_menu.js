$.ajax({
        url: "../pages/cdl.php",

        type: 'POST',

        data: {cdl: null},

        dataType: "html",

        success: function (data) {

            alert(data);

            var cdl = 1;

            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {cdl: cdl},

                dataType: "json",

                success: function (data) {

                    alert(data);

                    if (data.nomi_materie.error === false) {

                        var n = data.nomi_materie.contatore;
                        var array = [];
                        for (var i = 0; i < n; i++) {

                            var materia = {
                                nome: data.nomi_materie[i].nome,

                            }

                            array.push(materia);

                            $('#lista_materie').append('<option value="'+data.array[i].nome+'"> '+ data.array[i].nome + ' </option>');

                        }
                    }




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