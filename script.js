const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")
const question=document.getElementById("question")
const music=document.getElementById("music")

let yesScale=1
let noClicks=0

const messages=[

"Are you sure? 🥺",
"Really sure?? 😭",
"Think again...",
"Last chance!",
"Don't break my heart 💔",
"Fine... I give up 😩"

]


function moveNo(){

const btnWidth=noBtn.offsetWidth
const btnHeight=noBtn.offsetHeight

const maxX=window.innerWidth-btnWidth-10
const maxY=window.innerHeight-btnHeight-10

const x=Math.random()*maxX
const y=Math.random()*maxY

noBtn.style.position="fixed"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

yesScale+=0.15
yesBtn.style.transform=`scale(${yesScale})`

if(noClicks<messages.length){
question.innerHTML=messages[noClicks]
}

noClicks++

}


noBtn.addEventListener("mouseover",moveNo)
noBtn.addEventListener("click",moveNo)
noBtn.addEventListener("touchstart",moveNo)



yesBtn.addEventListener("click",()=>{

question.innerHTML="YAYYYY 💖"

document.querySelector(".container").innerHTML=`

<h1>Birthday Date Confirmed 🎂</h1>

<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif">

<p style="color:white;font-size:20px">
I can't wait to celebrate with you 💕
</p>

`

music.play()

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

startHearts()

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
