function carregar(){

var msg = window.document.querySelector("div#msg")
var img = window.document.querySelector ("img#foto")
var sem = window.document.querySelector ("div#sem")

var data = new Date()//atual

var hora = data.getHours()//hora exata
var diaSem = data.getDay()//dia da semana
var dia = data.getDate() 
var mes = data.getMonth()
var ano = data.getFullYear()


msg.innerHTML = (`Agora são extamente ${hora}hrs.<br>`)
sem.innerHTML = (`Hoje é `)

if (hora >= 0 && hora < 12){
    msg.innerHTML += ("Bom Dia!! <br>")
    img.src = './img/manha.png.jpg'
    document.body.style.backgroundImage = "linear-gradient(to right, #e1ebef, #d5e2e8,#bfd5de)"
}else if (hora >=12 && hora < 18){
    msg.innerHTML += ("Boa tarde!! <br>")
    img.src = "./img/tarde.png.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #d67b2c, #CC6100, #aa4f00)"
}else{
    msg.innerHTML += ("Boa Noite!!<br>")
    img.src = "./img/noite.png.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #16484f, #173438,#071c1f)"

}

switch(diaSem){
    case 0:
       sem.innerHTML +=('domingo')
        break
    case 1: 
       sem.innerHTML += ('Segunda-feira.')
        break
    case 2 :
       sem.innerHTML += ('Terça-feira.')
        break
    case 3:
       sem.innerHTML += ('Quarta-feira.')
        break
    case 4: 
       sem.innerHTML += ('quinta-feira.')
        break
    case 5:
       sem.innerHTML += ('Sexta-feira.')
        break
    case 6:
       sem.innerHTML += ('Sábado.')
        break
    default :
       sem.innerHTML += ('[ERRO] dia inválido')
        break
}
 sem.innerHTML += (` Dia ${dia}/${mes}/${ano}`)
}
