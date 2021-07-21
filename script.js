const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const range = document.getElementById('range')
const timestamp = document.getElementById('timestamp')

console.log(video)
console.log(play)
console.log(stop)
console.log(range)
console.log(timestamp)

function togglevideostatus() {
    if (video.paused) {
        video.play()
        play.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`

    } else {
        video.pause()
        console.log("play")
        play.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`

    }
}

function stopvideoplayer() {
    video.currentTime = 0;
    video.pause();
}

function setvideoprogress() {
    video.currentTime = (+range.value * video.duration) / 100
}

function updateplayicon() {
    return true;
}

function updateprogress() {
    range.value = (video.currentTime / video.duration) * 100

    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = '0' + String(mins)
    }
    let secs = Math.floor(video.currentTime % 60)
    if (secs < 10) {
        secs = '0' + String(secs)
    }


    timestamp.innerHTML = `${mins}:${secs}`

}

video.addEventListener('click', togglevideostatus)
video.addEventListener('pause', updateplayicon)
video.addEventListener('play', updateplayicon)
video.addEventListener('timeupdate', updateprogress)

play.addEventListener('click', togglevideostatus)
stop.addEventListener('click', stopvideoplayer)
range.addEventListener('change', setvideoprogress)