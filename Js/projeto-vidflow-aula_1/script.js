const containerVideos = document.querySelector('.videos__container')


async function buscarEMostrarVideos() {
    const busca = await fetch('http://localhost:3000/videos')
    const videos = await busca.json();


            videos.forEach((videos) => {
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


}

buscarEMostrarVideos()