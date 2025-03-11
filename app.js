//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let aux = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;

  if (nome == "") {
    alert("Introduza um nome valido!!");
  } else {
    verificaCampoInput(nome);
  }
}

function verificaCampoInput(amigo) {
  if (nomes.length == 0) {
    nomes.push(amigo);
    exibirAmigos();
  } else if (verificaNomeDuplicado(amigo) == true) {
    alert("O nome introduzido ja existe!!");
  } else {
    nomes.push(amigo);
    limpaTela();
    exibirAmigos();
  }
  limpaCampo();
}

function verificaNomeDuplicado(texto) {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] == texto) {
      return true;
    }
  }
}

function exibirAmigos() {
  let list = document.getElementById("listaAmigos");

  for (let i = 0; i < nomes.length; i++) {
    let li = document.createElement("li");
    li.textContent = nomes[i];
    list.appendChild(li);
  }
}

function limpaTela() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";
}

function limpaCampo() {
  let campoInput = document.querySelector("input");
  campoInput.value = "";
}

function sortearAmigo() {
  let indiceAleatorio = 0;
  let resultado = document.getElementById("resultado");

  if (nomes.length == 0) {
    alert("Não é possível sortear um amigo pois não existe nenhum disponível!");
  } else {
    indiceAleatorio = parseInt(Math.random() * nomes.length);
    let mensagem = `O amigo sorteado é: ${nomes[indiceAleatorio]}`;
    resultado.innerHTML = mensagem;
  }
}
