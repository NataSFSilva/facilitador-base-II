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

function gerar() {
  var tbl = document.getElementById("tabela");
	for (int i = 0; i < linhas.length; i++) {
      	var linha = document.createElement("tr");
    	tbl.appendChild(linha);
      	linha.innerHTML = `${linhas[i].emissor}`;
    }
}