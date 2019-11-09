import React, { Component, Fragment } from 'react';
import Home from './Home';
class HomeContainer extends Component {
  render() {
    const data = {
      header1: 'OUR INTERESTING HISTORY',
      header2:
        'Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies.',
      header3:
        'Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum malesuada congue nunc ornare. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies.'
    };

    return (
      <Fragment>
        <Home data={data} />
      </Fragment>
    );
  }
}

export default HomeContainer;
