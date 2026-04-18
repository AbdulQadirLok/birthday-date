const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")
const message=document.getElementById("message")
const question=document.getElementById("question")
const music=document.getElementById("music")

let yesScale=1
let firstYesClick=true


function moveButton(){

const maxX=window.innerWidth-120
const maxY=window.innerHeight-120

const x=Math.random()*maxX
const y=Math.random()*maxY

noBtn.style.position="fixed"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

yesScale+=0.15

yesBtn.style.transform=`scale(${yesScale})`

}



noBtn.addEventListener("click",moveButton)
noBtn.addEventListener("touchstart",moveButton)



yesBtn.addEventListener("click",()=>{

if(firstYesClick){

message.innerHTML="😏 That was too easy… try pressing NO first"

firstYesClick=false

return

}

question.innerHTML="YAYYYY 🥳"

message.innerHTML="You just made my birthday special 💗🎂"

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
