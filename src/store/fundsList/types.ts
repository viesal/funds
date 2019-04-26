export interface IFundShort {
    id: number;
    name: string;
    description_short: string;
    image: string;
}

export const enum ListFundsTypes {
    LIST_FUNDS_REQUEST = '@LIST_FUNDS/REQUST',
    LIST_FUNDS_RECEIVE = '@LIST_FUNDS/RECEIVE',
}

export interface IFundsShortState {
    loaded: boolean;
    loading: boolean;
    data: IFundShort[];
}
