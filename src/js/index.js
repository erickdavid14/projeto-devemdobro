/* 
OBJETIVO - quando clicar no ninja da listagem temos que esconder o cartao do ninja aberto e mostrar o cartao correspondente ao que foi selecionado da listagem
    PASSO 1 - precisamos criar uma variavel no JS pra trabalhar com a listagem de ninjas
    PASSO 2 - identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto so do cartao que ta aberto
    PASSO 4 - ao clicar em um ninja da listagem pegamos o id desse ninja pra saber qual cartao abrir
    PASSO 5 - remover a classe ativo que marca o ninja selecionado na listagem
    PASSO 6 - adicionar a classe ativo no ninja selecionado na listagem
*/

// PASSO 1 - precisamos criar uma variavel no JS pra trabalhar
const listaSelecaoNinjas = document.querySelectorAll('.ninja');

// PASSO 2 - identificar o evento de clique no elemento da listagem
listaSelecaoNinjas.forEach(ninja => {
    ninja.addEventListener('click', () =>{
    //PASSO 3 - remover a classe aberto so do cartao que ta aberto
        const ninjaAberto = document.querySelector('.aberto');
        ninjaAberto.classList.remove('aberto');
        
    //PASSO 4 - ao clicar em um ninja da listagem pegamos o id desse ninja pra saber qual cartao abrir
        const idNinjaSelecionado = ninja.attributes.id.value;
        const idDoCartaoNinjaParaAbrir = 'cartao-' + idNinjaSelecionado;
        const cartaoNinjaParaAbrir = document.getElementById(idDoCartaoNinjaParaAbrir);
        cartaoNinjaParaAbrir.classList.add('aberto');
     //PASSO 5 - remover a classe ativo que marca o ninja selecionado na listagem
         const ninjaAtivoNaListagem = document.querySelector(".ativo");
        ninjaAtivoNaListagem.classList.remove("ativo");
    //PASSO 6 - adicionar a classe ativo no ninja selecionado na listagem
        const ninjaSelecionadoNaListagem = document.getElementById(idNinjaSelecionado);
        ninjaSelecionadoNaListagem.classList.add("ativo");
    })
    
});


