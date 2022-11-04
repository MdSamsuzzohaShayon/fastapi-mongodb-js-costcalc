/* eslint-disable no-useless-constructor */
import GlobalInterface from './GlobalInterface';

class HomeUserInterface extends GlobalInterface {
  constructor() {
    super();
  }

  makeSliderWithLabel(
    sliderWrapper,
    labelItemList,
    defaultValue,
    step,
    sliderName
  ) {
    try {
      this.sliderWrapper = sliderWrapper;
      const sliderLabelElement = this.makeSliderLabel(labelItemList);
      sliderWrapper.appendChild(sliderLabelElement);
      const sliderElement = this.makeSlider(sliderName, defaultValue, step);
      sliderWrapper.appendChild(sliderElement);
    } catch (sliderWithLblErr) {
      console.log('Error from - /UserInterface/HomeUserInterface.js');
      console.log(sliderWithLblErr);
    }
  }

  makeRadioOnOffToggle(radioInputWrapper, inputTitle, inputName) {
    // Set default value
    this.inputTitle = inputTitle;
    this.inputName = inputName;
    this.radioInputWrapper = radioInputWrapper;
    const radioInputElement = this.makeOnOffToggleInput(
      this.inputTitle,
      this.inputName
    );
    this.radioInputWrapper.appendChild(radioInputElement);
  }

  makeAndAppendTwoLevelInputField(inputWrapper, txtLbl1, txtLbl2, inputName) {
    this.inputWrapper = inputWrapper;
    const inputElement = this.makeTwoLevelInputField(
      txtLbl1,
      txtLbl2,
      inputName
      );
      // console.log(inputElement);
    this.inputWrapper.appendChild(inputElement);
  }
}

export default HomeUserInterface;
