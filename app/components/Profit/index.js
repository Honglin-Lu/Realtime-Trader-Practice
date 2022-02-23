/**
 *
 * Profit
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";




const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .up {
    color: #79e879;
    font-size: 1.5rem;
  }

  .down {
    color: #ea4141;
    font-size: 1.5rem;
  }

  .number {
    font-size: 0.7rem;
    color: rgb(175, 175, 182);
  }
`;
function Profit() {
  return (
    <Box>
      {/*<FormattedMessage {...messages.header} />*/}
      <div class="up"><MdOutlineArrowDropUp /></div>
      <div class="number">2.3</div>
      <div class="down"><MdOutlineArrowDropDown /></div>
    </Box>
  );
}

Profit.propTypes = {};

export default Profit;
