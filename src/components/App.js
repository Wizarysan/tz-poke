import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { createGlobalStyle } from 'styled-components'

import Home from './Home';
import Loading from './Loading';

// const AsyncDynamicPAge = importedComponent(
//   () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
//   {
//     LoadingComponent: Loading
//   }
// );
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
          <Route exact path="/" component={Home} />          
          <Route component={AsyncNoMatch} />
        </Switch>
        <GlobalStyle/>
      </div>      
    </Router>
  );
};

export default App;
