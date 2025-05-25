//Utilizando o finally

try {
  // Código que pode causar um erro
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (erro) {
  // Tratamento de erro
  console.error("Ocorreu um erro:", erro.message);
} finally {
  // Sempre executado
  console.log("Operação finalizada.");
}