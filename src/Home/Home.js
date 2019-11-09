import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 10px;
`;

const Body = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Header = styled.div`
  justify-self: center;
`;

class Home extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Container data-test="Home">
        <Header>
          <h1>{data && data.header1}</h1>
        </Header>

        <Body>
          <div>{data && data.header2}</div>
          <div>{data && data.header3}</div>
        </Body>
      </Container>
    );
  }
}

export default Home;
