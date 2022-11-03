import OptionIntractions from './InterfaceIntraction/OptionIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';

const allItemOpenBtnsElement = document.querySelectorAll(
  '.expanded-item-open-btns'
);
const allExpendedContents = document.querySelectorAll('.expanded-content');

/**
 * @class Make user interface
 */
const sliderWrapperDesigner = document.getElementById('website-design-slider');
const homeInt = new HomeUserInterface();
const labelDesignList = ['SIMPLE TEMPLATE', '%2950', 'COMPLEX C‍‍‍USTOM'];
homeInt.makeSliderWithLabel(
  sliderWrapperDesigner,
  labelDesignList,
  33.33,
  33.33
);

// // Make range slider with js start
const slider = document.querySelector('.slider-range-input');
const sliderFillers = document.querySelector('.slider-filler');
slider.addEventListener('input', (se) => {
  // selector.style.left = `${se.target.value}%`;
  console.log(se.target.value);
  sliderFillers.style.width = `${se.target.value}%`;
});
// // Make range slider with js end

/**
 * @class OptionIntractions
 * @event onclick event
 */
const optionInt = new OptionIntractions(
  allExpendedContents,
  allItemOpenBtnsElement
);
optionInt.expandParticularOption();
