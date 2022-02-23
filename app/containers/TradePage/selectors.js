import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tradePage state domain
 */

const selectTradePageDomain = state => state.tradePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TradePage
 */

const makeSelectTradePage = () =>
  createSelector(
    selectTradePageDomain,
    substate => substate,
  );

export default makeSelectTradePage;
export { selectTradePageDomain };
