function tabuada() {
  let n = document.getElementById("num");
  let num = Number(n.value);
  let sel=document.getElementById('sel')
  if (n.value.length == 0) {
    alert("Digite um Numero valido");
  } else {
    sel.innerHTML=''
    for(let i=0;i<=10;i++){
      let item=document.createElement('option')
      item.text=`${num} x ${i} = ${num*i}`
      item.value=`tab${i}`
      sel.appendChild(item)
    }
   
  }
}