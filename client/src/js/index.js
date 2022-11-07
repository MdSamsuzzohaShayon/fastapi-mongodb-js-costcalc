import HomeIntractions from './InterfaceIntraction/HomeIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';
import HomeEvent from './EventListener/HomeEvent';
import FetchData from './Utils/FetchData';
import CostCalculation from './Utils/CostCalculation';

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
  const costCal = new CostCalculation();
  /**
   * @var - declare variables
   */
  // eslint-disable-next-line prefer-const
  let dataObj = {};
  const updatedDataObj = {}; // Set this if there is a query parameter call costitemId

  const makeAllSliders = (dataObjParam) => {
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

    const designDefault = costCal.sliderItemDefaultValue(dataObjParam?.design);
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

    const noofpageDefault = costCal.sliderItemDefaultValue(
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

    const contentDefault = costCal.sliderItemDefaultValue(
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

    const ecommerceDefault = costCal.sliderItemDefaultValue(
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

    const writingcontrolDefault = costCal.sliderItemDefaultValue(
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

    const flexibilitycontrolDefault = costCal.sliderItemDefaultValue(
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
    homeUsrInt.makeRadioOnOffToggle(search, 'Onsite sea‍‍‍rch', 'search');
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
    const allSliders = document.querySelectorAll('.slider-range-input');
    homeEvt.sliderFillerWidthChange(
      allSliders,
      dataObj,
      updatedDataObj,
      costitemId
    );
    // console.log(allToggleOnOffInput);
    const allToggleOnOffInput = document.querySelectorAll(
      '.on-off-toggle-input'
    );
    homeEvt.changeRadioToggleChangeHandler(
      allToggleOnOffInput,
      dataObj,
      updatedDataObj,
      costitemId
    );

    const allTwoLevelInputs = document.querySelectorAll('.two-level-inputs');
    homeEvt.changeTwoLevelInput(
      allTwoLevelInputs,
      dataObj,
      updatedDataObj,
      costitemId
    );

    const saveDataElement = document.querySelector('#save-data');
    homeEvt.saveCostitemDataHandler(
      saveDataElement,
      dataObj,
      updatedDataObj,
      costitemId
    );


    const allOptionDetailBtnElements = document.querySelectorAll('.optiondetail-btn');
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
