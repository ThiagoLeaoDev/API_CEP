class ConsultaCep{
  constructor(){
    // this.endereco = {
    //   cep: "01001-000",
    //   logradouro: "Praça da Sé",
    //   complemento: "lado ímpar",
    //   bairro: "Sé",
    //   localidade: "São Paulo",
    //   uf: "SP",
    //   ibge: "3550308",
    //   gia: "1004",
    //   ddd: "11",
    //   siafi: "7107"
    // }
    // this.icEncontrado = false;
  }

  buscaCep(cep, sucesso, falha){//cep vem como parametro
    const url = `https://viacep.com.br/ws/${cep}/json/`//url com cep inserido dinamicamente
    fetch(url) //passa o link (url) como parametro para o fetch
      .then(function(resp){ //a resposta do fetch é passada como parametro da função 
        return resp.json(); //e depois convertida em json
      })
      .then( //caso essa resposta seja positiva 
        function(dados){ //os dados são passados como parametro para a função
          sucesso(dados); //que chama a função sucesso (com os dados novamente como parametro)
        })
      .catch( //caso essa resposta seja negativa 
        function(erro){ //os dados são passados como parametro para a função (erro)
        falha(erro) //que chama a função falha (com os dados (erro) novamente como parametro)
      })
  }
}

export default ConsultaCep