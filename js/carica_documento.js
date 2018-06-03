
document.getElementById("aggiungi").onclick = function () {

    var formData = new FormData($("#form-carica").get(0));
    var urlUploder = "../../php/uploader.php";

    $.ajax({

        url: urlUploder,
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,

        success: function (data) {

            alert(data);

        },


    });
}