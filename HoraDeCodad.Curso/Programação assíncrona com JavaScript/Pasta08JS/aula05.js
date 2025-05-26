function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve("Número é maior que 10");
    } else {
      reject(new Error("Número muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`))
 .catch((err) => console.log(`Um erro ocorreu: ${err.message}`));

b.then((v) => console.log(`O resultado é ${v}`))
 .catch((err) => console.log(`Um erro ocorreu: ${err.message}`));
