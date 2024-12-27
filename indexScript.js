/* Opens and Closes Menu */
const overlay = document.getElementById('overlay');
const menuOpenButton = document.getElementById('menuOpen');
const menuCloseButton = document.getElementById('menuClose');

menuOpenButton.addEventListener('click', () => {
    overlay.classList.add('active'); // Show overlay
    
    overlay.querySelector('.overlayNav').classList.add('fadeInUp'); // Start fade-in animation
    overlay.querySelector('.marcosContact').classList.add('fadeInDown');
});

menuCloseButton.addEventListener('click', () => {
    overlay.classList.remove('active'); // Hide overlay
    
    overlay.querySelector('.overlayNav').classList.remove('fadeInUp'); // Remove fade-in class
    overlay.querySelector('.marcosContact').classList.remove('fadeInDown');
});


/* Cool animation that types and deletes words */
class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split(',')];
      this.speed = options?.speed || 100;
      this.delay = options?.delay || 1500;
      this.repeat = options?.repeat;
      this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    toggleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word){
      await this.wait(this.delay);
      this.toggleTyping();
      for (const letter of word.split('')) {
        this.el.textContent += letter;
        await this.wait(this.speed)
      }
      this.toggleTyping();
      await this.wait(this.delay);
      this.toggleTyping();
      while (this.el.textContent.length !== 0){
        this.el.textContent = this.el.textContent.slice(0, -1);
        await this.wait(this.speed)
      }
      this.toggleTyping();
    }

    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typerwriter(el, {
      repeat: true,
    })
  })















  