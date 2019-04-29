import { IFundFull } from '../store/fund/types';
import { data } from './data';

export class Service {
    private host: string;
    constructor(host: string) {
        this.host = host;
    }
    public getItems() {
        return this.get('/api/funds/').then((item: any) => item.map((fund: any) =>
            ({
                description_short: fund.description_short,
                id: fund.id,
                image: fund.image,
                name: fund.name,
            }),
        ));
    }

    public getItemById(id: number) {
        return this.get(`/api/funds/${id}`)
            .then((items: any) => items.find((item: any) => item.id === id));
    }

    public changeItem(item: IFundFull) {
        return this.post(`/api/funds/${item.id}`, item)
            .then((responce) => responce);
    }

    private get(url: string) {
        return new Promise((resolve) => {
            resolve(data);
        });
    }

    private post(url: string, body: any) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({status: true});
            }, 500);
        });
    }
}
