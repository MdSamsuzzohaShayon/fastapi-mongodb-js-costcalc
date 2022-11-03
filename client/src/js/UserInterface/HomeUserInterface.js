/* eslint-disable no-useless-constructor */
import GlobalInterface from './GlobalInterface';

class HomeUserInterface extends GlobalInterface {
  constructor() {
    super();
  }

  makeSliderWithLabel(sliderWrapper, labelItemList, defaultValue, step){
    this.sliderWrapper = sliderWrapper;
    const sliderLabelElement = this.makeSliderLabel(labelItemList);
    sliderWrapper.appendChild(sliderLabelElement);
    const sliderElement = this.makeSlider(defaultValue, step);
    sliderWrapper.appendChild(sliderElement);
  }
}

export default HomeUserInterface;
