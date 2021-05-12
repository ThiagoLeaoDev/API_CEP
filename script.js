import ConsultaCep from "./consulta.js";


let btn = document.querySelector("#button-cep");
let cep = document.querySelector("#input-cep");
let lblRua = document.querySelector("#rua");
let lblBairro = document.querySelector("#bairro");
let lblCidade = document.querySelector("#cidade");
let lblEstado = document.querySelector("#estado");
let lblCep = document.querySelector("#cep");
let map = document.querySelector("#container-map")
let resultado = document.querySelector(".container-response");
// let naoencontrado = document.querySelector("#naoencontrado")

btn.addEventListener("click", buscaCep);

mostraResultado(false);

function mostraResultado(icMostra){
  resultado.style.visibility = icMostra ? "visible" : "hidden"
  // naoencontrado.style.visibility = !icMostra ? "visible" : "hidden"
}

function cepOK(busca){
  lblRua.innerHTML = `Rua: ${busca.logradouro}`;
  lblBairro.innerHTML = `Bairro: ${busca.bairro}`;
  lblCidade.innerHTML = `Cidade: ${busca.localidade}`;
  lblEstado.innerHTML = `Estado: ${busca.uf}`;
  lblCep.innerHTML = `Cep: ${busca.cep}`;

  map.innerHTML =
  `<iframe
    width="100%"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=pt-br&amp;q=(Cep%20${busca.cep})&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
  </iframe>
  `
  mostraResultado(true);
  console.log(busca)
}

function cepErro(erro){
  console.log(erro)
  mostraResultado(false);
}


function buscaCep(){
  let busca = new ConsultaCep();
  busca.buscaCep(cep.value, cepOK, cepErro);
}