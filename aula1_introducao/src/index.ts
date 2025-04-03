import Cliente from './Cliente';
import Endereco from './Endereco';
import Telefone from './Telefone';
import Produto from './Produto';
import Venda from './Venda';


let telefone1 = new Telefone(42, 998963330, 'Celular');
let telefone2 = new Telefone(42, 35562044, 'Residencial');
let endereco1 = new Endereco('Rua Saldanha Marinho', 3796,'Guarapuava', 'PR');
let cliente1 = new Cliente('Ana', '07664879973', 18051979, 'Fem', endereco1)
cliente1.telefones = [telefone1, telefone2];
let produto1 = new Produto(1, 'Coca-Cola', 5.00);
let produto2 = new Produto(2, 'Pepsi', 4.00);
let produto3 = new Produto(3, 'Fanta', 3.00);
let venda = new Venda(1, 23052025, cliente1.nome);
venda.produtos = [produto1, produto2, produto3];
console.log("Cliente: " + cliente1.nome + " - " + cliente1.cpf + " - " + cliente1.dataNasciemnto + " - " + cliente1.sexo + " - " + cliente1.endereco.cidade +" - " + cliente1.endereco.estado +" - " + cliente1.endereco.rua + " - " +cliente1.endereco.numero + " - " + cliente1.telefones[0].ddd + " " + cliente1.telefones[0].numero + " - " + cliente1.telefones[0].tipo + " - " + cliente1.telefones[1].ddd +" " + cliente1.telefones[1].numero +" - " + cliente1.telefones[1].tipo);
console.log("Venda: " + venda.codigo + " - " + venda.data + " - " + venda.cliente + " - " + venda.produtos[0].descricao + " - " + venda.produtos[1].descricao + " - " + venda.produtos[2].descricao +  " - " + venda.calcularTotal());