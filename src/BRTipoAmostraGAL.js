/**
 * SECONF	Secreção Orofaríngea e Nasofaríngea
SNOF	Swab Naso-Orofaríngeo
SWNAFA	Swab Nasofaríngeo
SWAB	Swab
SECNAS	Secreção Nasofaríngea
ASNAFA	Aspirado Nasofaríngeo
SWORO	Swab Orofaríngeo
SWNAS	Swab Nasal
SECORF	Secreção Orofaríngea
LAVBRA	Lavado Brônquico Alveolar
LAVBRO	Lavado Brônquico
CORIZA	Coriza
EXSNAS	Exsudato de Nasofaringe
ASPBRO	Aspirado Brônquico
LAVTBR	Lavado Traqueo-Brônquico
SECTRA	Secreção Traqueal
EXSORO	Exsudato de Orofaringe
FGMP	Fragmentos do pulmão
FGMT	Fragmento
FLUORA	Fluido oral
FRAAMI	Fragmentos de ampigdalas
FRABAC	Fragmentos de baço
FRACOR	Fragmentos de coração
FRAFIG	Fragmentos de fígado
FRAGT	Fragmento de tecido
FRAMOR	Fragmentos de múltiplos órgãos
FRAPAN	Fragmentos de pâncreas
FRARIM	Fragmentos de rim
FRATRA	Fragmentos de traquéia
FRBRON	Fragmentos de brônquio
INFP	Infiltrado pulmonar
INODER	Inoculação intradérmica
LAVORO	Lavado de orofaringe
MTBIO	Material Não Biológico
SECBRO	Secreção brônquica
SECOC	Secreção ocular
SECPEN	Secreção peniana
SGEDT	Sangue com EDTA
SGHEM	Sangue
SNCCEB	Fragmento do tecido do SNC - cérebro
SWBAN	Swab Anal
SWOCU	Swab Ocular
SWRET	Swab retal
TECPM	Tecido pós-mortem
 * 
 */

const BRTipoAmostraGAL = {
    get: function (code) {
        var retVal = { display: null, definition: "Não informada." };

        switch (code) {
            case "SECONF":
                retVal.display = "Secreção Orofaríngea e Nasofaríngea";
                break;
            default:
                retVal.display = "Código não encontrado";
        }

        return retVal;
    }
}

export default BRTipoAmostraGAL;