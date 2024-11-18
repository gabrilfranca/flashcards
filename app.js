 function criaCartao(categoria, pergunta,  resposta){
    let container = document.getElementById('contaiiner')
    let cartao = document.createElement('article')

      
    cartao.innerHTML = `
    <div> ciass=cartao__conteudo">
            <h3>progamação</h3>
            <div class="cartao__conteudo__pergunta">
                <p>O que é CSS?</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>O CSS é uma linguagem de estilização.</p>
            </div>
        </div> 
         `
         container.appendChild(cartao)
            
 }
