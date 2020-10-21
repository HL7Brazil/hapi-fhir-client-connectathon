const BRResultadoQualitativoExame = {
    get: function (code) {
        var retVal = { display: null, definition: "Não informada." };

        switch (code) {
            case "1":
                retVal.display = "Detectável";
                break;
            case "2":
                retVal.display = "Não Detectável";
                break;
            case "3":
                retVal.display	= "Inconclusivo";
                break;
            default:
                retVal.display = "Código não encontrado";
        }

        return retVal;
    }
}

export default BRResultadoQualitativoExame;