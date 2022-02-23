/**
 *
 * TradePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTradePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';

import messages from './messages';
import Spot from '../../components/Spot';

const TradeWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  flex-flow: row nowrap;

`;
const MainContainer = styled.article`
  width: 80%;
`;
const Analytics = styled.aside`
  width: 20%;
`;

const Workspace = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 60vh;
`;
const Spotcell = styled.div`
`;
const Blotter = styled.div`
  height: 25vh;
`;


export function TradePage() {
  useInjectReducer({ key: 'tradePage', reducer });
  useInjectSaga({ key: 'tradePage', saga });

  return (
    <div>
      <Helmet>
        <title>TradePage</title>
        <meta name="description" content="Description of TradePage" />
      </Helmet>
      {/*<FormattedMessage {...messages.header} />*/}
      <TradeWrapper>
        <MainContainer>
          <Workspace>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
            <Spotcell><Spot></Spot></Spotcell>
          </Workspace>
          <Blotter>
            Data list
          </Blotter>
        </MainContainer>
        <Analytics>
          Analyste
        </Analytics>
      </TradeWrapper>
    </div>
  );
}

TradePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tradePage: makeSelectTradePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TradePage);
