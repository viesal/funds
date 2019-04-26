import { Reducer } from 'redux';
import { FundTypes, IFundFull, IFundsFullState } from './types';

const initialState: IFundsFullState = {
    data: new Array<IFundFull>(),
    loaded: false,
    loading: false,
};

const reducer: Reducer<IFundsFullState> = (state = initialState, action) => {
    switch (action.type) {
        case FundTypes.FUND_RECEIVE:
            return {loaded: true, loading: false, data: action.data};
        case FundTypes.FUND_REQUEST:
            return {loaded: false, loading: true, data: state.data};
        default:
            return state;
    }
};
