import Endereco from './Endereco';
import Telefone from './Telefone';
export default class Cliente{
    private _nome : string;
    private _cpf : string;
    private _dataNasciemnto : number;
    private _sexo : string;
    private _endereco: Endereco;
    private _telefones: Telefone[]=[];

    constructor(nome: string, cpf: string, dataNasciemnto: number, sexo: string, endereco: Endereco){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNasciemnto = dataNasciemnto;
        this._sexo = sexo;
        this._endereco = endereco;
    }


    get nome(){
        return this._nome;
    }
    get cpf(){      
        return this._cpf;
    }
    get dataNasciemnto(){
        return this._dataNasciemnto;
    }
    get sexo(){
        return this._sexo;
    }
    get endereco(){
        return this._endereco;
    }
    get telefones(){
        return this._telefones;
    }
    set telefones(telefones: Telefone[]){   
        this._telefones = telefones
    }
    set nome(nome: string){
        this._nome = nome;
    }
    set cpf(cpf: string){
        this._cpf = cpf;
    }
    set dataNasciemnto(dataNasciemnto: number){
        this._dataNasciemnto = dataNasciemnto;
    }
    set sexo(sexo: string){
        this._sexo = sexo;
    }
    set endereco(endereco: Endereco){
        this._endereco = endereco;
    }


}
