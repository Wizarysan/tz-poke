import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { createGlobalStyle } from 'styled-components'

import Loading from './Loading';
import PokeTable from './PokeTable/PokeTable.jsx';
import SingleCard from './SingleCard/SingleCard.jsx';

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const GlobalStyle = createGlobalStyle`
  .pokemon__image {
    max-height: 210px;
  }
`

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PokeTable} />          
          <Route path="/:id" component={SingleCard} />          
          <Route component={AsyncNoMatch} />
        </Switch>
        <GlobalStyle/>
      </div>      
    </Router>
  );
};

export default App;
