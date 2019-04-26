import { Reducer } from 'redux';
import { IFundShort, IFundsShortState, ListFundsTypes } from './types';

const initialState: IFundsShortState = {
    data: new Array<IFundShort>(),
    loaded: false,
    loading: false,
};

export const reducer: Reducer<IFundsShortState> = (state = initialState, action) => {
    switch (action.type) {
        case ListFundsTypes.LIST_FUNDS_RECEIVE:
            return {loaded: true, loading: false, data: action.data};
        case ListFundsTypes.LIST_FUNDS_REQUEST:
            return {loaded: false, loading: true, data: state.data};
        default:
            return state;
    }
};
