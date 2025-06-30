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
            </div>
        </li>
        `;
        })

    } catch(error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos ${error} </p>`
    } 
}

buscarEMostrarVideos()