import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
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
      <h5>Resultado de Exame Laboratorial v1.1 (<a href="https://br-core.gointerop.com/StructureDefinition-43822493-10c2-41dc-9fae-962bab3a59e4.html">BRResultadoExameLaboratorial11</a>)</h5>
      <br />
      {brCoreResultadoExameLaboratorial11
        ?
        <div>
          <table>
            <tr>
              <th>Instância</th>
              <th>Relatório</th>
            </tr>
            <tr>
              <td>
                <div class="container">
                  <h4>Cabeçalho do documento</h4>
                  <br />
                  <h5>Tipo do documento</h5>
                  <br />
                  {brCoreResultadoExameLaboratorial11
                    && brCoreResultadoExameLaboratorial11.entry
                    && brCoreResultadoExameLaboratorial11.entry.length > 0
                    && brCoreResultadoExameLaboratorial11.entry[0].resource
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.type
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding.length > 0
                    ? <div>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].system && <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].system}</p>}
                      <h6>Código</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code && <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code}</p>}
                      <h6>Display</h6>
                      <p>{BRTipoDocumento.get(brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code).display}</p>
                      <br />
                      <h5>Data do documento</h5>
                      <br />
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.date && <p>{DateUtils.toBrazilianFormat(brCoreResultadoExameLaboratorial11.entry[0].resource.date)}</p>}
                      <br />
                    </div>
                    : <div>O Bundle não contém todos os recursos esperados.</div>
                  }
                </div>
              </td>
              <td>
                <Card
                  bg={'light'}
                  text={'black'}
                  style={{ width: '100%' }}
                  className="mb-2"
                >
                  <Card.Header>Avaliação de cabeçalho do documento</Card.Header>
                  <Card.Body>
                    <Card.Title>Sobre o Cabeçalho</Card.Title>
                    <Card.Text>
                      {brCoreResultadoExameLaboratorial11
                        && brCoreResultadoExameLaboratorial11.entry
                        && brCoreResultadoExameLaboratorial11.entry.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[0].resource
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.type
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding.length > 0
                        ? <div>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].system
                            ? <p style={{ color: "green" }}>O sistema para identificar o documento foi informado.</p>
                            : <p style={{ color: "red" }}>O sistema para identificar o documento não foi informado.</p>
                          }
                          <h6>Código</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.type.coding[0].code
                            ? <p style={{ color: "green" }}>O código para identificar o documento foi informado.</p>
                            : <p style={{ color: "red" }}>O código para identificar o documento não foi informado.</p>
                          }
                          <h5>Data do documento</h5>
                          <br />
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.date
                            ? <p style={{ color: "green" }}>A data do documento foi fornecida.</p>
                            : <p style={{ color: "red" }}>A data do documento não foi fornecida.</p>
                          }
                          <br />
                        </div>
                        : <div>O Bundle não contém todos os recursos esperados.</div>
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <td>
                <div class="container">
                  {brCoreResultadoExameLaboratorial11
                    && brCoreResultadoExameLaboratorial11.entry
                    && brCoreResultadoExameLaboratorial11.entry.length > 0
                    && brCoreResultadoExameLaboratorial11.entry[0].resource
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.author
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.author.length > 0
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier
                    ? <div>
                      <h5>Autor</h5>
                      <br />
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.system} (CNPJ)</p>
                        : <p>Não informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.value
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.value}</p>
                        : <p>Não informado.</p>
                      }
                      <br />
                    </div>
                    : <div>O Bundle não contém todos os recursos esperados.</div>
                  }
                </div>
              </td>
              <td>
                <Card
                  bg={'light'}
                  text={'black'}
                  style={{ width: '100%' }}
                  className="mb-2"
                >
                  <Card.Header>Avaliação de autoria do documento</Card.Header>
                  <Card.Body>
                    <Card.Title>Sobre a Autoria</Card.Title>
                    <Card.Text>
                      {brCoreResultadoExameLaboratorial11
                        && brCoreResultadoExameLaboratorial11.entry
                        && brCoreResultadoExameLaboratorial11.entry.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[0].resource
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.author
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.author.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier
                        ? <div>
                          <h5>Autor</h5>
                          <br />
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.system
                            ? <p style={{ color: "green" }}>O CodeSystem do CNPJ foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem do CNPJ não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.author[0].identifier.value
                            ? <p style={{ color: "green" }}>O CNPJ foi informado.</p>
                            : <p style={{ color: "red" }}>O CNPJ não foi informado.</p>
                          }
                          <br />
                        </div>
                        : <div>O Bundle não contém todos os recursos esperados.</div>
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <td>
                <div class="container">
                  {brCoreResultadoExameLaboratorial11
                    && brCoreResultadoExameLaboratorial11.entry
                    && brCoreResultadoExameLaboratorial11.entry.length > 0
                    && brCoreResultadoExameLaboratorial11.entry[0].resource
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.subject
                    && brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier
                    ? <div>
                      <h5>Paciente</h5>
                      <br />
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.system} (CNS)</p>
                        : <p>Não informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.value
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.value}</p>
                        : <p>Não informado.</p>
                      }
                      <br />
                    </div>
                    : <div></div>
                  }
                </div>
              </td>
              <td>
                <Card
                  bg={'light'}
                  text={'black'}
                  style={{ width: '100%' }}
                  className="mb-2"
                >
                  <Card.Header>Avaliação de Referência do Paciente</Card.Header>
                  <Card.Body>
                    <Card.Title>Sobre o Paciente</Card.Title>
                    <Card.Text>
                      {brCoreResultadoExameLaboratorial11
                        && brCoreResultadoExameLaboratorial11.entry
                        && brCoreResultadoExameLaboratorial11.entry.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[0].resource
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.subject
                        && brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier
                        ? <div>
                          <h5>Paciente</h5>
                          <br />
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.system
                            ? <p style={{ color: "green" }}>O CodeSystem do CNS do paciente foi informado</p>
                            : <p style={{ color: "red" }}>O CodeSystem do CNS do paciente não foi informado</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[0].resource.subject.identifier.value
                            ? <p style={{ color: "green" }}>O CNS do paciente foi informado.</p>
                            : <p style={{ color: "red" }}>O CNS do paciente não foi informado.</p>
                          }
                          <br />
                        </div>
                        : <div></div>
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <td>
                <div class="container">
                  {brCoreResultadoExameLaboratorial11
                    && brCoreResultadoExameLaboratorial11.entry
                    && brCoreResultadoExameLaboratorial11.entry.length > 2
                    && brCoreResultadoExameLaboratorial11.entry[1].resource
                    ? <div>
                      <h4>Observação</h4>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.issued
                        ? <p>Emitida em {DateUtils.toBrazilianFormat(brCoreResultadoExameLaboratorial11.entry[1].resource.issued)}</p>
                        : <p>Data de emissão não informada</p>
                      }
                      <h5>Status</h5>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.status
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.status}</p>
                        : <p>Status da emissão não informado.</p>
                      }
                      <h5>Realizada por</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.performer
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.system} (CNPJ)</p>
                        : <p>CodeSystem de identificação do realizador não foi informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.performer
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.value
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.value}</p>
                        : <p>O CNPJ do realizador não foi informado.</p>
                      }
                      <br />
                      <h5>Exame</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.code
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].system}</p>
                        : <p>O CodeSystem para identificação do exame não foi informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.code
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code}</p>
                        : <p>O código de identificação do exame não foi informado.</p>
                      }
                      <h6>Display</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.code
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code
                        ? <p>{BRNomeExameGAL.get(brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code).display}</p>
                        : <p>{BRNomeExameGAL.get(brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code).display}</p>
                      }
                      <br />
                      <h5>Categoria</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].system}</p>
                        : <p>O CodeSystem para identificação da categoria do exame não foi encontrado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code}</p>
                        : <p>O código para identificação da categoria do exame não foi encontrado.</p>
                      }
                      <h6>Display</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code
                        ? <p>{BRSubgrupoTabelaSUS.get(brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code).display}</p>
                        : <p>{BRSubgrupoTabelaSUS.get(brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code).display}</p>
                      }
                      <br />
                      <h5>Valor</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].system}</p>
                        : <p>O CodeSystem para valores da Observação não foi informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code}</p>
                        : <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code}</p>
                      }
                      <h6>Display</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code
                        ? <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code).display}</p>
                        : <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code).display}</p>
                      }
                      <br />
                      <h5>Interpretação</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].system}</p>
                        : <p>O CodeSystem para interpretação da observação não foi informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code}</p>
                        : <p>O código para interpretação do valor não foi informado.</p>
                      }
                      <h6>Display</h6>
                      {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0]
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding.length > 0
                        && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].system
                        ? <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code).display}</p>
                        : <p>{BRResultadoQualitativoExame.get(brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code).display}</p>
                      }
                      <br />
                      <h5>Amostra</h5>
                      <h6>Sistema</h6>
                      {brCoreResultadoExameLaboratorial11.entry[2].resource
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding.length
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].system
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].system}</p>
                        : <p>O CodeSystem da Amostra não foi informado.</p>
                      }
                      <h6>Valor</h6>
                      {brCoreResultadoExameLaboratorial11.entry[2].resource
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding.length
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0]
                        && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code
                        ? <p>{brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code}</p>
                        : <p>O código da Amostra não foi informado.</p>
                      }
                      <br />
                    </div>
                    : <div></div>
                  }
                </div>
              </td>
              <td>
                <Card
                  bg={'light'}
                  text={'black'}
                  style={{ width: '100%' }}
                  className="mb-2"
                >
                  <Card.Header>Avaliação da Observação</Card.Header>
                  <Card.Body>
                    <Card.Title>Sobre a Observação</Card.Title>
                    <Card.Text>
                      {brCoreResultadoExameLaboratorial11
                        && brCoreResultadoExameLaboratorial11.entry
                        && brCoreResultadoExameLaboratorial11.entry.length > 2
                        && brCoreResultadoExameLaboratorial11.entry[1].resource
                        ? <div>
                          <h4>Observação</h4>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.issued
                            ? <p style={{ color: "green" }}>A data de emissão foi informada.</p>
                            : <p style={{ color: "red" }}>A data de emissão não não informada.</p>
                          }
                          <h5>Status</h5>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.status
                            ? <p style={{ color: "green" }}>O status da emissão foi informado.</p>
                            : <p style={{ color: "red" }}>O status da emissão não foi informado.</p>
                          }
                          <h5>Realizada por</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.performer
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.system
                            ? <p style={{ color: "green" }}>O CodeSystem do CNPJ não foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem do CNPJ não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.performer
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.performer[0].identifier.value
                            ? <p style={{ color: "green" }}>O CNPJ do realizador foi informado.</p>
                            : <p style={{ color: "red" }}>O CNPJ do realizador não foi informado.</p>
                          }
                          <br />
                          <h5>Exame</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.code
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].system
                            ? <p style={{ color: "green" }}>O CodeSystem do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem do exame não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.code
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.code.coding[0].code
                            ? <p style={{ color: "green" }}>O código do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O Código do exame não foi informado.</p>
                          }
                          <br />
                          <h5>Categoria</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].system
                            ? <p style={{ color: "green" }}>O CodeSystem da categoria do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem da categoria do exame não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.category[0].coding[0].code
                            ? <p style={{ color: "green" }}>O código da categoria do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O código da categoria do exame não foi informado.</p>
                          }
                          <br />
                          <h5>Valor</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].system
                            ? <p style={{ color: "green" }}>O CodeSystem do valor do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem do valor do exame não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.valueCodeableConcept.coding[0].code
                            ? <p style={{ color: "green" }}>O código do exame foi informado.</p>
                            : <p  style={{ color: "red" }}>O código do exame não foi informado.</p>
                          }
                          <br />
                          <h5>Interpretação</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].system
                            ? <p style={{ color: "green" }}>O CodeSystem para interpretação da observação foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem para interpretação da observação não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[1].resource.category
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0]
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding.length > 0
                            && brCoreResultadoExameLaboratorial11.entry[1].resource.interpretation[0].coding[0].code
                            ? <p style={{ color: "green" }}>O código para interpretação do valor foi informado.</p>
                            : <p style={{ color: "red" }}>O código para interpretação do valor não foi informado.</p>
                          }
                          <br />
                          <h5>Amostra</h5>
                          <h6>Sistema</h6>
                          {brCoreResultadoExameLaboratorial11.entry[2].resource
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding.length
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].system
                            ? <p style={{ color: "green" }}>O CodeSystem da amostra do exame foi informado.</p>
                            : <p style={{ color: "red" }}>O CodeSystem da amostra do exame não foi informado.</p>
                          }
                          <h6>Valor</h6>
                          {brCoreResultadoExameLaboratorial11.entry[2].resource
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding.length
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0]
                            && brCoreResultadoExameLaboratorial11.entry[2].resource.type.coding[0].code
                            ? <p style={{ color: "green" }}>O valor da amostra foi informado.</p>
                            : <p style={{ color: "red" }}>O valor da amostra não foi informado.</p>
                          }
                          <br />
                        </div>
                        : <div></div>
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
          </table>
          <div align="center"><Button onClick={onClickCancel} align="left">Voltar</Button></div>
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