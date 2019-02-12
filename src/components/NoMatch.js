import React from 'react';
import { Icon } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <React.Fragment>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </React.Fragment>
  );
};

export default NoMatch;
