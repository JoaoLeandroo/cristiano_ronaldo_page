const audio = document.querySelector(".audio")
const bntAudio = document.querySelector(".play-btn-pause")
const imgAudio = document.querySelector(".imgAudio")

//Início Function Play and Pause
bntAudio.addEventListener("click", () => {
    if(audio.paused) {
        audio.play()
        bntAudio.classList.add("playing")
        imgAudio.setAttribute("src", './src/assets/btt-pause.png')
    } else {
        audio.pause()
        bntAudio.classList.remove("playing")
        imgAudio.setAttribute("src", './src/assets/botao-de-jogo.png')     
    }    

})
// Fim Funcion Play and Pause

// Inicio function alterar butões e Imagens de Fundo
const botoes = document.querySelectorAll(".buttons")
const imagens = document.querySelectorAll(".imagem")

botoes.forEach((btt, posi) => {
    
    btt.addEventListener("click", () => {
        alterarBotao(btt)

        alterarImagemFundo(posi)
     
    })
})

function alterarImagemFundo(posi) {
    const imgAtiva = document.querySelector(".imagemAtiva")
    imgAtiva.classList.remove('imagemAtiva')
    imagens[posi].classList.add("imagemAtiva")
}

function alterarBotao(btt) {
    const botaoAtivo = document.querySelector(".bttAtivo")
    botaoAtivo.classList.remove("bttAtivo")
    btt.classList.add("bttAtivo")
}
// Fim function Alterar botoes e Imagens de fundo

// Inicio Funcion Alterar Texto da pagina
const informacoes = document.querySelector(".informacoes")
const bttInformacoes = document.querySelectorAll(".buttons")
const logo = document.querySelector(".logo")

const titulos = {
    titulo0: 'Cristiano Ronaldo',
    titulo1: 'Sporting',
    titulo2: 'Manchester United',
    titulo3: 'Real Madrid',
    titulo4: 'Juventus',
    titulo5: 'Al-Nassr'
}
const texto = {
    portugal: 'Cristiano Ronaldo é considerado o maior jogador da história de Portugal, além de conquistar titulos inéditos por sua seleção como a Euro em 2016 e a Nations league na tempora 18-19, ele também é o maior Artilheiro da História do futebol de seleções com 118 Gols marcados.',
    sporting: 'O sporting foi o clube onde Cristiano deu seus primeiros passos no futebol, pelo sporting Cristiano fez um total de de 31 jogos e marcou um total de 5 gols.',      
    united: 'Pelo Manchester United, Cristiano se tornou uma lenda dos Red Devils, Lá ele foi um dos protagonistas na conquista da Champions League de 2008, nessa mesma temporada Cristiano conquistou sua primeira bola de ouro.',
    realMadrid: 'Pelo Real Madrid Cristiano atingiu o seu auge, se tornando uma verdadeira maquina letal, fez incriveis 450 gols em 438 jogos pelo clube, se tornando o maior artilheiro da história do Real Madrid e conquistando incríveis 4 bolas de ouros e se tornando o Rei da Champions League.',
    juventus: 'Sua passagem pela Juventus é bastante subestimada no entando, Cristiano possui números absurdos atuando pelo clube, fez um total de 134 partidas e marcou incríveis 101 gols, se tornando o maior artilheiro da decada da Juventus mesmo tendo atuado apenas 3 anos pelo clube.',
    nassr: 'Atualmente Cristiano Ronaldo está jogando pelo Al-Nassr da Arábia Saudita, ao se transferir para o clube Saudita Cristiano já chegou quebrando recordes, pelo Al-Nassr Cristiano está recebendo o maior salário da história do Futebol mundial.'
}

bttInformacoes.forEach((botao, posi) => {
    botao.addEventListener("click", () => {
        if(posi == 1) {
            informacoes.innerHTML = texto.sporting
            logo.innerHTML = titulos.titulo1
        }else if(posi == 2) {
            informacoes.innerHTML = texto.united
            logo.innerHTML = titulos.titulo2
        }else if(posi == 3){
            informacoes.innerHTML = texto.realMadrid
            logo.innerHTML = titulos.titulo3
        }else if(posi == 4){
            informacoes.innerHTML = texto.juventus
            logo.innerHTML = titulos.titulo4
        }else if(posi == 5){
            informacoes.innerHTML = texto.nassr
            logo.innerHTML = titulos.titulo5
        }else{
            informacoes.innerHTML = texto.portugal
            logo.innerHTML = titulos.titulo0
        }
    })
})
// Fim function alterar texto da pagina


