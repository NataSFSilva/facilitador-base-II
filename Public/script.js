var linhas = [
    {
        emissor: "Ambev",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "BBNK",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "Bene",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "BitCaptal",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "Caju",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "Mozper",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "Rapyd",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "Zoop_iFood",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    },
    {
        emissor: "ZroBank",
        arquivo: "",
        tamanhoArquivo: "",
        received: "",
        processed: ""
    }
]

function dataAtual() {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

    const dataFormatada = ` - ${dia}/${mes}`;
    console.log(dataFormatada);

    linhas.forEach(dia => {
        dia.received += dataFormatada;
        dia.processed += dataFormatada;
    });
}

// function carregarDados() {
//     linhas.forEach((dado, index) => {

//     });
// }

function gerarTable() {
    var texto = (document.getElementById("alertas").value).split("\n");
    console.log(texto);
    // var tbl = document.getElementById("tabela");
    // for (let i = 0; i < linhas.length; i++) {
    //     var linha = document.createElement("tr");
    //     tbl.appendChild(linha);

    //     var emissor = document.createElement("td");
    //     var emissor = document.createElement("td");
    //     var emissor = document.createElement("td");
    //     var emissor = document.createElement("td");
    //     var emissor = document.createElement("td");
    //     linha.appendChild(emissor);

    //     emissor.innerHTML = `${linhas[i].emissor}`;
    // }
    dataAtual()
}