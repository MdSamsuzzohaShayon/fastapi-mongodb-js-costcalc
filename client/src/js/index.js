import HomeIntractions from './InterfaceIntraction/HomeIntractions';
import HomeUserInterface from './UserInterface/HomeUserInterface';
import HomeEvent from './EventListener/HomeEvent';
import FetchData from './Utils/FetchData';
import { BACKEND_URL } from './config/keys';

document.addEventListener('DOMContentLoaded', (domE) => {
  domE.preventDefault();

  /**
   * @class initializations
   * */
  const homeUsrInt = new HomeUserInterface();
  const homeInt = new HomeIntractions();
  const homeEvt = new HomeEvent();
  const fetchData = new FetchData();
  /**
   * @var - declare variables
   */
  // eslint-disable-next-line prefer-const
  let dataObj = {};
  const updatedDataObj = {}; // Set this if there is a query parameter call costitemId

  const makeAllSliders = () => {
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

    const sliderWrapperDesigner = document.getElementById(
      'website-design-slider'
    );
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

    const websiteContentSlider = document.getElementById(
      'website-content-slider'
    );
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
  };

  const makeAllRadioInputs = () => {
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
    homeUsrInt.makeRadioOnOffToggle(
      galary,
      'Image / Video ga‍‍‍lleries',
      'galary'
    );
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
  };

  const makeAllTwoLevelInputs = () => {
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
    /*
    saveData.addEventListener('click', async (sde) => {
      // console.log(dataObj);
      // console.log(Object.getOwnPropertyNames(dataObj));
      // Save or update data
      if (!costitemId) {
        if (Object.getOwnPropertyNames(dataObj).length > 0) {
          try {
            const option = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(dataObj),
            };
            const response = await fetch(`${BACKEND_URL}/costitem/add`, option);
            const text = await response.text();
            const jsonRes = JSON.parse(text);
            // console.log(jsonRes);
            if (response.status === 200 || response.status === 201) {
              // for the first time we are going to save, afterwards, we are going to edit
              // Redirect with costitem id to edit costitem
              window.location.replace(
                `${window.location.href}?costitemId=${jsonRes.id}`
              );
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else if (Object.getOwnPropertyNames(updatedDataObj).length > 0) {
        try {
          const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedDataObj),
          };
          const response = await fetch(
            `${BACKEND_URL}/costitem/update/${costitemId}`,
            options
          );
          const text = await response.text();
          const jsonRes = JSON.parse(text);
          // console.log(jsonRes);
          if (response.status === 200 || response.status === 201) {
            // for the first time we are going to save, afterwards, we are going to edit
            // Redirect with costitem id to edit costitem
            // window.location.replace(
            //   `${window.location.href}?costitemId=${jsonRes.id}`
            // );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    */
  };

  (async () => {
    // const response = await fetchData.fetchCostitemDataByIP();
    const loadingElement = document.querySelector('.loading-elements');
    const noLoadingElements = document.querySelectorAll('.no-loading');
    const params = new URLSearchParams(window.location.search);
    const costitemId = params.get('costitemId');
    if (costitemId) {
      const singleCostItem =
        await fetchData.fetchSingleCostitemDataByCostitemId(costitemId);
      console.log({ singleCostItem });
    }

    makeAllSliders();
    makeAllRadioInputs();
    makeAllTwoLevelInputs();
    makeAllUserIntractions(costitemId);
    
    loadingElement.classList.add('d-none');
    // Disable loading
    noLoadingElements.forEach((noLoading)=> {
      noLoading.classList.remove('d-none');
    });
  })();
});
