var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
var myAudio = document.querySelector('#short')
var source = audioCtx.createMediaElementSource(myAudio)
var gainNode = audioCtx.createGain()
source.connect(gainNode)
gainNode.connect(audioCtx.destination)

myAudio.play()

myAudio.addEventListener('ended', () => {
  myAudio.play()
}, true)
