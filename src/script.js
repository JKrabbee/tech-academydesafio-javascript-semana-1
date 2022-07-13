function adicionarDespesa() {
  let descricaoDespesa = prompt("Qual a descricao de sua despesa?");
  let valorDespesa = prompt("Qual o valor de sua despesa?");
  Number(valorDespesa);

  if (valorDespesa.includes(",") == true) {
    alert("O padrão de símbolo decimal deve ser um ponto.");
  } else if (isNaN(valorDespesa) == true) {
    alert("Por favor, digite um número válido");
  }
}
function adicionarReceita() {
  let descricaoReceita = prompt("Qual a descricao de sua receita?");
  let valorReceita = prompt("Qual o valor de sua receita?");
  Number(valorReceita);

  if (valorReceita.includes(",") == true) {
    alert("O padrão de símbolo decimal deve ser um ponto.");
  } else if (isNaN(valorReceita) == true) {
    alert("Por favor, digite um número válido");
  }
}

adicionarDespesa();
