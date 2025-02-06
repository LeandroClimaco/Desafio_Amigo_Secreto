Sorteio de Amigo Secreto Alura
----------------------------------------------
Prática de lógica de programação através deste desafio de um aplicativo de sorteio de amigo secreto

🚀 Funcionalidades
Sorteio de amigo secreto
Função para garantir que a pessoa não retire seu próprio nome como amigo secreto
Função otimizada de embaralhamento da lista de pessoas
🛠 Tecnologia aplicada
Javascript, HTML, CSS...
🕹 Uso/Exemplos
Função de embaralhamento de array
function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

Função de sorteio
function sortear() {
  elemListaSorteio.innerHTML = "";

  embaralhaArray(amigos);
  for (i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}
Autores
@LeandroClimaco
