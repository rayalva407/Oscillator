const context = new AudioContext(); //allows access to webaudioapi
const osc = document.querySelector('#osc')

osc.onmousedown = function() {
  let oscPitch = document.querySelector('#oscPitch').value;
  oscillator = context.createOscillator(); //creates oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = oscPitch;
  oscillator.connect(context.destination); //sends to output
  oscillator.start(context.currentTime)
}