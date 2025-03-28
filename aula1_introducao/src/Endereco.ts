export default class Endereco{
    private _rua : string;
    private _numero : number;
    private _cidade : string;
    private _estado : string;


    constructor(rua: string, numero: number,  cidade: string, estado: string){
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua(){
        return this._rua;
    }

    get numero(){
        return this._numero;
    }


    get cidade(){
        return this._cidade;
    }

    get estado(){
        return this._estado;
    }

    set rua(rua: string){
        this._rua = rua;
    }   
    set numero(numero: number){
        this._numero = numero;
    }
    set cidade(cidade: string){
        this._cidade = cidade;
    }
    set estado(estado: string){
        this._estado = estado;
    }
    
}