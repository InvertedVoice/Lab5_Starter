// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
    if (speechSynthesis.onvoiceschanged !== undefined) {
      synth.onvoiceschanged=populateVoices
    }
    populateVoices()
    const button = document.querySelector('button');
    button.addEventListener('click', buttonPress);
    
}

function populateVoices(){
  const synth = window.speechSynthesis;
  const voices = synth.getVoices()

  for (let i =0;i<voices.length;i++){

    const new_element = document.createElement("option")
    new_element.value = voices[i].name
    new_element.innerText = voices[i].name + " (" + voices[i].lang + ")"
    document.getElementById("voice-select").appendChild(new_element)

  }

}

function buttonPress(){
    const synth = window.speechSynthesis;
    const voices = synth.getVoices()
    const text_input = document.getElementById("text-to-speak")
    const text_value = text_input.value
    const voice_select = document.getElementById("voice-select")
    const selected_voice_index = voice_select.selectedIndex
    if (selected_voice_index <1){
      return;
    }
    const synth_utt = new SpeechSynthesisUtterance(text_value);
    synth_utt.voice = voices[selected_voice_index-1]
    synth.speak(synth_utt);
    const image_element = document.querySelector("img")
    image_element.src = "assets/images/smiling-open.png"
    image_element.alt = "Smiling Open Mouth"
    synth_utt.onend = ()=>{
      image_element.src = "assets/images/smiling.png"
      image_element.alt = "Smiling Mouth"
    }
}