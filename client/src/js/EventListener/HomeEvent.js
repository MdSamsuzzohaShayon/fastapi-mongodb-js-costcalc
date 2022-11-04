/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
import GlobalEvent from './GlobalEvent';

class HomeEvent extends GlobalEvent {
  constructor() {
    super();
  }

  sliderFillerWidthChange(allSliders) {
    try {
      this.allSliders = allSliders;
      allSliders.forEach((slider) => {
        slider.addEventListener('input', (se) => {
          // selector.style.left = `${se.target.value}%`;
        //   console.log(se.target);
        //   console.log(se.target.nextElementSibling);
          se.target.nextElementSibling.style.width = `${se.target.value}%`;
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/HomeEvent.js');
      console.log(error);
    }
  }
}

export default HomeEvent;
