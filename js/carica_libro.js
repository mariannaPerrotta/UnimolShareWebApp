document.getElementById("aggiungi").onclick = function () {

    var urlUploder = "../../php/LocalUploader.php";
    var matricola = document.getElementById("InputMatricola").value;
    var titolo = document.getElementById("InputTitolo").value;
    var casaeditrice = document.getElementById("InputCasaEditrice").value;
    var autore = document.getElementById("InputAutore").value;
    var edizione = document.getElementById("InputEdizione").value;

    var cod_doc = "";
    var cod_stud = "";
    var cod_mat = 1; //Da sistemare
    var formData = new FormData($("#form-carica").get(0));

    (tipo === "docente") ? (cod_doc=matricola) : (cod_stud=matricola);

    formData.append("matricola", matricola);
    formData.append("titolo", titolo);
    formData.append("casaeditrice", casaeditrice);
    formData.append("autore", autore);
    formData.append("edizione", edizione);
    formData.append("cod_doc", cod_doc); //Da sistemare
    formData.append("cod_stud", cod_stud);
    formData.append("cod_mat", cod_mat);

    //Carico localmente il file
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