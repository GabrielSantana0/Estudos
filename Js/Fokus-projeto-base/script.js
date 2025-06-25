const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3') 
const iniciarTempo = new Audio('/sons/play.wav') 
const PausarTempo = new Audio('/sons/pause.mp3') 
const AcabouTempo = new Audio('/sons/beep.mp3') 
const Pausar = new Image('/imagens/pause.png')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const TempoNaTela = document.querySelector('.app__card-timer')
musica.loop = true


let tempoDecorridoEmSegundos = 1500
let intervaloId = null


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
}) 

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-curto')
    // banner.setAttribute('src', '/imagens/descanso-curto.png')
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
}) 

longoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src', '/imagens/descanso-longo.png')
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            </h1>`

            break;
        case 'descanso-curto':
        titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta! </strong>` 

        break;
        case 'descanso-longo':
        titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa. </strong>`
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        AcabouTempo.play()
        alert('Tempo Finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        PausarTempo.play()
        zerar()
        startPauseBt.innerHTML = `<img src="/imagens/play_arrow.png" alt="Play" /> Começar`;
        return
    }
    iniciarTempo.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    startPauseBt.innerHTML = `<img src="imagens/pause.png" alt="Pause" /> Pausar`;
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    TempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()
