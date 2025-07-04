const containerVideos = document.querySelector('.videos__container')


async function buscarEMostrarVideos() {
    try {


        const busca = await fetch('http://localhost:3000/videos')
        const videos = await busca.json();


        videos.forEach((videos) => {
            if(videos.categoria == '') {
                throw new error('Vídeo não tem categoria')
            }
            containerVideos.innerHTML += `
        <li class='videos__item'>
            <iframe src='${videos.url}' title='${videos.titulo}' frameborder='0' allowfullscreen></iframe>
            <div class='descricao-video'>
                <img class='img-canal' src='${videos.imagem}' alt='Logo do Canal'>
                <h3 class='titulo-video'> ${videos.titulo}'  </h3>
                <p class='titulo-canal'>${videos.descricao}'</p>
                <p class='categoria' hidden>${videos.categoria}'</p>
            </div>
        </li>
        `;
        })

    } catch(error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos ${error} </p>`
    } 
}

buscarEMostrarVideos()

const barraDePesquisa = document.querySelector('.pesquisar__input')

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
        const videos = document.querySelectorAll(".videos__item");

        if (barraDePesquisa.value != "") {
            for (let video of videos) {
                let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
                let valorFiltro = barraDePesquisa.value.toLowerCase();

                if (!titulo.includes(valorFiltro)) {
                    video.style.display = "none";
                } else {
                    video.style.display = "block";
                }
            }
        } else {
            for (let video of videos) {
                video.style.display = "block";
            }
        }
    }


const botaoCategoria = document.querySelectorAll('.superior__item')

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute('name')
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item');
    for(let video of videos) {
        let categoria = video.querySelector('.categoria').textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        // se a categoria não inclui o valor do filtro colocamos = !
        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
            video.style.display = 'none';
        } else {
            video.style.display = 'block ';
        }
    }
}