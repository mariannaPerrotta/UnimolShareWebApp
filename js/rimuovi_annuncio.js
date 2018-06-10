function Rimuovi_Annuncio(id) {

    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/rimuoviannuncio/" + id,

        type: 'DELETE',

        data: '',

        dataType: "json",

        success: function (data) {

            alert(data.message);
            if(!data.error)
                location.reload();

        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
    });
}