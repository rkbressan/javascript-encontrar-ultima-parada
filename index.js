function ultimaParada(combustivel, consumo, postosDeGasolina) {
  let quantidadeDeKmARodar = consumo * combustivel;

  let postoParaAbastecer = 0;
  for (let i = 0; i < postosDeGasolina.length; i++) {
    if (
      quantidadeDeKmARodar >= postosDeGasolina[i] &&
      postoParaAbastecer <= postosDeGasolina[i]
    ) {
      postoParaAbastecer = postosDeGasolina[i];
    }
  }

  if (postoParaAbastecer === 0) {
    return -1;
  }
  return postoParaAbastecer;
}