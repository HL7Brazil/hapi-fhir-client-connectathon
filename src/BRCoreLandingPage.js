import React from 'react';

function BRCoreLandingPage() {
  return (
    <div class="container">
      <h2>Introducao</h2>

      <div xmlns="http://www.w3.org/1999/xhtml">
        <div class="markdown-toc">
          <p>Contents:</p>
          <ul>
            <li>
              <a href="#intro">A RNDS</a>
            </li>
            <li>
              <a href="#rndsecovid">A RNDS e o COVID-19</a>
            </li>
            <li>
              <a href="#estrategias">Estratégias para o enfrentamento da COVID-19</a>
            </li>
            <li>
              <a href="#listaperfis">Lista de perfis do BR-Core</a>
            </li>
          </ul>
        </div>
        <a id="intro"/>
        <h3>A RNDS</h3>
        <p>A Rede Nacional de Dados em Saúde (RNDS), uma plataforma nacional de integração de dados em saúde, é um projeto estruturante do Conecte SUS, programa do Governo Federal para a transformação digital da saúde no Brasil.</p>
        <p>Como uma iniciativa do Departamento de Informática do SUS (DATASUS) da Secretaria Executiva, a RNDS foi criada com base nas diretrizes da <a href="http://saudedigital.saude.gov.br/">Estratégia da Saúde Digital</a>, construída a partir da Política Nacional de Informática e Informações em Saúde (PNIIS) e no documento Estratégia e-Saúde para o Brasil.</p>
        <p>Ao longo do seu desenvolvimento, a RNDS irá se constituir na desejada infovia de saúde: uma plataforma informacional de alta disponibilidade, segura e flexível, que favorecerá o uso ético aos dados de saúde, permitindo, assim, o surgimento de novos serviços, inovação, pesquisa e desenvolvimento que resultem em benefícios para a população e para o Brasil.</p>
        <a id="rndsecovid"/>
        <h3>A RNDS e o COVID-19</h3>
        <p>A RNDS foi impulsionada para auxiliar na luta contra o novo coronavírus, estabelecendo-se, assim, como ferramenta fundamental para a estratégia de enfrentamento da pandemia por meio das seguintes atividades:</p>
        <ul>
          <li>Recepção e integração de notificações e resultados de exames laboratoriais relacionados à COVID-19;</li>
          <li>Disseminação dos resultados dos exames aos cidadãos e profissionais de saúde (<a href="http://conectesus.saude.gov.br/" target="_blank" rel="noopener">Portal Conecte SUS</a>).</li>
        </ul>
        <a id="estrategias"/>
        <h3>Estratégias para o enfrentamento da COVID-19</h3>
        <ul>
          <li>Comunicação;</li>
          <li>Conexão de pessoas, profissionais e serviços;</li>
          <li>Captura da informação;</li>
          <li>Integração das informações;</li>
          <li>Disponibilização de informações estratégicas</li>
        </ul>
        <p>O enfrentamento da pandemia requer informação em diversos níveis, desde o registro das notificações, óbitos, resultados de exames realizados até o provimento de serviços que visam prevenção e cuidado. Entre esses serviços, estão aqueles de autoavaliação, teleconsulta, busca ativa de pacientes e aplicações avançadas para a identificação de tendências e de populações vulneráveis. Para atender às necessidades de enfrentamento ao novo Coronavírus, o Conecte SUS sistematiza um ecossistema de atendimento e de dados em saúde para a COVID-19.</p>
        <a id="listaperfis"/>
        <h5>Lista de perfis do BR-Core</h5>
        <ul>
          <li><a href="./brresultadoexamelaboratorial11">BRResultadoExameLaboratorial v1.1</a></li>
        </ul>
      </div>
    </div>
  );
}

export default BRCoreLandingPage;