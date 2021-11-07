export default class Emojis {
  constructor(emojis, name) {
    this.emojis = emojis;
    this.name = name;
    this.$ = (el) => document.querySelector(el);
    this.status = this.$(`#${this.name}-header > sup`);
    this.slider = this.$(`#${this.name}-slider`);
    this.emoji = this.$(`#${this.name}-emoji`);
    this.button = this.$(`#${this.name}-button`);
    this.slider.max = this.emojis[this.name].length;
    this.counter = 0;
    this.playing = false;

    this.renderEmoji();

    this.slider.addEventListener('input', e => {
      this.counter = Number(e.target.value) - 1;
      this.renderEmoji();
    });

    this.button.addEventListener('click', e => {
      this.playing = !this.playing;
      this.playing ? this.runTimer() : this.clearTimer();
      this.button.innerText = this.playing ? '⏸️' : '▶️';
    });
    
  }
  renderEmoji () {
    this.emoji.innerText = this.emojis[this.name][this.counter];
    this.status.innerText = `${this.counter + 1} of ${this.emojis[this.name].length}`;
  }
  
  runTimer() {
    this.timer = setInterval(() => {
      this.counter++;
      this.counter %= this.emojis[this.name].length;
      this.renderEmoji(this.counter);
      this.slider.value = this.counter;
    }, 250);
  }

  clearTimer() {
    clearInterval(this.timer);
  }
}