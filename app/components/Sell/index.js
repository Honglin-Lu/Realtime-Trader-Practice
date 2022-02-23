/**
 *
 * Sell
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Box = styled.div`
  display: flex;
  background-color: rgb(47, 53, 66);
  justify-content: center;
  align-items: center;
  width: 110px;
  border-radius: 4px;
  :hover {
    background-color: #ff274b;
  }

  .sell {
    color: #6c6a6a;
    font-size: 0.7rem;
  }

  .left-number {
    font-size: 0.85rem;
  }

  .mid-number {
    font-size: 2.5rem;
  }
  .right-number {
  }

`;

function Sell() {
  return (
    <Box>
      <div>
        <div class="sell">SELL</div>
        <div class="left-number">102.</div>
      </div>
      <div class="mid-number">11</div>
      <div class="right-number">3</div>
    </Box>
  );
}

Sell.propTypes = {};

export default Sell;
