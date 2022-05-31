function verificar() {
  var data = new Date();
  var ano_atual = data.getFullYear();
  var txtano =document.getElementById('ano');
  var ano=Number(txtano.value)
  var idade = ano_atual - ano;
  var sexo = document.getElementsByName("radsexo");
  var d_img = document.querySelector("div#img");
  var img=document.createElement('img')
  var genero = '';
  if (txtano.value.length == 0 || ano > ano_atual) {
    alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    if (sexo[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade <= 5) {
        img.setAttribute('src','./imagens/bb.png')
        
      } else if (idade > 5 && idade <= 15) {
        img.setAttribute('src','./imagens/h-15.png')

      } else if (idade > 15 && idade <= 25) {
        img.setAttribute('src','./imagens/h-20.png')

      } else if (idade > 25 && idade <= 35) {
        img.setAttribute('src','./imagens/h-30.png')

      } else if (idade > 35 && idade <= 45) {
        img.setAttribute('src','./imagens/h-40.png')

      } else if (idade > 45 && idade <= 55) {
        img.setAttribute('src','./imagens/h-50.png')

      } else if (idade > 55 && idade <= 65) {
        img.setAttribute('src','./imagens/h-60.png')

      } else if (idade > 65) {
        img.setAttribute('src','./imagens/h-70.png')

      } 
    } else if (sexo[1].checked) {
      genero = "Feminino";
      if (idade >= 0 && idade <= 5) {
        d_img.innerHTML="<img src='./imagens/bb.png' alt=''> "
      } else if (idade > 5 && idade <= 15) {
        img.setAttribute('src','./imagens/m-15.png')

      } else if (idade > 15 && idade <= 25) {
        img.setAttribute('src','./imagens/m-20.png')

      } else if (idade > 25 && idade <= 35) {
        img.setAttribute('src','./imagens/m-30.png')

      } else if (idade > 35 && idade <= 55) {
        img.setAttribute('src','./imagens/m-50.png')

      }
       else if (idade > 55 && idade <= 65) {
        img.setAttribute('src','./imagens/m-60.png')

      } else if (idade > 65) {
        img.setAttribute('src','./imagens/m-70.png')

      } 
    }
    d_img.appendChild(img)
    var res=document.getElementById("res")
    res.innerText=`Detectamos o sexo ${genero} com ${idade} anos.`
  }
}
