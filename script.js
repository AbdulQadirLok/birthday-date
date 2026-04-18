const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const message = document.getElementById("message")
const question = document.getElementById("question")
const music = document.getElementById("music")

let yesScale = 1
let noScale = 1
let firstYesClick = true


function moveNoButton(){

const x = Math.random() * (window.innerWidth - 100)
const y = Math.random() * (window.innerHeight - 100)

noBtn.style.left = x + "px"
noBtn.style.top = y + "px"

yesScale += 0.2
yesBtn.style.transform = `scale(${yesScale})`

noScale -= 0.05

if(noScale > 0.3){
noBtn.style.transform = `scale(${noScale})`
}

}

noBtn.addEventListener("mouseover", moveNoButton)


yesBtn.addEventListener("click", () => {

if(firstYesClick){

message.innerHTML =
"😏 Trying to say YES immediately? You must press NO first!"

yesScale += 0.2
yesBtn.style.transform = `scale(${yesScale})`

firstYesClick = false
return

}

question.innerHTML = "YAYYYY 🥳"

message.innerHTML = "You just agreed to a Birthday Date 🎂❤️"

music.play()

confetti({
particleCount:200,
spread:100,
origin:{y:0.6}
})

startHearts()
startBalloons()

})


function startHearts(){

setInterval(()=>{

const heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="❤️"

heart.style.left=Math.random()*window.innerWidth+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},300)

}


function startBalloons(){

setInterval(()=>{

const balloon=document.createElement("div")
balloon.className="balloon"

balloon.style.left=Math.random()*window.innerWidth+"px"

balloon.style.background=
`hsl(${Math.random()*360},70%,60%)`

document.body.appendChild(balloon)

setTimeout(()=>balloon.remove(),10000)

},800)

}
