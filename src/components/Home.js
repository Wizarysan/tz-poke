import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import PokeTable from './PokeTable/PokeTable.jsx';

const Home = () => {
  return (
    <React.Fragment>
      <PokeTable />
    </React.Fragment>
  );
};

export default Home;
