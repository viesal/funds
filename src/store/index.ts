import { reducer as fundReducer } from './fund/reducer';
import { IFundsFullState } from './fund/types';
import { reducer as listReducer } from './fundsList/reducer';
import { IFundsShortState } from './fundsList/types';

export interface IApplicationState {
    fund: IFundsFullState;
    listFunds: IFundsShortState;
}

export const reducers = {
    fund: fundReducer,
    listFunds: listReducer,
};
