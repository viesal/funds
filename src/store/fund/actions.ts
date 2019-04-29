import { Dispatch } from 'redux';
import service from '../../service';
import { FundTypes, IFundFull } from './types';

export const actionCreator = {
    addAmmount: (item: any) => async (dispatch: Dispatch) => {
        await service.changeItem(item).then((data) => {
            dispatch({ type: FundTypes.AMMOUNT_ADD, responseServer: data});
        });
    },
    fetchFund: (id: number) => (dispatch: Dispatch) => {
        dispatch({ type: FundTypes.FUND_REQUEST });
        service.getItemById(id).then((data) => {
            dispatch({ type: FundTypes.FUND_RECEIVE, data});
        });
    },
};
