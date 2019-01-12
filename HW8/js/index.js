function gallery(el) {
    const prevBtn = el.querySelector('[data-prev]');
    const nextBtn = el.querySelector('[data-next]');
    const images = el.querySelectorAll('[data-img]');
    let index = 0;

    function prevImg() {
      images[index].classList.remove('showed');
      index--;
      
      if(index < 0) {
        index = images.length - 1;
      }
      images[index].classList.add('showed');

    };

    function nextImg() {
      images[index].classList.remove('showed');
      index++;
      
      if(index >= images.length) {
        index = 0;
      }
      images[index].classList.add('showed');
    };

    prevBtn.addEventListener('click', prevImg);
    nextBtn.addEventListener('click', nextImg);
}

gallery(document.querySelector('[data-gallery]'))