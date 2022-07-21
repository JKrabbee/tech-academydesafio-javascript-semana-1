const financas = {
  saldo: 0,
  transacoes: [],
};

function formatarValor(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function exibirFinancas() {
  console.log("saldo: ", formatarValor(financas.saldo));
  financas.transacoes.forEach((transacao, i) => {
    console.log("");

    console.log("Transação", i + 1, ":");
    console.log("[", transacao.categoria, "]", transacao.descricao);
    console.log("R$: ", transacao.valor);
  });
}

function adicionarTransacao() {
  let tabela = "";

  financas.transacoes.forEach((transacao) => {
    let linha = `<tr>
    <td class="coluna-descricao">${transacao.descricao}</td> 
    <td class="coluna-categoria">${transacao.categoria}</td> 
    <td class="coluna-valor">${formatarValor(transacao.valor)}</td>
    </tr>`;
    tabela += linha;
  });
  document.getElementById("lista-transacoes-conteudo").innerHTML = tabela;
}

function exibirSaldo() {
  document.getElementById("saldo").textContent = formatarValor(financas.saldo);
}

document.getElementById("botao-despesa").addEventListener("click", adicionarDespesa);
function adicionarDespesa() {
  let descricaoDespesa = prompt("Qual a descricao de sua despesa?");
  let valorDespesa = prompt("Qual o valor de sua despesa?");
  Number(valorDespesa);

  if (valorDespesa.indexOf(",") > 0) {
    alert("O padrão de símbolo decimal deve ser um ponto.");
  }

  if (isNaN(valorDespesa) == true) {
    alert("Por favor, digite um número válido");
  }

  if (isNaN(valorDespesa) == false && valorDespesa.indexOf(",") < 0) {
    const valor = Number(valorDespesa);

    const despesa = {
      descricao: descricaoDespesa,
      valor: valor,
      categoria: "Despesa",
    };

    financas.transacoes.push(despesa);
    financas.saldo = financas.saldo - valor;
    document.getElementById("saldo").textContent = formatarValor(
      financas.saldo
    );

    adicionarTransacao();
    exibirSaldo();
  }
}
document.getElementById("botao-receita").addEventListener("click", adicionarReceita);

function adicionarReceita() {
  let descricaoReceita = prompt("Qual a descricao de sua receita?");
  let valorReceita = prompt("Qual o valor de sua receita?");
  Number(valorReceita);

  if (valorReceita.indexOf(",") > 0) {
    alert("O padrão de símbolo decimal deve ser um ponto.");
  }
  if (isNaN(valorReceita) == true) {
    alert("Por favor, digite um número válido");
  }

  if (isNaN(valorReceita) == false && valorReceita.indexOf(",") < 0) {
    const valor = Number(valorReceita);
    const receita = {
      descricao: descricaoReceita,
      valor: valor,
      categoria: "Receita",
    };

    financas.transacoes.push(receita);
    financas.saldo = financas.saldo + valor;

    exibirSaldo();
    adicionarTransacao();
  }
}
