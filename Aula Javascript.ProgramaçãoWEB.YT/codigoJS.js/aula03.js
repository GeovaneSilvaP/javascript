//Tipos de Declaração JS

// "var" = Escopo: função (function-scoped) Pode ser redeclarada e reatribuída. É "hoisted" (elevada), mas com valor undefined até a linha em que é definida.

var nome = "Ana";
var nome = "Lucas"; // permitido

// "let" = Escopo: bloco (block-scoped). Pode ser reatribuída, mas não redeclarada no mesmo escopo. Mais segura que var.

let idade = 25;
idade = 26; // ok
// let idade = 30; // erro se no mesmo escopo

//"const" = Escopo: bloco (block-scoped). Não pode ser reatribuída ou redeclarada. Deve ser inicializada ao ser declarada.

const pi = 3.14;
// pi = 3.1415; // erro

