export class Service {
    private host: string;
    constructor(host: string) {
        this.host = host;
    }
    public getItems() {
        return this.get('/api/funds/').then((data) => data);
    }

    public getItemById(id: number) {
        return this.get(`/api/funds/${id}`).then((data) => data);
    }

    private get(url: string) {
        return new Promise((resolve) => {
            resolve([]);
        });
    }

    private post(url: string, body: any) {
        return new Promise((resolve) => {
            resolve({status: true});
        });
    }
}
