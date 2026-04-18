const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const question = document.getElementById("question")
const message = document.getElementById("message")
const music = document.getElementById("music")

let yesScale = 1
let noScale = 1
let noClicks = 0
let firstYesClick = true


const messages = [

"Are you sure? 🥺",
"Really sure? 😭",
"Last chance...",
"Don't break my heart 💔",
"Okay fine... you win 😅"

]


function moveNo(){

const btnWidth = noBtn.offsetWidth
const btnHeight = noBtn.offsetHeight

const maxX = window.innerWidth - btnWidth - 10
const maxY = window.innerHeight - btnHeight - 10

const x = Math.random() * maxX
const y = Math.random() * maxY

noBtn.style.position="fixed"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

yesScale += 0.15
yesBtn.style.transform=`scale(${yesScale})`

noScale -= 0.05

if(noScale>0.4){
noBtn.style.transform=`scale(${noScale})`
}

if(noClicks < messages.length){
question.innerHTML = messages[noClicks]
}

noClicks++

}


noBtn.addEventListener("click",moveNo)
noBtn.addEventListener("touchstart",moveNo)



yesBtn.addEventListener("click",()=>{

if(firstYesClick){

message.innerHTML="😏 Too fast! Try pressing NO first"

firstYesClick=false
return

}

question.innerHTML="YAYYYYY 🥳"

message.innerHTML="It's a birthday date! 🎂💖"

music.play()

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

startHearts()

showFinalScreen()

})


function startHearts(){

setInterval(()=>{

const heart=document.createElement("div")

heart.className="heart"
heart.innerHTML="💖"

heart.style.left=Math.random()*window.innerWidth+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),5000)

},300)

}


function showFinalScreen(){

setTimeout(()=>{

document.querySelector(".container").innerHTML =

`

<h1>Birthday Date Confirmed 🎂💖</h1>

<p style="color:white;font-size:20px">
Get ready for cake, laughs, and a special day together 🥰
</p>

`

},2000)

}
