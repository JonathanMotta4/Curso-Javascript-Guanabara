let num = document.querySelector("input#num");
let sel = document.querySelector("select#sel");
let res = document.querySelector("div#res");
let list = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionar() {
  if (isNumber(num.value) && !inList(num.value, list)) {
    list.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    sel.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou já encontrado na lista");
  }
  num.value = "";
  num.focus();
}
function finalizar() {
  if (list.length == 0) {
    alert("Adicione valores antes de finalizar");
  } else {
    let total = list.length;
    let maior = list[0];
    let menor = list[0];
    let soma=0
    let media=0
    for (let i in list) {
      soma+=list[i]
      media=soma/total
      if (list[i] > maior) {
        maior = list[i];
      }
      if (list[i] < menor) {
        menor = list[i];
      }
    }

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo temos ${total} valores cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi:${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi:${menor}.</p>`;
    res.innerHTML += `<p>A soma dos valores informado foi:${soma}.</p>`;
    res.innerHTML += `<p>A media dos valores informado foi:${media}.</p>`;
  }
}
