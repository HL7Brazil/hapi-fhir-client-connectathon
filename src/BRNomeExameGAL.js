const BRNomeExameGAL = {
    get: function (code) {
        var retVal = { display: null, definition: "Não informada." };

        switch (code) {
            case "coronavirusnCoV":
                retVal.display = "Novo coronavírus (2019-nCoV)";
                break;
            case "COVID":
                retVal.display = "COVID-19, Biologia Molecular";
                break;
            case "CVIDGG":
                retVal.display	= "COVID-19, IgG";
                break;
            case "CVIDGM":
                retVal.display = "COVID-19, IgM";
                break;
            default:
                retVal.display = "Código não encontrado";
        }

        return retVal;
    }
}

export default BRNomeExameGAL;