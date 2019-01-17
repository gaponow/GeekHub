function gallery(el) {
    const prevBtn = el.querySelector('[data-prev]');
    const nextBtn = el.querySelector('[data-next]');
    const images = el.querySelectorAll('[data-img]');
    const elements = el.querySelectorAll('[data-elm]');
    let index = 0,
        index2 = 0;

    function addClass(name, addName, content) {
        if(elements[index + content].classList.contains(name)) {
        elements[index + content].classList.add(addName);
        } 
    };

    function removeClass(name, remName, content) {
        if(elements[index + content].classList.contains(name)) {
        elements[index + content].classList.remove(remName);
        }
    };

    function prevElm() {
        elements[index].classList.remove('active');
        index--;
        removeClass('elm1', 'elm1_first', 1);
        removeClass('elm2', 'elm2_first', 1);
        removeClass('elm3', 'elm3_first', 1);
        removeClass('elm4', 'elm4_first', 1);
        removeClass('elm5', 'elm5_first', 1);
        if(index < 0) {
            addClass('elm1', 'elm1_first', 1);
            addClass('elm2', 'elm2_first', 2);
            addClass('elm3', 'elm3_first', 3);
            addClass('elm4', 'elm4_first', 4);
            addClass('elm5', 'elm5_first', 5);
            index = elements.length - 1;
        }

        elements[index].classList.add('active');
    };

    function nextElm() {
        elements[index].classList.remove('active');
        index++;
        addClass('elm1', 'elm1_first', - 1);
        addClass('elm2', 'elm2_first', - 1);
        addClass('elm3', 'elm3_first', - 1);
        addClass('elm4', 'elm4_first', - 1);
        addClass('elm5', 'elm5_first', - 1);
        if(index >= elements.length) {
            index = 0;
            removeClass('elm1', 'elm1_first', 0);
            removeClass('elm2', 'elm2_first', 1);
            removeClass('elm3', 'elm3_first', 2);
            removeClass('elm4', 'elm4_first', 3);
            removeClass('elm5', 'elm5_first', 4);
        }

        elements[index].classList.add('active');
    };

    function prevImg() {
      images[index2].classList.remove('showed');
      index2--;
      
      if(index2 < 0) {
        index2 = images.length - 1;
      }
      images[index2].classList.add('showed');
    };

    function nextImg() {
      images[index2].classList.remove('showed');
      index2++;
      
      if(index2 >= images.length) {
        index2 = 0;
      }
      images[index2].classList.add('showed');
    };

    function prevObj() {
        prevImg();
        prevElm();
    }

    function nextObj() {
        nextImg();
        nextElm();
    }

    prevBtn.addEventListener('click', prevObj);
    nextBtn.addEventListener('click', nextObj);
	
	window.addEventListener('keydown', function (e) {
		if (e.keyCode == 37) {
			prevObj();
		}
		if (e.keyCode == 39) {
			nextObj();
		}
	});
	
};

gallery(document.querySelector('[data-gallery]'))
