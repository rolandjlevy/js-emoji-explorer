export default class UI {
  constructor() {
  }
  static getSection(section) {
    const sectionType = section.toLowerCase();
    return `
      <section class="emoji-section">
        <h3 id="${sectionType}-header">${section}<sup></sup></h3>
        <input id="${sectionType}-slider" type="range" min="1" step="1" value="1" class="slider" />
        <div id="${sectionType}-emoji" class="emoji"> </div>
        <div id="${sectionType}-button" class='btn'>▶️</div>
      </section>`;
  }
}