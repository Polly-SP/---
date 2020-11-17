export class Buy {
    public id: number;
    public name: string;
    public kolvo: number;
    public status: number;

    constructor(name:string,kolvo:number,status:number, id?:number){
        this.id = id;
        this.name = name;
        this.kolvo = kolvo;
        this.status = status;
    }
}


 