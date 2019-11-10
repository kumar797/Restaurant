import React, { Component, Fragment } from 'react';
import Home from './Home';
import data from './data';
class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <Home data={data} />
      </Fragment>
    );
  }
}

export default HomeContainer;
