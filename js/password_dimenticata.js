document.getElementById("recupera").onclick = function () {


    var email = $("#InputEmail1").val();


    var data = {

        email: email,

    };


    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/recupero",

        type: 'POST',

        data: data,

        dataType:"json",

        success: function (data) {
            if(data.error==false){
                alert("E' stata inviata una email con la nuova password");


            }


            console.log(data);

        },

        error: function ( err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });



};