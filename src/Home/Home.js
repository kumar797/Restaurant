import React, { Component } from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import image1 from '../Images/image1.jpg';
import Fab from '@material-ui/core/Fab';

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

const ImageHeader = styled.div`
  padding: 10px;
`;

const PaperHeader = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
`;

class Home extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <React.Fragment>
        <Container data-test="Home">
          <Header>
            <h1>{data && data.header1}</h1>
          </Header>

          <Body>
            <div>{data && data.header2}</div>
            <div>{data && data.header3}</div>
          </Body>
        </Container>
        <div style={{ padding: '0px 10px' }}>
          <Fab>test</Fab>
          <PaperHeader>
            <Paper>
              <ImageHeader>
                <img src={image1} alt="food" />
              </ImageHeader>
            </Paper>
            <Paper>
              <ImageHeader>
                <img src={image1} alt="food" />
              </ImageHeader>
            </Paper>
            <Paper>
              <ImageHeader>
                <img src={image1} alt="food" />
              </ImageHeader>
            </Paper>
            <Paper>
              <ImageHeader>
                <img src={image1} alt="food" />
              </ImageHeader>
            </Paper>
          </PaperHeader>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
