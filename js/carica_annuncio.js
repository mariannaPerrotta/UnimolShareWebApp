document.getElementById("aggiungi").onclick = function () {

    var titolo = document.getElementById("InputTitolo").value;
    var contatto = document.getElementById("InputContatto").value;
    var prezzo = document.getElementById("InputPrezzo").value;
    var edizione = document.getElementById("InputEdizione").value;
    var casaeditrice = document.getElementById("InputCasaEditrice").value;
    var autore = document.getElementById("InputAutore").value;

    formData.append("titolo", titolo);
    formData.append("contatto", contatto);
    formData.append("prezzo", prezzo);
    formData.append("edizione", edizione);
    formData.append("casaeditrice", casaeditrice);
    formData.append("autore", autore);

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,

        success: function (data) {

            alert(data);

        },
    });
}