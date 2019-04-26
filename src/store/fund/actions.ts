import { Dispatch } from 'redux';
import service from '../service';
import { FundTypes } from './types';

export const actionCreator = {
    fetchFund: (id: number) => (dispatch: Dispatch) => {
        dispatch({ type: FundTypes.FUND_REQUEST });
        service.getItemById(id).then((data) => {
            dispatch({ type: FundTypes.FUND_RECEIVE, data});
        });
    },
};
