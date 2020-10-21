const BRSubgrupoTabelaSUS = {
    get: function (code) {
        var retVal = { display: null, definition: "Não informada." };

        switch (code) {
            case "0202":
                retVal.display = "Diagnóstico em laboratório clínico";
                break;
            case "0203":
                retVal.display = "Diagnóstico em anatomia patológica e citopatologia";
                break;
            case "0204":
                retVal.display = "Diagnóstico em radiologia";
                break;
            case "0205":
                retVal.display = "Diagnóstico em ultrassonografia";
                break;
            case "0206":
                retVal.display = "Diagnóstico em tomografia";
                break;
            case "0207":
                retVal.display = "Diagnóstico em ressonância magnética";
                break;
            case "0208":
                retVal.display = "Diagnóstico em medicina nuclear in vitro";
                break;
            case "0209":
                retVal.display = "Diagnóstico em endoscopia";
                break;
            case "0210":
                retVal.display = "Diagnóstico em radiologia intervencionista";
                break;
            case "0211":
                retVal.display = "Métodos diagnósticos em especialidades";
                break;
            case "0212":
                retVal.display = "Diagnóstico e procedimentos especiais em hemoterapia";
                break;
            case "0213":
                retVal.display = "Diagnóstico em vigilância epidemiológica e ambiental";
                break;
            case "0214":
                retVal.display = "Diagnóstico por teste rápido";
                break;
            default:
                retVal.display = "Código não encontrado";
        }

        return retVal;
    }
}

export default BRSubgrupoTabelaSUS;