import { Dispatch } from 'redux';
import service from '../service';
import { ListFundsTypes } from './types';

export const actionCreator = {
    fetchListFunds: () => (dispatch: Dispatch) => {
        dispatch({type: ListFundsTypes.LIST_FUNDS_REQUEST});
        service.getItems().then((data) => {
            dispatch({ type: ListFundsTypes.LIST_FUNDS_RECEIVE, data});
        });
    },
};
