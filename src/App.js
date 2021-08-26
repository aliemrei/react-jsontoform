import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BasicForm from './basicForm/basicFormElement';
import JsonSchemaForm from './jsonSchema/jsonSchema';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">react-jsonschema-form</Link>
            </li>
            <li>
              <Link to="/basicForm">Basic Form</Link>
            </li>
            <li>
              <Link to="/jsonForm">Json Form</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/basicForm" component={BasicForm} />
          <Route path="/" component={JsonSchemaForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
