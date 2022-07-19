const financas = {
  saldo: 10,
  transacoes: [
    {
      descricao: 'Salgado na faculdade',
      categoria: 'Despesa',
      valor: 5.5
    },
    {
      descricao: 'Livro Clean Code',
      categoria: 'Despesa',
      valor: 50
    },
    {
      descricao: 'Grana do estágio',
      categoria: 'Receita',
      valor: 80
    },
    {
      descricao: 'Capinha pro celular',
      categoria: 'Despesa',
      valor: 15
    },
  ]
};

function formatarValor(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function exibirFinancas(){
  console.log('saldo: ', formatarValor(financas.saldo));
  financas.transacoes.forEach((transacao, i) => {
    console.log('');

    console.log('Transação', i + 1, ':')
    console.log('[',transacao.categoria,']', transacao.descricao);
    console.log('R$: ', transacao.valor);
  })
}

exibirFinancas()

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

  const valor = Number(valorDespesa);

  const despesa = {
    descricao: descricaoDespesa,
    valor: valor,
    categoria: 'Despesa'
  }

  financas.transacoes.push(despesa)
  financas.saldo = financas.saldo - valor
}
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

  const valor = Number(valorReceita);

  const receita = {
    descricao: descricaoReceita,
    valor: valor,
    categoria: 'Receita'
  }

  financas.transacoes.push(receita)
  financas.saldo = financas.saldo + valor
}