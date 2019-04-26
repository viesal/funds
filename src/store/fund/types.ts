export interface IFundFull {
    id: number;
    name: string;
    description_full: string;
    amount_min: number;
    amount_max: number;
}

export const enum FundTypes {
    FUND_REQUEST = '@FUND/REQUST',
    FUND_RECEIVE = '@FUND/RECEIVE',
}

export interface IFundsFullState {
    loaded: boolean;
    loading: boolean;
    data: IFundFull[];
}
