export interface IFundFull {
    id: number;
    name: string;
    description_full: string;
    amount_min: number;
    amount_max: number;
}

export interface IResponseServer {
    status: boolean;
}

export const enum FundTypes {
    FUND_REQUEST = '@FUND/REQUST',
    FUND_RECEIVE = '@FUND/RECEIVE',
    AMMOUNT_ADD = '@AMMOUNT/ADD',
}

export interface IFundsFullState {
    loaded: boolean;
    loading: boolean;
    data: IFundFull;
    responseServer?: IResponseServer;
}
