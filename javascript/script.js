function selecionarPrato(opcao) {
  const pratoSelecionado = document.querySelector(".pratos .selecionado");
  const checkSelecionado = opcao.querySelector(".checkmark");
  const checkedPrato = document.querySelector(
    ".pratos .selecionado .checkmark"
  );

  if (
    pratoSelecionado !== null &&
    pratoSelecionado !== opcao &&
    checkedPrato !== null
  ) {
    pratoSelecionado.classList.remove("selecionado");
    checkedPrato.classList.add("check");
  }
  opcao.classList.add("selecionado");
  checkSelecionado.classList.remove("check");
  botaoPedido();
}

function selecionarBebida(opcao) {
  const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
  const checkSelecionado = opcao.querySelector(".checkmark");
  const checkedBebida = document.querySelector(
    ".bebidas .selecionado .checkmark"
  );

  if (
    bebidaSelecionada != null &&
    bebidaSelecionada !== opcao &&
    checkedBebida !== null
  ) {
    bebidaSelecionada.classList.remove("selecionado");
    checkedBebida.classList.add("check");
  }
  opcao.classList.add("selecionado");
  checkSelecionado.classList.remove("check");
  botaoPedido();
}

function selecionarSobremesa(opcao) {
  const sobremesaSelecionada = document.querySelector(
    ".sobremesas .selecionado"
  );
  const checkSelecionado = opcao.querySelector(".checkmark");
  const checkedSobremesa = document.querySelector(
    ".sobremesas .selecionado .checkmark"
  );

  if (
    sobremesaSelecionada !== null &&
    sobremesaSelecionada !== opcao &&
    sobremesaSelecionada !== checkedSobremesa
  ) {
    sobremesaSelecionada.classList.remove("selecionado");
    checkedSobremesa.classList.add("check");
  }
  opcao.classList.add("selecionado");
  checkSelecionado.classList.remove("check");
  botaoPedido();
}
function botaoPedido() {
  const sobremesaSelecionada = document.querySelector(
    ".sobremesas .selecionado"
  );
  const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
  const pratoSelecionado = document.querySelector(".pratos .selecionado");
  const botaoFinal = document.querySelector(".rodape-fixo");
  if (
    sobremesaSelecionada !== null &&
    bebidaSelecionada !== null &&
    pratoSelecionado !== null
  ) {
    botaoFinal.classList.add("botao-clicado");
    botaoFinal.innerHTML = "Fechar Pedido";
  }
}
let url = null;
function fecharPedido(botaoFinal) {
  if (botaoFinal.classList.contains("botao-clicado")) {
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("Qual o seu endereço?");
    const comidaPedida = document.querySelector(".pratos .selecionado h3")
      .innerText;
    const bebidaPedida = document.querySelector(".bebidas .selecionado h3")
      .innerText;
    const sobremesaPedida = document.querySelector(
      ".sobremesas .selecionado h3"
    ).innerText;

    let valorPrato = parseFloat(
      document
        .querySelector(".pratos .selecionado .preco")
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
    let valorBebida = parseFloat(
      document
        .querySelector(".bebidas .selecionado .preco")
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
    let valorSobremesa = parseFloat(
      document
        .querySelector(".sobremesas .selecionado .preco")
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
    let total = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
    const myString = `Olá, gostaria de fazer o pedido:
       - Prato: ${comidaPedida}
       - Bebida: ${bebidaPedida}
       - Sobremesa: ${sobremesaPedida}
       Total: R$ ${total}\n
       Nome: ${nome}
       Endereço: ${endereco}`;
    url = "https://wa.me/5561981072424?text=" + encodeURIComponent(myString);

    const comidaConfirmacao = document.querySelector(".comida-confirmacao");
    comidaConfirmacao.innerHTML = comidaPedida;

    const precoComida = document.querySelector(".preco-comida");
    precoComida.innerHTML = "R$ " + valorPrato.toFixed(2).replace(".", ",");

    const bebidaConfirmacao = document.querySelector(".bebida-confirmacao");
    bebidaConfirmacao.innerHTML = bebidaPedida;

    const precoBebida = document.querySelector(".preco-bebida");
    precoBebida.innerHTML = "R$ " + valorBebida.toFixed(2).replace(".", ",");
    const sobremesaConfirmacao = document.querySelector(
      ".sobremesa-confirmacao"
    );
    sobremesaConfirmacao.innerHTML = sobremesaPedida;
    const precoSobremesa = document.querySelector(".preco-sobremesa");
    precoSobremesa.innerHTML =
      "R$ " + valorSobremesa.toFixed(2).replace(".", ",");
    const popUp = document.querySelector(".fundo-esmaecido");
    popUp.classList.remove("display-none");
    const valorTotal = document.querySelector(".valor-total");
    valorTotal.innerHTML = "R$ " + total.replace(".", ",");
    if (!popUp.classList.contains("display-none")) {
      botaoFinal.classList.add("display-none");
    }
  }
}
function confirmacaoFinal() {
  open(url);
}
function fecharFinal() {
  const popUp = document.querySelector(".fundo-esmaecido");
  popUp.classList.add("display-none");
  const botaoFinal = document.querySelector(".rodape-fixo");
  botaoFinal.classList.remove("display-none");
}
