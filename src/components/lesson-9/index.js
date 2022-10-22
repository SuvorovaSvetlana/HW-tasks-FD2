import { KEY_MAP, COLORS, SOUNDS } from "./constants.js";

const pads = document.querySelectorAll(".pad");
const visual = document.querySelector(".visual");

const playSound = (sounds, ind) => {
  let sound = sounds[ind];
  let audio = new Audio(sound);
  audio.load();
  audio.play();
};

const animatePad = (pads, index) => {
  const pad = pads[index];
  pad.style.animation = 'dance 0.1s ease';
  pad.addEventListener('animationend', () => {
    pad.style.animation = 'none';
  });
};

const createBubble = (colors, index) => {
  const bubble = document.createElement("div");
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = 'jump 1s ease'
  visual.appendChild(bubble);
};

const play = (index) => {
  playSound(SOUNDS, index);
  animatePad(pads, index);
  createBubble(COLORS, index);
};

const keyPressHandler = (evt) => {
  switch (evt.key) {
    case KEY_MAP.kick:
      play(0);
      break;
    case KEY_MAP.cymbal:
      play(1);
      break;
    case KEY_MAP.snare:
      play(2);
      break;
    case KEY_MAP.openhat:
      play(3);
      break;
    case KEY_MAP.longCrash:
      play(4);
      break;
    case KEY_MAP.hithat:
      play(5);
      break;

    default:
      console.error("Error!!! Wrong a key");
      break;
  }
};

document.addEventListener("keypress", keyPressHandler);