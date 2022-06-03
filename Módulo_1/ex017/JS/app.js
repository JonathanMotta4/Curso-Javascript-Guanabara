function contar() {
  let i = document.getElementById("txtini");
  let ini = Number(i.value);
  let f = document.getElementById("txtfim");
  let fim = Number(f.value);
  let p = document.getElementById("txtpasso");
  let pass = Number(p.value);
  let res = document.getElementById("res");

  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    res.innerHTML = "Impossivel Contar \u274c";
    alert("[ERRO] Dados Invalidos");
  } else {
      if(pass>=0){
          res.innerHTML="Passo Invalido<br>"
          res.innerHTML+="Considerando Passo=1<br>"
          pass=1
      }
    //Contagem Normal
    if (ini < fim) {
      for (ini; ini <= fim; ini += pass) {
        res.innerHTML += `${ini} \u2795`;
      }
    }
    //Contagem Negativa
    else if (ini > fim) {
      for (ini; ini >= fim; ini -= pass) {
        res.innerHTML += `${ini} \u2796`;
      }
    }
    res.innerHTML += `\u2705`;
  }
}
