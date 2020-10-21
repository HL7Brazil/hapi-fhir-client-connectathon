import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HL7Nav from './HL7Nav';
import Sobre from './Sobre';

import BRCoreLandingPage from './BRCoreLandingPage';
import BRCoreResultadoExameLaboratorial11Get from './BRCoreResultadoExameLaboratorial11Get';
import BRCoreResultadoExameLaboratorial11List from './BRCoreResultadoExameLaboratorial11List';

function App() {
  return (
    <Router>
      <div>
        <HL7Nav />
        <Route exact path="/brresultadoexamelaboratorial11">
          <BRCoreResultadoExameLaboratorial11List/>
        </Route>
        <Route path="/brresultadoexamelaboratorial11/:IdPath">
          <BRCoreResultadoExameLaboratorial11Get/>
        </Route>
        <Route exact path="/sobre">
          <Sobre/>
        </Route>
        <Route exact path="/">
          <BRCoreLandingPage/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
