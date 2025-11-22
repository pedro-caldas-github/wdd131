const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() { // ✅ Adicionei evento de clique
    if (input.value.trim() !== '') { // ✅ Verifica se não está vazio
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        deleteButton.addEventListener('click', function() { // ✅ Evento para deletar
            list.removeChild(li);
        });
        
        li.append(deleteButton);
        list.append(li);
        
        input.value = ''; // ✅ Limpa o input
        input.focus(); // ✅ Foca no input para próxima entrada
    }
});