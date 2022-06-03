let pessoa = {
  nome: "Jonathan",
  altura: 1.83,
  peso: 90.7,
  engordar(p) {
    console.log("Engordou");
    this.peso += p;
  },
};
pessoa.engordar(5);
console.log(`${pessoa.nome} mede ${pessoa.altura}m pesa ${pessoa.peso}kg`);
