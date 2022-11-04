import HomeIntractions from './InterfaceIntraction/HomeIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';
import HomeEvent from './EventListener/HomeEvent';

/**
 * @class initializations
 * */
const homeUsrInt = new HomeUserInterface();
const homeInt = new HomeIntractions();
const homeEvt = new HomeEvent();

/**
 * @var - declare variables
 */
const dataObj = {};

/**
 * @class Make user interface
 * Making slider with label
 */
const showcaseCostCalcSlider = document.getElementById(
  'showcase-cost-calc-slider'
);
const labelDesignList = ['SIMPLE TEMPLATE', 'COMPLEX C‍‍‍USTOM'];
homeUsrInt.makeSliderWithLabel(
  showcaseCostCalcSlider,
  labelDesignList,
  33.33,
  33.33,
  null
);

const sliderWrapperDesigner = document.getElementById('website-design-slider');
const labelShowcaseList = ['SIMPLE TEMPLATE', 'COMPLEX C‍‍‍USTOM'];
homeUsrInt.makeSliderWithLabel(
  sliderWrapperDesigner,
  labelShowcaseList,
  0,
  20,
  'design'
);

const noOfPageSlider = document.getElementById('no-of-page-slider');
const lblNoOfPageList = ['1', '5', '10', '15', '20', '25+'];
homeUsrInt.makeSliderWithLabel(
  noOfPageSlider,
  lblNoOfPageList,
  0,
  20,
  'noofpage'
);

const websiteContentSlider = document.getElementById('website-content-slider');
const lblwebsiteContentList = ['no need', 'basic', 'medium', 'complex'];
homeUsrInt.makeSliderWithLabel(
  websiteContentSlider,
  lblwebsiteContentList,
  0,
  33.33,
  'content'
);

const ecommerceSlider = document.getElementById('ecommerce-slider');
const lblEcommerceList = ['no need', '1-10', '11-100', '100+'];
homeUsrInt.makeSliderWithLabel(
  ecommerceSlider,
  lblEcommerceList,
  0,
  33.33,
  'ecommerce'
);

const webConCodeSlider = document.getElementById(
  'website-control-writing-code-slider'
);
const lblwebConCodeList = ['NOT COMFO‍‍‍RTABLE', 'VERY COMFORTABLE'];
homeUsrInt.makeSliderWithLabel(
  webConCodeSlider,
  lblwebConCodeList,
  0,
  33.33,
  'writingcontrol'
);
const lblFlexibilityList = [
  'Minimal (templated)',
  '(dra‍‍‍g and drop) ‍‍‍Maximum',
];

const webConFlexibilitySlider = document.getElementById(
  'website-control-flexibility-slider'
);
homeUsrInt.makeSliderWithLabel(
  webConFlexibilitySlider,
  lblFlexibilityList,
  0,
  33.33,
  'flexibilitycontrol'
);

/**
 * @class Make user interface
 * Making radio toggle on/ off input
 */
const leadgen = document.getElementById('leadgen-wraper');
homeUsrInt.makeRadioOnOffToggle(
  leadgen,
  'Forms / Lead gene‍‍‍ration',
  'leadgen'
);
const galary = document.getElementById('galary-wraper');
homeUsrInt.makeRadioOnOffToggle(galary, 'Image / Video ga‍‍‍lleries', 'galary');
const schedule = document.getElementById('schedule-wraper');
homeUsrInt.makeRadioOnOffToggle(
  schedule,
  'Event scheduling / ‍‍‍Reservations',
  'schedule'
);
const social = document.getElementById('social-wraper');
homeUsrInt.makeRadioOnOffToggle(
  social,
  'Social Media (share / lik‍‍‍e / reviews)',
  'social'
);
const search = document.getElementById('search-wraper');
homeUsrInt.makeRadioOnOffToggle(search, 'Onsite sea‍‍‍rch', 'search');
const profile = document.getElementById('profile-wraper');
homeUsrInt.makeRadioOnOffToggle(
  profile,
  'Member login /‍‍‍ Profiles',
  'profile'
);
const tracking = document.getElementById('tracking-wraper');
homeUsrInt.makeRadioOnOffToggle(
  tracking,
  'Analy‍‍‍tics & tracking',
  'tracking'
);
const chatWrapper = document.getElementById('chat-wraper');
homeUsrInt.makeRadioOnOffToggle(chatWrapper, 'Liv‍‍‍e chat', 'chat');
const blogWrapper = document.getElementById('blog-wraper');
homeUsrInt.makeRadioOnOffToggle(blogWrapper, 'Blog‍‍‍', 'blog');

/**
 * @class to make two level input
 */
const stockimageInputWrapper = document.getElementById(
  'stockimage-input-wrapper'
);
homeUsrInt.makeAndAppendTwoLevelInputField(
  stockimageInputWrapper,
  'Stock images :',
  'at $10/image (avg.)',
  'stockimage'
);
const copywriteInputWrapper = document.getElementById(
  'coppywriting-input-wrapper'
);
homeUsrInt.makeAndAppendTwoLevelInputField(
  copywriteInputWrapper,
  'Copywr‍‍‍iting :',
  'at $1‍‍‍50‍‍‍/page (avg.)',
  'copywrite'
);



/**
 * @class HomeIntractions
 * @event onclick event
 */
const allItemOpenBtnsElement = document.querySelectorAll(
  '.expanded-item-open-btns'
);
const allExpendedContents = document.querySelectorAll('.expanded-content');
homeInt.expandParticularOption(allExpendedContents, allItemOpenBtnsElement);



/**
 * @element slider input range
 * all input change handler
 */
 const allSliders = document.querySelectorAll('.slider-range-input');
 homeEvt.sliderFillerWidthChange(allSliders, dataObj);
// console.log(allToggleOnOffInput);
const allToggleOnOffInput = document.querySelectorAll('.on-off-toggle-input');
homeEvt.changeRadioToggleChangeHandler(allToggleOnOffInput, dataObj);

const allTwoLevelInputs = document.querySelectorAll('.two-level-inputs');
homeEvt.changeTwoLevelInput(allTwoLevelInputs, dataObj);

const saveData = document.querySelector('#save-data');
saveData.addEventListener('click', (sde) => {
  console.log(dataObj);
});

// Example - Submit object update
// {
//   "design": "40",
//   "noofpage": "60",
//   "content": "33.33",
//   "ecommerce": "99.99",
//   "profile": true,
//   "schedule": false,
//   "blog": true,
//   "writingcontrol": "33.33",
//   "flexibilitycontrol": "66.66",
//   "null": "66.66",
//   "chat": true,
//   "tracking": true,
//   "galary": true,
//   "leadgen": true,
//   "social": true,
//   "search": true
// }
