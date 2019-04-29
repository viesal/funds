import { Reducer } from 'redux';
import { FundTypes, IFundsFullState } from './types';

const initialState: IFundsFullState = {
    data: {
        amount_max: 1,
        amount_min: 1,
        description_full: '',
        id: -1,
        name: '',
    },
    loaded: false,
    loading: false,
};

export const reducer: Reducer<IFundsFullState> = (state = initialState, action) => {
    switch (action.type) {
        case FundTypes.FUND_RECEIVE:
            return {loaded: true, loading: false, data: action.data};
        case FundTypes.FUND_REQUEST:
            return {loaded: false, loading: true, data: state.data};
        case FundTypes.AMMOUNT_ADD:
            return {responseServer: action.responseServer, ...state};
        default:
            return state;
    }
};
