const st = document.getElementById("ppro")
play.addEventListener("click", ()=>{
    const status = play.classList.contains("play")
    if(status)
    pauseSong()
    else
    playSong()
})

function playSong(){
    play.classList.add("play")
    play.src = "pause.svg"
    audio.play()
}
function pauseSong(){
    play.classList.remove("play")
    play.src = "play.svg"
    audio.pause()
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
    console.log(width, clickX, duration, audio.currentTime)
    }
function update(e){
    console.log(e.target)
    var {currentTime, duration} = e.target
    var pP = (currentTime/duration)*100
    pro.style.width = `${pP}%`
    console.log(currentTime, duration, pP)
}
st.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", update);