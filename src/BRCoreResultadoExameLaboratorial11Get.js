import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import DotEnv from './DotEnv';
import FHIR from "fhirclient";

import DateUtils from './DateUtils';

import BRTipoDocumento from './BRTipoDocumento';
import BRSubgrupoTabelaSUS from './BRSubgrupoTabelaSUS';
import BRNomeExameGAL from './BRNomeExameGAL';
import BRResultadoQualitativoExame from './BRResultadoQualitativoExame';
import BRTipoAmostraGAL from './BRTipoAmostraGAL';

const client = FHIR.client({
  serverUrl: DotEnv.FHIR_BASE_URL
});

async function getBRCoreResultadoExameLaboratorial11() {
  let response = await client.request("Bundle/" + 1552);
  return response;
}

function BRCoreResultadoExameLaboratorial11(props) {
  const { IdPath } = useParams();
  const [brCoreResultadoExameLaboratorial11, setBrCoreResultadoExameLaboratorial11] = useState();

  const onLoad = async () => {
    var newResultadoExameLaboratorial11;

    if (client) {
      newResultadoExameLaboratorial11 = await getBRCoreResultadoExameLaboratorial11();
    }

    if (newResultadoExameLaboratorial11) {
      console.log(newResultadoExameLaboratorial11);
      setBrCoreResultadoExameLaboratorial11(newResultadoExameLaboratorial11);
    }
  }

  const onClickCancel = (event) => {
    window.location = "./";
  }

  useEffect(async () => {
    onLoad();
  }, []);


  return (
    <div class="container">
      <h5>Resultado de Exame Laboratorial v1.1 (<a href="https://br-core-3e849.web.app/StructureDefinition-43822493-10c2-41dc-9fae-962bab3a59e4.html">BRResultadoExameLaboratorial11</a>)</h5>
      <br />
      {brCoreResultadoExameLaboratorial11
        ?
        <div>
          <h4>Cabeçalho do documento</h4>
          <br />
          <h5>Tipo do documento</h5>
          <br />
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].system}</p>
          <h6>Código</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRTipoDocumento.get(brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRTipoDocumento.get(brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code).definition}</p>
          <br />
          <h5>Data do documento</h5>
          <br />
          <p>{DateUtils.toBrazilianFormat(brCoreResultadoExameLaboratorial11.entry[0].resource.date)}</p>
          <br />
          <h5>Autor</h5>
          <br />
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.system} (CNPJ)</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.value}</p>
          <br />
          <h5>Paciente</h5>
          <br />
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.system} (CNS)</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.value}</p>
          <br />
          <h4>Observação</h4>
          <p>Emitida em {DateUtils.toBrazilianFormat(brCoreResultadoExameLaboratorial11.entry[1].resource.issued)}</p>
          <h5>Status</h5>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.status}</p>
          <h5>Realizada por</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.system} (CNPJ)</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.value}</p>
          <br />
          <h5>Exame</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].system}</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRNomeExameGAL.get(brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRNomeExameGAL.get(brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code).definition}</p>
          <br />
          <h5>Categoria</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].system}</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRSubgrupoTabelaSUS.get(brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRSubgrupoTabelaSUS.get(brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code).definition}</p>
          <br />
          <h5>Valor</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].system}</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code).definition}</p>
          <br />
          <h5>Interpretação</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].system}</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code).definition}</p>
          <br />
          <h5>Amostra</h5>
          <h6>Sistema</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].system}</p>
          <h6>Valor</h6>
          <p>{brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code}</p>
          <h6>Display</h6>
          <p>{BRTipoAmostraGAL.get(brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code).display}</p>
          <h6>Definição</h6>
          <p>{BRTipoAmostraGAL.get(brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code).definition}</p>
          <br />
          <Button onClick={onClickCancel} align="left">Voltar</Button>
        </div>
        :
        <div>
          <p>Carregando...</p>
        </div>
      }
    </div>
  );
}

export default BRCoreResultadoExameLaboratorial11;