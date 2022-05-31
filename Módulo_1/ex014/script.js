function carregar() {
  var data = new Date();
  var hora = data.getHours();
  var corpo = window.document.body;
  var txt = document.getElementById("txt");
  var img = document.getElementById("img");
  txt.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 6 && hora <= 12) {
    img.src = "./imagens/dia.jpg";
    corpo.style.background = "#e2cd9f";
  } else if (hora > 12 && hora <= 18) {
    img.src = "./imagens/tarde.jpg";
    corpo.style.background = "#b9846f";
  } else if (hora > 18 || hora < 6) {
    img.src = "./imagens/noite.jpg";
    corpo.style.background = "#515154";
  }
}
