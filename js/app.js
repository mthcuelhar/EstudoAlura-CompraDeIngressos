
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista') {
        comprarPista(quantidade);
    }
    else if(tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    }
    else if(tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if((quantidade > qtdPista) || (quantidade <= 0) || isNaN(quantidade)) {
        alert('Quantidade selecionada nao esta disponivel para o tipo de ingresso escolhido');
        document.getElementById('qtd').value = '';
    }
    else {
        alert('Compra realizada com sucesso'); 
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        document.getElementById('qtd').value = '';
    }
}         

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if((quantidade > qtdSuperior) || (quantidade <= 0) || isNaN(quantidade)) {
        alert('Quantidade selecionada nao esta disponivel para o tipo de ingresso escolhido');
        document.getElementById('qtd').value = '';
    }
    else {
        alert('Compra realizada com sucesso'); 
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        document.getElementById('qtd').value = '';
    }
}    

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if((quantidade > qtdInferior) || (quantidade <= 0) || isNaN(quantidade)) {
        alert('Quantidade selecionada nao esta disponivel para o tipo de ingresso escolhido');
        document.getElementById('qtd').value = '';
    }
    else {
        alert('Compra realizada com sucesso'); 
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        document.getElementById('qtd').value = '';
    }
}    
     

