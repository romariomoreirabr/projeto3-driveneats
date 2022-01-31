let prato = null;
let bebida = null;
let sobremesa = null;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let texto = " ";
let mensagem = " ";
let linkWhatsapp = " ";
let nome = " ";
let endereco = " ";
let check = null;
let checkRem = null;

function selecionarPrato (classeOpcao, nomePrato, valor){
    deselecionarPrato();
    classeOpcao.classList.add("opcaoSelecionada");
    prato = nomePrato;
    valorPrato = parseFloat(valor);
    HabilitarFecharPedido ();
    
    let classePrecoClass = classeOpcao.children[3];
    check = classePrecoClass.children[1];
    if (check !== null){
        check.classList.remove("escondido");
    }
}

function deselecionarPrato (){
    const pratoSelecionado = document.querySelector(".prato .opcaoSelecionada");
    if (pratoSelecionado !== null){
        pratoSelecionado.classList.remove("opcaoSelecionada");

        let classePrecoClass = pratoSelecionado.children[3];
        checkRem = classePrecoClass.children[1];
        checkRem.classList.add("escondido");
    }
}

function selecionarBebida (classeOpcao, nomeBebida, valor){
    deselecionarBebida();
    classeOpcao.classList.add("opcaoSelecionada");
    bebida = nomeBebida;
    valorBebida = parseFloat(valor);
    HabilitarFecharPedido();

    let classePrecoClass = classeOpcao.children[3];
    check = classePrecoClass.children[1];
    if (check !== null){
        check.classList.remove("escondido");
    }
}

function deselecionarBebida (){
    const bebidaSelecionada = document.querySelector(".bebida .opcaoSelecionada");
    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("opcaoSelecionada");

        let classePrecoClass = bebidaSelecionada.children[3];
        checkRem = classePrecoClass.children[1];
        checkRem.classList.add("escondido");
    }
}

function selecionarSobremesa (classeOpcao, nomeSobremesa, valor){
    deselecionarSobremesa();
    classeOpcao.classList.add("opcaoSelecionada");
    sobremesa = nomeSobremesa;
    valorSobremesa = parseFloat(valor);
    HabilitarFecharPedido();

    let classePrecoClass = classeOpcao.children[3];
    check = classePrecoClass.children[1];
    if (check !== null){
        check.classList.remove("escondido");
    }
}

function deselecionarSobremesa (){
    const sobremesaSelecionada = document.querySelector(".sobremesa .opcaoSelecionada");
    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("opcaoSelecionada");

        let classePrecoClass = sobremesaSelecionada.children[3];
        checkRem = classePrecoClass.children[1];
        checkRem.classList.add("escondido");
    }
}

function HabilitarFecharPedido () {
    if ((prato !== null)&& (bebida !== null)&& (sobremesa !== null)){
        const botaoFecharPedido = document.querySelector(".botaoPadrao");
        botaoFecharPedido.classList.add("escondido");
        const classeBotaoFecharPedido = document.querySelector(".botaoFecharPedido");
        classeBotaoFecharPedido.classList.remove("escondido");
        classeBotaoFecharPedido.classList.add("fecharPedido");
    }
}

function confirmarPedido () {
    nome =  prompt ("Insira seu nome: ");
    endereco = prompt ("Insira seu endereço: ");
    fecharPedido();
 }

function fecharPedido () {
    total = valorPrato + valorBebida + valorSobremesa;
    //let totalString = total.toFixed(2).toString();
    texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + " \n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + total.toFixed(2) + "\n\nNome: " + nome + "\nEndereço: " + endereco;
    mensagem = encodeURIComponent(texto);
    linkWhatsapp = "https://wa.me/5538999455500?text="+mensagem;
    window.open(linkWhatsapp);
}

