import HomeIntractions from './InterfaceIntraction/HomeIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';
import HomeEvent from './EventListener/HomeEvent';

const allItemOpenBtnsElement = document.querySelectorAll(
  '.expanded-item-open-btns'
);
const allExpendedContents = document.querySelectorAll('.expanded-content');

// All slider wrapper
const showcaseCostCalcSlider = document.getElementById(
  'showcase-cost-calc-slider'
);
const sliderWrapperDesigner = document.getElementById('website-design-slider');
const noOfPageSlider = document.getElementById('no-of-page-slider');
const websiteContentSlider = document.getElementById('website-content-slider');
const ecommerceSlider = document.getElementById('ecommerce-slider');
const webConCodeSlider = document.getElementById(
  'website-control-writing-code-slider'
);
const webConFlexibilitySlider = document.getElementById(
  'website-control-flexibility-slider'
);

const homeUsrInt = new HomeUserInterface();
const homeInt = new HomeIntractions();
const homeEvt = new HomeEvent();

/**
 * @class Make user interface
 */
const labelDesignList = ['SIMPLE TEMPLATE', 'COMPLEX C‍‍‍USTOM'];
homeUsrInt.makeSliderWithLabel(
  showcaseCostCalcSlider,
  labelDesignList,
  33.33,
  33.33
);
const labelShowcaseList = ['SIMPLE TEMPLATE', 'COMPLEX C‍‍‍USTOM'];
homeUsrInt.makeSliderWithLabel(sliderWrapperDesigner, labelShowcaseList, 0, 20);

const lblNoOfPageList = ['1', '5', '10', '15', '20', '25+'];
homeUsrInt.makeSliderWithLabel(noOfPageSlider, lblNoOfPageList, 0, 20);
const lblwebsiteContentList = ['no need', 'basic', 'medium', 'complex'];
homeUsrInt.makeSliderWithLabel(
  websiteContentSlider,
  lblwebsiteContentList,
  0,
  33.33
);

const lblEcommerceList = ['no need', '1-10', '11-100', '100+'];
homeUsrInt.makeSliderWithLabel(ecommerceSlider, lblEcommerceList, 0, 33.33, 4);

const lblwebConCodeList = ['NOT COMFO‍‍‍RTABLE', 'VERY COMFORTABLE'];
homeUsrInt.makeSliderWithLabel(webConCodeSlider, lblwebConCodeList, 0, 33.33);
const lblFlexibilityList = [
  'Minimal (templated)',
  '(dra‍‍‍g and drop) ‍‍‍Maximum',
];
homeUsrInt.makeSliderWithLabel(
  webConFlexibilitySlider,
  lblFlexibilityList,
  0,
  33.33
);

// MINIMAL (TEMPLATED) ‍‍‍(DRA‍‍‍G AND DROP) ‍‍‍MAXIMUM

/**
 * @element slider input range
 */
const allSliders = document.querySelectorAll('.slider-range-input');
homeEvt.sliderFillerWidthChange(allSliders);

/**
 * @class HomeIntractions
 * @event onclick event
 */
homeInt.expandParticularOption(allExpendedContents, allItemOpenBtnsElement);
