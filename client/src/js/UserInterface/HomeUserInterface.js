/* eslint-disable no-useless-constructor */
import GlobalInterface from './GlobalInterface';

class HomeUserInterface extends GlobalInterface {
  constructor() {
    super();
  }

  makeSliderWithLabel(sliderWrapper, labelItemList, defaultValue, step, totalPoints) {
    try {
      this.sliderWrapper = sliderWrapper;
      const sliderLabelElement = this.makeSliderLabel(labelItemList);
      sliderWrapper.appendChild(sliderLabelElement);
      const sliderElement = this.makeSlider(defaultValue, step, totalPoints);
      sliderWrapper.appendChild(sliderElement);
    } catch (sliderWithLblErr) {
      console.log('Error from - /UserInterface/HomeUserInterface.js');
      console.log(sliderWithLblErr);
    }
  }
}

export default HomeUserInterface;
