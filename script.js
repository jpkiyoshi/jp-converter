const fullPrice = (preco, qtd) => {
  return (preco * 1000) / qtd;
};

const form = document.querySelector('.form');

const result = document.getElementById('result');

form.addEventListener('submit', e => {
  e.preventDefault();

  const preco = e.target[0].value.replace(',', '.');
  const qtd = e.target[1].value.replace(',', '.');

  const total = fullPrice(Number(preco), Number(qtd)).toFixed(2);

  result.value = isNaN(total) ? 'Valor inválido!' : `R$${total}`;
});
