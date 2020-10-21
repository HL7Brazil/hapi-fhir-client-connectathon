import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DotEnv from './DotEnv';
import FHIR from "fhirclient";
import Table from 'react-bootstrap/Table';

const client = FHIR.client({
  serverUrl: DotEnv.FHIR_BASE_URL
});

async function getBRCoreResultadoExameLaboratorial11() {
  let response = await client.request("Bundle?identifier=http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-1|");
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

  useEffect(async () => {
    onLoad();
  }, []);


  return (
    <div class="container">
        <h5>Resultado de Exame Laboratorial v1.1 (<a href="https://br-core-3e849.web.app/StructureDefinition-43822493-10c2-41dc-9fae-962bab3a59e4.html">BRResultadoExameLaboratorial11</a>)</h5>
        <br/>
        {brCoreResultadoExameLaboratorial11
            ?
            <Table striped bordered hover>
                <thead align="center">
                    <tr>
                        <th>Sequencial</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                {brCoreResultadoExameLaboratorial11.entry.map(entry => {
                    const entries = [];

                    entries.push(<td align="center">{entry.resource.id}</td>)

                    entries.push(<td align="center"><a href={"../brresultadoexamelaboratorial11/" + entry.resource.id}>Visualizar</a></td>);

                    return (
                        <tbody>{entries}</tbody>
                    )
                })}
            </Table>
            :
            <div>
                <p>Carregando...</p>
            </div>
        }
    </div>
  );
}

export default BRCoreResultadoExameLaboratorial11;