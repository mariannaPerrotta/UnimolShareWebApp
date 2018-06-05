document.getElementById("aggiungi").onclick = function () {

    var titolo = $("#InputTitolo").val();
    var contatto = $("#InputContatto").val();
    var prezzo = $("#InputPrezzo").val();
    var edizione = $("#InputEdizione").val();
    var casaeditrice = $("#InputCasaEditrice").val();
    var autore = $("#InputAutore").val();

    //Carico localmente il file
    $.ajax({

        url: "",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,

        success: function (data) {

            alert(data);

        },
    });
}