//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

    // Lista de amigos (inicialmente vazia)
    let amigos = [];

    // Função para adicionar amigos à lista
    function adicionarAmigo() {
        const nomeAmigo = document.getElementById('amigo').value.trim();
        
        if (nomeAmigo !== "") {
            amigos.push(nomeAmigo);
            atualizarListaAmigos();
            document.getElementById('amigo').value = "";  // Limpa o campo de input
        } else {
            alert("Por favor, insira um nome válido.");
        }
    }

    // Função para atualizar a lista de amigos na tela
    function atualizarListaAmigos() {
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    // Função para embaralhar o array de amigos
    function embaralhaArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos
        }
    }

    // Função para realizar o sorteio (1 amigo)
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
            return;
        }

        embaralhaArray(amigos);

        const sorteado = amigos[0]; // Sorteia apenas o primeiro amigo após o embaralhamento
        const resultado = `${sorteado} foi sorteado para o amigo secreto!`;

        // Exibe o resultado do sorteio
        document.getElementById('resultado').innerHTML = resultado;
    }