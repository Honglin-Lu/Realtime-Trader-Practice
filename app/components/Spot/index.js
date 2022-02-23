/**
 *
 * Spot
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Box = styled.div`
  width: 350px;
  height: 200px;
  padding: 15px;
  display: flex;
  background-color: rgb(47, 53, 66);
  :hover {
    background-color: #3d4455;
  }
`;
const Main = styled.article`
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
`;
const Title = styled.div`

`;
const Chart = styled.div`

`;

const Side = styled.aside`
width: 30%;
`;


function Spot() {
  return (
    <Box>
      {/*<FormattedMessage {...messages.header} />*/}
      <Main>
        <Title>EUR/USD</Title>
        <Chart>
          fff

        </Chart>
      </Main>
      <Side>bbb</Side>
    </Box>
  );
}

Spot.propTypes = {};

export default Spot;
