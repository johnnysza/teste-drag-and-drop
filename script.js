// Determinando a tag e class que serão selecionadas
const wrapper = document.querySelector(".wrapper"),
  header = wrapper.querySelector("header");

function onDrag({ movementX, movementY }) {
  // Pegando os valores do HTML e propriedades CSS da class selecionada
  let getStyle = window.getComputedStyle(wrapper);

  // Pega os valores das posiçoes left e top da div, transformando-os em inteiros.
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);

  // Lê os inteiros equivalentes a posição da div.
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}

// Evento é acionado clicando com o botão esquerdo.
header.addEventListener("mousedown", () => {
  header.classList.add("active");

  // Div movimentada no clique.
  header.addEventListener("mousemove", onDrag);
});

// Evento é acionado soltando o botão esquerdo.
document.addEventListener("mouseup", () => {
  header.classList.remove("active");

  // Interrompe a movimentação da div.
  header.removeEventListener("mousemove", onDrag);
});
