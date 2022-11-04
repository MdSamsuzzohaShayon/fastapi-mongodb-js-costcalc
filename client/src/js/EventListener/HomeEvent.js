/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
import GlobalEvent from './GlobalEvent';

class HomeEvent extends GlobalEvent {
  constructor() {
    super();
  }

  sliderFillerWidthChange(allSliders, dataObj) {
    try {
      this.allSliders = allSliders;
      allSliders.forEach((slider) => {
        slider.addEventListener('input', (se) => {
          // selector.style.left = `${se.target.value}%`;
          //   console.log(se.target);
          //   console.log(se.target.nextElementSibling);
          dataObj[se.target.name] = se.target.value;
          se.target.nextElementSibling.style.width = `${se.target.value}%`;
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/HomeEvent.js');
      console.log(error);
    }
  }

  changeRadioToggleChangeHandler(allToggleOnOffInput, dataObj) {
    this.allToggleOnOffInput = allToggleOnOffInput;
    this.allToggleOnOffInput.forEach((too) => {
      too.addEventListener('change', (tooe) => {
        // console.log({[tooe.target.name]: tooe.target.checked });
        dataObj[tooe.target.name] = tooe.target.checked;
      });
    });
  }

  changeTwoLevelInput(allTwoLevelInputs, dataObj){
    this.allTwoLevelInputs = allTwoLevelInputs;
    console.log(allTwoLevelInputs);
    this.allTwoLevelInputs.forEach((atl) => {
      atl.addEventListener('change', (atle) => {
        // console.log({[atle.target.name]: atle.target.value });
        dataObj[atle.target.name] = atle.target.value;
      });
    });
  }
}

export default HomeEvent;
