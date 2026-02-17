let totalGeral = 0;
limpar


function adicionar() {
   //recuperar valores nome do produto e quantidade
   let produto = document.getElementById("produto").value;
   let nomeProduto = produto.split('-')[0];
   let valorUnico = produto.split('R$')[1];
   let quantidade = document.getElementById("quantidade").value;
   //calcular o preço, subtotal
   let valor = quantidade * valorUnico;
   let listaCarinho = document.getElementById('lista-produtos');
   //adicionar esse produto ao carrinho
   listaCarinho.innerHTML =  listaCarinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
        </section>`;
   //atualizar o valor total
   totalGeral = totalGeral + valor;
   let valorTotal = document.getElementById('valor-total');
   valorTotal.innerHTML = `R$ ${totalGeral}`
   quantidade = 0;
   document.getElementById("quantidade").value = '';

}



function limpar() {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
   
}