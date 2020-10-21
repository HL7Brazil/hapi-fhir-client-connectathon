const BRTipoDocumento = {
    get: function (code) {
        var retVal = { display: null, definition: "Não informada." };

        switch (code) {
            case "CMD":
                retVal.display = "Conjunto Mínimo de Dados";
                retVal.definition = "Documento público que coleta os dados mínimos dos atendimentos em saúde realizados em qualquer estabelecimento de saúde do país, público ou privado, em cada contato assistencial.";
                break;
            case "SA":
                retVal.display = "Sumário de Alta";
                retVal.definition = "Relato clínico objetivo sobre as intervenções realizadas, as instruções para continuidade do cuidado pós-alta e o estado de saúde do indivíduo ao final de sua permanência na internação em estabelecimentos de saúde como: hospital, clínica, hospital-dia, internação domiciliar e urgência.";
                break;
            case "RAC":
                retVal.display = "Registro de Atendimento Clínico";
                retVal.definition = "Registro de dados essenciais de uma consulta realizada a um indivíduo no âmbito da atenção básica, especializada ou domiciliar (atendimento diário)."
            case "RIA":
                retVal.display = "Registro de Imunobiológico Administrado";
                break;
            case "RDM":
                retVal.display = "Registro de Dispensação de Medicamento";
                break;
            case "REL":
                retVal.display = "Resultado de Exame(s) Laboratoriais(s)";
                break;
            default:
                retVal.display = "Código não encontrado";
        }

        return retVal;
    }
}

export default BRTipoDocumento;