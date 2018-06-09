document.getElementById("btnforgot-password").onclick = function () {


    var email = $("#InputEmail1").val();


    var data = {

        email: email,

    };


    $.ajax({

        url: "http://localhost/UnimolShare/public/forgot-password",

        type: 'POST',

        data: data,

        dataType:"json",

        success: function (data) {
            if(data.error==false){
                window.location.assign('index.php')

            }


            console.log(data);

        },

        error: function ( err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });



};