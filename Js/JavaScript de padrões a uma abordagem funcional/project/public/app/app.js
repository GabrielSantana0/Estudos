document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
.then(res => res.json())
.then(notas => console.log(notas))
.catch (err => console.error(err))