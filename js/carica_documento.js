document.getElementById("aggiungi").onclick = function () {

    var urlUploder = "../../php/LocalUploader.php";
    var titolo = document.getElementById("InputTitolo").value;
    var tipo = document.getElementById("InputTipo").value;
    var matricola = document.getElementById("InputMatricola").value;
    var cod_doc = "";
    var cod_stud = "";
    var cod_mat = 1; //Da sistemare
    var formData = new FormData($("#form-carica").get(0));

    (tipo === "docente") ? (cod_doc=matricola) : (cod_stud=matricola);

    formData.append("titolo", titolo);
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