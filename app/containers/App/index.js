/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import { TradePage } from '../TradePage';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  background-color: #272e38;
  color: #fff;
  padding: 0 25px;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ws = new WebSocket('ws://localhost:3333/');
ws.onopen = function() {
  console.log('WebSocket Client Connected');
  ws.send('Hi this is web client.');
};
ws.onmessage = function(e) {
  console.log("Received2222: '" + e.data + "'");
};

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={TradePage} />
        <Route exact path="/home" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
