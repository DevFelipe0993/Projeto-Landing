/* 
1 -Quando clicar na seta pra avançar temos que esconder todas as imagens e mortrar a próxima imagem.

2 - A imagem atual começa com 0 pq é a primeira imagem, assim que for clocado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem.

3 - Esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe '.mostrar'.

4 - Mostrar a próxima imagem, pegar todas as imagens, descobrir qual é a próxima, e colocar a classe '.mostrar' nela.

*/

/* 1 -Quando clicar na seta pra avançar temos que esconder todas as imagens e mortrar a próxima imagem. */
const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvacar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;

setaAvacar.addEventListener('click', function() {
    // testa se o contador de imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        return;
    }
   /* 2 - A imagem atual começa com 0 pq é a primeira imagem, assim que for clocado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem.*/
    imagemAtual++;

    /* 3 - Esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe '.mostrar'.  */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

   /* 4 - Mostrar a próxima imagem, pegar todas as imagens, descobrir qual é a próxima, e colocar a classe '.mostrar' nela. */
    imagensPainel[imagemAtual].classList.add('mostrar')   
})

/* 1 -Quando clicar na seta pra voltar temos que esconder todas as imagens e mortrar a imagem anterior. */
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return
    }
    imagemAtual--

    /* 3 - Esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe '.mostrar'.  */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

       /* 4 - Mostrar a imagem anterior, pegar todas as imagens, descobrir qual é a anterior, e colocar a classe '.mostrar' nela. */
       imagensPainel[imagemAtual].classList.add('mostrar')   
})
