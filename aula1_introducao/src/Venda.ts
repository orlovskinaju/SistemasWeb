import Produto from "./Produto";
export default class Venda{
    private _codigo : number;
    private _data : number;
    private _cliente : string;
    private _produtos : Produto[]=[];

    constructor(codigo: number, data: number, cliente: string){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
    }
    get codigo(){     
        return this._codigo;
    } 
    get data(){
        return this._data;
    }
    get cliente(){
        return this._cliente;
    }
    set codigo(codigo: number){
        this._codigo = codigo;
    }
    set
    data(data: number){
        this._data = data;
    }
    set cliente(cliente: string){
        this._cliente = cliente;
    }
    get produtos(){
        return this._produtos;
    }
    set produtos(produtos: Produto[]){
        this._produtos = produtos;
    }
    


    calcularTotal(): number{
        let total = 0;
        for (let i=0; i<this._produtos.length; i++){
            total += this._produtos[i].valor;
        }
        return total;
    }
}