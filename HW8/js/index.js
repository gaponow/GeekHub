function gallery(el) {
    const prevBtn = el.querySelector('[data-prev]');
    const nextBtn = el.querySelector('[data-next]');
    const images = el.querySelectorAll('[data-img]');
    const elements = el.querySelectorAll('[data-elm]');
    let index = 0,
        index2 = 0;

    function addClass(content) {
		if(elements[index + content].classList.contains(`elm${i + 1}`)) {
		elements[index + content].classList.add(`elm${i + 1}_first`);
		}
    };

    function removeClass(content) {
        if(elements[index + content].classList.contains(`elm${i + 1}`)) {
        elements[index + content].classList.remove(`elm${i + 1}_first`);
        }
    };

    function prevElm() {
        elements[index].classList.remove('active');
        index--;
		for(i = 0; i < elements.length; i++) {
			removeClass(1);
		}

        if(index < 0) {
			for(i = 0; i < elements.length; i++) {
				addClass(i + 1);
			}
            index = elements.length - 1;
        }

        elements[index].classList.add('active');
    };

    function nextElm() {
        elements[index].classList.remove('active');
        index++;
        for(i = 0; i < elements.length; i++) {
			addClass(- 1);
		}
        if(index >= elements.length) {
            index = 0;
            for(i = 0; i < elements.length; i++) {
				removeClass(i);
			}
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
