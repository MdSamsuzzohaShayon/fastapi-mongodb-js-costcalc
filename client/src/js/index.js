/* eslint-disable prefer-const */
/* eslint-disable one-var */
/**
 * COMMENT EXAMPLE
 * ==========================================================
 */
import HomeIntractions from './InterfaceIntraction/HomeIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';
import HomeEvent from './EventListener/HomeEvent';
import FetchData from './Utils/FetchData';
import CostCalculation from './Utils/CostCalculation';

const designAndNoOfPageCostbox = document.getElementById('design-cost-box');
const ecommerceCostbox = document.getElementById('ecommerce-cost-box');
const addonsCostbox = document.getElementById('addons-cost-box');
const contentCostbox = document.getElementById('content-cost-box');

document.addEventListener('DOMContentLoaded', (domE) => {
  domE.preventDefault();

  const loadingElement = document.querySelector('.loading-element-wrapper');
  const noLoadingElements = document.querySelectorAll('.no-loading');

  /**
   * @class initializations
   * */
  const homeUsrInt = new HomeUserInterface();
  const homeInt = new HomeIntractions(noLoadingElements, loadingElement);
  const homeEvt = new HomeEvent();
  const fetchData = new FetchData();
  const costCalc = new CostCalculation();
  /**
   * @var - declare variables
   */
  let dataObj = {};
  const updatedDataObj = {}; // Set this if there is a query parameter call costitemId
  let defaultCostWebContent = 0;
  const designFCost = 480,
    nopFCost = 200;
  const ecommerceFCost = 750;
  const logoContentFCost = 275,
    stockimageFCost = 10,
    copywriteFCost = 150;

  const makeAllSliders = (dataObjParam) => {
    /**
     * @class Make user interface
     * Making slider with label
     */

    /**
     * SHOWCASE SLIDER
     * ==========================================================
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

    /**
     * DESIGN AND NO OF PAGE SLIDER
     * ==========================================================
     */
    const designDefault = costCalc.sliderItemDefaultValue(dataObjParam?.design);
    const sliderWrapperDesigner = document.getElementById(
      'website-design-slider'
    );
    const labelShowcaseList = ['SIMPLE TEMPLATE', 'COMPLEX C‍‍‍USTOM'];
    homeUsrInt.makeSliderWithLabel(
      sliderWrapperDesigner,
      labelShowcaseList,
      designDefault,
      20,
      'design'
    );

    const noofpageDefault = costCalc.sliderItemDefaultValue(
      dataObjParam?.noofpage
    );
    const noOfPageSlider = document.getElementById('no-of-page-slider');
    const lblNoOfPageList = ['1', '5', '10', '15', '20', '25+'];
    homeUsrInt.makeSliderWithLabel(
      noOfPageSlider,
      lblNoOfPageList,
      noofpageDefault,
      20,
      'noofpage'
    );
    const defaultCostNoOfPageNum = costCalc.getCostOfNOP(noofpageDefault);
    const defaultDesignCost = costCalc.getCostOfDesign(designDefault);
    // console.log({ noofpageDefault, defaultCostNoOfPageNum });
    designAndNoOfPageCostbox.setAttribute(
      'data-designcost',
      defaultCostNoOfPageNum + defaultDesignCost
    );
    designAndNoOfPageCostbox.textContent =
      defaultCostNoOfPageNum + defaultDesignCost;

    // console.log(defaultDesignCost);

    /**
     * WEBSITE CONTENT SLIDER
     * ==========================================================
     */
    const contentDefault = costCalc.sliderItemDefaultValue(
      dataObjParam?.content
    );
    const websiteContentSlider = document.getElementById(
      'website-content-slider'
    );
    const lblwebsiteContentList = ['no need', 'basic', 'medium', 'complex'];
    homeUsrInt.makeSliderWithLabel(
      websiteContentSlider,
      lblwebsiteContentList,
      contentDefault,
      33.33,
      'content'
    );
    // Getting default cost of website content and setting the default value after two function
    const cc = costCalc.getCostOfContent(dataObjParam?.content);
    // console.log({ cc, ccc: cc * logoContentFCost, contentDefault });
    defaultCostWebContent += cc * logoContentFCost;

    /**
     * ECOMMERCE SLIDER
     * ==========================================================
     */
    const ecommerceDefault = costCalc.sliderItemDefaultValue(
      dataObjParam?.ecommerce
    );
    const ecommerceSlider = document.getElementById('ecommerce-slider');
    const lblEcommerceList = ['no need', '1-10', '11-100', '100+'];
    homeUsrInt.makeSliderWithLabel(
      ecommerceSlider,
      lblEcommerceList,
      ecommerceDefault,
      33.33,
      'ecommerce'
    );
    // Set ecommerce default cost
    const ecommerceDefaultCost = costCalc.getCostOfEcommerce(
      dataObjParam?.ecommerce
    );
    ecommerceCostbox.setAttribute(
      'data-ecommercecost',
      Math.ceil(ecommerceDefaultCost * ecommerceFCost)
    );
    ecommerceCostbox.textContent = Math.ceil(
      ecommerceDefaultCost * ecommerceFCost
    );

    /**
     * WEBSITE CONTROL SLIDER
     * WRITING CONTROL AND FLEXIBILITY CONTROL
     * ==========================================================
     */
    const writingcontrolDefault = costCalc.sliderItemDefaultValue(
      dataObjParam?.writingcontrol
    );
    const webConCodeSlider = document.getElementById(
      'website-control-writing-code-slider'
    );
    const lblwebConCodeList = ['NOT COMFO‍‍‍RTABLE', 'VERY COMFORTABLE'];
    homeUsrInt.makeSliderWithLabel(
      webConCodeSlider,
      lblwebConCodeList,
      writingcontrolDefault,
      33.33,
      'writingcontrol'
    );

    const flexibilitycontrolDefault = costCalc.sliderItemDefaultValue(
      dataObjParam?.flexibilitycontrol
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
      flexibilitycontrolDefault,
      33.33,
      'flexibilitycontrol'
    );
  };

  const makeAllRadioInputs = (dataObjParam) => {
    /**
     * @class Make user interface
     * Making radio toggle on/ off input
     */
    /**
     * WEBSITE ADDONS
     * ==========================================================
     */
    const leadgen = document.getElementById('leadgen-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      leadgen,
      'Forms / Lead gene‍‍‍ration',
      'leadgen',
      dataObjParam.leadgen
    );
    const galary = document.getElementById('galary-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      galary,
      'Image / Video ga‍‍‍lleries',
      'galary',
      dataObjParam.galary
    );
    const schedule = document.getElementById('schedule-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      schedule,
      'Event scheduling / ‍‍‍Reservations',
      'schedule',
      dataObjParam.schedule
    );
    const social = document.getElementById('social-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      social,
      'Social Media (share / lik‍‍‍e / reviews)',
      'social',
      dataObjParam.social
    );
    const search = document.getElementById('search-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      search,
      'Onsite sea‍‍‍rch',
      'search',
      dataObjParam.search
    );
    const profile = document.getElementById('profile-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      profile,
      'Member login /‍‍‍ Profiles',
      'profile',
      dataObjParam.profile
    );
    const tracking = document.getElementById('tracking-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      tracking,
      'Analy‍‍‍tics & tracking',
      'tracking',
      dataObjParam.tracking
    );
    const chatWrapper = document.getElementById('chat-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      chatWrapper,
      'Liv‍‍‍e chat',
      'chat',
      dataObjParam.chat
    );
    const blogWrapper = document.getElementById('blog-wraper');
    homeUsrInt.makeRadioOnOffToggle(
      blogWrapper,
      'Blog‍‍‍',
      'blog',
      dataObjParam.blog
    );
    // set default cost for addons
    const defaultCostOfAllAddons = costCalc.getCostOfAllAddons(dataObj);
    // console.log({defaultCostOfAllAddons, addonsCostbox});
    addonsCostbox.setAttribute('data-addonscost', defaultCostOfAllAddons);
    addonsCostbox.textContent = defaultCostOfAllAddons;
  };

  const makeAllTwoLevelInputs = (dataObjParam) => {
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
      'stockimage',
      dataObjParam.stockimage
    );
    // console.log({stockimage: dataObjParam.stockimage});
    if (dataObjParam.stockimage) {
      defaultCostWebContent += dataObjParam.stockimage * stockimageFCost;
    }
    const copywriteInputWrapper = document.getElementById(
      'coppywriting-input-wrapper'
    );
    homeUsrInt.makeAndAppendTwoLevelInputField(
      copywriteInputWrapper,
      'Copywr‍‍‍iting :',
      'at $1‍‍‍50‍‍‍/page (avg.)',
      'copywrite',
      dataObjParam.copywrite
    );
    if (dataObjParam.copywrite) {
      defaultCostWebContent += dataObjParam.copywrite * copywriteFCost;
    }
    contentCostbox.setAttribute('data-contentcost', defaultCostWebContent);
    contentCostbox.textContent = defaultCostWebContent;
  };

  const makeAllUserIntractions = (costitemId) => {
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
    /**
     * ALL SLIDER FOR CHANGING WIDTH FOR FILLER
     * ==========================================================
     */
    const allSliders = document.querySelectorAll('.slider-range-input');
    homeEvt.sliderFillerWidthChange(allSliders);

    /**
     * SECTION DESIGN INPUT CHANGE HANDLER
     * DESIGN AND NUMBER OF PAGES
     * ==========================================================
     */
    const websiteDesignSlider = document
      .getElementById('website-design-slider')
      .querySelector('input[type="range"]');
    const noOfPageSlider = document
      .getElementById('no-of-page-slider')
      .querySelector('input[type="range"]');
    homeEvt.noOfPageAndDesignChnageHandler(
      websiteDesignSlider,
      noOfPageSlider,
      designFCost,
      dataObj,
      updatedDataObj,
      designAndNoOfPageCostbox
    );

    /**
     * SECTION CONTENT
     * STOCKIMAGE, CONTENT WRITING, AND LOGO DESIGN
     * ==========================================================
     */
    const stockimageInputElement = document.querySelector(
      'input[name="stockimage"]'
    );
    const copywriteInputElement = document.querySelector(
      'input[name="copywrite"]'
    );
    const contentInputElement = document.querySelector('input[name="content"]');
    homeEvt.contentCostChnageHandler(
      stockimageInputElement,
      copywriteInputElement,
      contentInputElement,
      dataObj,
      updatedDataObj,
      logoContentFCost,
      stockimageFCost,
      copywriteFCost
    );

    /**
     * SECTION ECOMMERCE
     * ==========================================================
     */
    const ecommerceInputElement = document.querySelector(
      'input[name="ecommerce"]'
    );
    homeEvt.ecommerceCostChangeHandler(
      ecommerceInputElement,
      dataObj,
      updatedDataObj,
      ecommerceFCost
    );

    /**
     * SECTION ADDONS
     * ==========================================================
     */
    const allToggleOnOffInput = document.querySelectorAll(
      '.on-off-toggle-input'
    );
    homeEvt.changeRadioToggleChangeHandler(
      allToggleOnOffInput,
      dataObj,
      updatedDataObj,
      costitemId
    );

    /**
     * SECTION CONTENT
     * STOCKIMAGE, CONTENT WRITING, AND LOGO DESIGN
     * ==========================================================
     */
    const allTwoLevelInputs = document.querySelectorAll('.two-level-inputs');
    homeEvt.changeTwoLevelInput(
      allTwoLevelInputs,
      dataObj,
      updatedDataObj,
      costitemId
    );

    /**
     * SECTION WEBSITE CONTROL
     * WRITING CODE AND FLEXIBILITY
     * ==========================================================
     */
    const writingControlSlider = document
      .getElementById('website-control-writing-code-slider')
      .querySelector('input[type="range"]');
    const flexibilityControlSlider = document
      .getElementById('website-control-flexibility-slider')
      .querySelector('input[type="range"]');

    homeEvt.websiteControlChnageHandler(
      writingControlSlider,
      flexibilityControlSlider,
      dataObj,
      updatedDataObj
    );

    /**
     * SAVE DATA ON BUTTON CLICK
     * ==========================================================
     */
    const saveDataElement = document.querySelector('#save-data');
    homeEvt.saveCostitemDataHandler(
      saveDataElement,
      dataObj,
      updatedDataObj,
      costitemId
    );

    /**
     * SCROLL EVENTS TO SCROLL INTO A PARTICULAR ELEMENT
     * ==========================================================
     */
    const allOptionDetailBtnElements =
      document.querySelectorAll('.optiondetail-btn');
    homeInt.scrollToParticularElement(allOptionDetailBtnElements);

    const getEstimateBtn = document.getElementById('get-estimate-btn');
    const sectionGetStarted = document.getElementById('section-get-started');
    homeInt.scrollToTargetedElement(getEstimateBtn, sectionGetStarted);
    const getStartedBtn = document.getElementById('get-started-btn');
    const sectionwebDesign = document.getElementById('section-web-design');
    homeInt.scrollToTargetedElement(getStartedBtn, sectionwebDesign);
  };

  (async () => {
    // const response = await fetchData.fetchCostitemDataByIP();
    const params = new URLSearchParams(window.location.search);
    const costitemId = params.get('costitemId');
    if (costitemId) {
      const responseData = await fetchData.fetchSingleCostitemDataByCostitemId(
        costitemId
      );
      if (responseData) dataObj = responseData;
      // console.log({ singleCostItem });
      // console.log(dataObj);
    }

    makeAllSliders(dataObj);
    makeAllRadioInputs(dataObj);
    makeAllTwoLevelInputs(dataObj);
    makeAllUserIntractions(costitemId);
    loadingElement.classList.add('d-none');
    homeInt.loadingTerminate();
  })();
});
