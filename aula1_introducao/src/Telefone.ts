export default class Telefone{
    private _ddd : number;
    private _numero : number;
    private _tipo : string;

    constructor(ddd: number, numero: number, tipo: string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd(){
        return this._ddd;
    }

    get numero(){
        return this._numero;
    }

    get tipo(){
        return this._tipo;
    }
    set ddd(ddd: number){        
        this._ddd = ddd;
    }
    set numero(numero: number){
        this._numero = numero;
    }
    set tipo(tipo: string){
        this._tipo = tipo;
    }
}
