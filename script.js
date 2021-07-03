const formulario = document.getElementById("formulario");
const btn = document.querySelector(".btn");
const textCss = document.querySelector(".codigo");

formulario.addEventListener("change", resultados);

const botao = {
  element: btn,
  texto(value) {
    this.element.innerText = `${value}`;
  },
  color(value) {
    this.element.style.color = `${value}`;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = `${value}`;
  },
  height(value) {
    this.element.style.height = `${value}px`;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  border(value) {
    this.element.style.border = `${value}`;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = `${value}`;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`;
  },
  boxShadow(value) {
    this.element.style.boxShadow = `${value}`;
  },
};

function resultados(event) {
  botao[event.target.name](event.target.value);
  mostrarTexto();
  setItem(event);
}

function mostrarTexto() {
  textCss.innerHTML = `<span>${btn.style.cssText
    .split("; ")
    .join("</span><span>")}`;
}

function setItem(event) {
  localStorage.setItem(event.target.name, event.target.value);
}

function getItem() {
  const chaves = Object.keys(localStorage);
  chaves.forEach((item) => {
    botao[item](localStorage.getItem(item));
    formulario.elements[item].value = localStorage.getItem(item);
  });
  mostrarTexto();
}

getItem();
