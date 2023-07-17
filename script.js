const st = document.getElementById("ppro")
let songL = ["bgTrap", "blast", "passion", "MMOS", "CodeChill"]
let songI = 0
load(songI)
play.addEventListener("click", ()=>{
    const status = play.classList.contains("play")
    if(status)
    pauseSong()
    else
    playSong()
})
audio.addEventListener("loadedmetadata", ()=>{
    time.innerHTML = `${Math.floor(audio.currentTime/60)}:${Math.floor(audio.currentTime%60)} / ${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`
    })
function load(songI){
    audio.src = `${songL[songI]}.mp3`
    img.src = `${songL[songI]}.webp`
    mimg.src = `${songL[songI]}.webp`
    audio.load()
    switch(songL[songI])
    {
        case "bgTrap":
            heada.innerHTML =  `Background Trap`
            break;
        case "blast":
            heada.innerHTML =  `Blast`
            break;
        case "passion":
            heada.innerHTML =  `Passion`
            break;
        case "MMOS":
            heada.innerHTML =  `MMOS`
            break;
        case "CodeChill":
            heada.innerHTML =  `Code Chill`
            break;
        default:
            heada.innerHTML =  `No Such Song`
            break;
    }
}
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
function nextS(){
    songI++;
    if(songI === songL.length)
    {
        songI = 0;
    }
    console.log(songL.length, songI)
    load(songI);
    if(play.classList.contains("play")){
        audio.play()
        play.src = "pause.svg"
    }
    else{
        audio.pause()
        play.src = "play.svg"   
    }
}
function prevS(){
    songI--;
    if(songI < 0)
    {
        songI = songL.length-1;
    }
    load(songI);
    if(play.classList.contains("play")){
        audio.play()
        play.src = "pause.svg"
    }
    else{
        audio.pause()
        play.src = "play.svg"   
    }
}
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
    console.log(this.target)
    }
function update(e){
    var {currentTime, duration} = e.target
    var pP = (currentTime/duration)*100
    pro.style.width = `${pP}%`
    var cmin = Math.floor(currentTime/60)
    var csec = Math.floor(currentTime%60)
    var tmin = Math.floor(duration/60)
    var tsec = Math.floor(duration%60)
    time.innerHTML = `${Math.floor(audio.currentTime/60)}:${Math.floor(audio.currentTime%60)}/${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`
}

st.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", update);
next.addEventListener("click", nextS);
prev.addEventListener("click", prevS);