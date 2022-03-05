import characters from './src/characters.js';
import Emojis from './src/Emojis.js';
import UI from './src/UI.js';

const $ = (el) => document.querySelector(el);
const emojiTypes = ['Faces', 'People', 'Hands'];

document.addEventListener("DOMContentLoaded", () => {
  emojiTypes.forEach(group => $('.container').innerHTML += UI.getSection(group));
  emojiTypes.forEach(group => new Emojis(characters(), group));
});

