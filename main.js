

$('form').on('submit', function(event) {
    const novaTarefa = $('#nova-tarefa').val().trim();
    if(novaTarefa === ''){
        event.preventDefault();
        alert('por favor insira uma tarefa')
    } else{
        event.preventDefault()
        const novaLinha = $('<li>').text(novaTarefa);

    const checkBox = $('<input type="checkbox" class="tarefa-checkbox">');
    const botaoExcluir = $('<button class="botao-excluir"><i class="fas fa-trash-alt"</i></button>')

    novaLinha.append(botaoExcluir)
    novaLinha.append(checkBox);
    novaLinha.addClass('tarefa-item');  

    $('ul').append(novaLinha)
    $('#nova-tarefa').val('');

    checkBox.on('change', function(){
        if(this.checked){
            novaLinha.css('text-decoration', 'line-through');
        } else{
            novaLinha.css('text-decoration', 'none');
        }
    })

    botaoExcluir.on('click', function(){
        novaLinha.remove();
    })
    }
    

});