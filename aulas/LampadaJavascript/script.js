const btnAlternar = document.getElementById('btn-alternar')
const imgLampada = document.getElementById('lampada')
const baseUrl = "https://sturdy-giggle-974w7gjv79j6hp6gq-5504.app.github.dev/aulas/LampadaJavascript/"


// alert(lampada.src)
// alert(btnAlternar.textComtent)
btnAlternar.addEventListener('click', function (e) {
    if (imgLampada.src == baseUrl + "lampada1.png") {
        imgLampada.src = "lampada2.png"
        btnAlternar.textContent = "Lampada Acesa!"
        btnAlternar.style.backgroundColor = 'green'
    } else {
        imgLampada.src = "lampada1.png"
        btnAlternar.textContent = "Lampada Apagada!"
        btnAlternar.style.backgroundColor = 'yellow'
    }
})


btnAlternar.addEventListener('dblclick', function (e) {
    imgLampada.src = "lampada0.png"
    btnAlternar.textContent = "Lampada Queimada"
    btnAlternar.style.backgroundColor = 'red'
})