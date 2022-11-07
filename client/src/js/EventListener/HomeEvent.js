/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
import GlobalEvent from './GlobalEvent';
import { BACKEND_URL } from '../config/keys';
import Helper from '../Utils/Holper';
import InterfaceIntraction from '../InterfaceIntraction/InterfaceIntraction';

class HomeEvent extends GlobalEvent {
  constructor() {
    super();
    this.helper = new Helper();
    this.loadingElement = document.querySelector('.loading-elements');
    this.noLoadingElements = document.querySelectorAll('.no-loading');
    this.interfaceInt = new InterfaceIntraction(
      this.noLoadingElements,
      this.loadingElement
    );
  }

  sliderFillerWidthChange(allSliders, dataObj, updatedDataObj, costitemId) {
    try {
      this.allSliders = allSliders;
      allSliders.forEach((slider) => {
        slider.addEventListener('input', (se) => {
          // selector.style.left = `${se.target.value}%`;
          // console.log(se.currentTarget);
          // console.log({[se.target.name] : se.target.value});
          //   console.log(se.target.nextElementSibling);
          if (costitemId) {
            updatedDataObj[se.target.name] = parseInt(se.target.value, 10);
          } else {
            dataObj[se.target.name] = parseInt(se.target.value, 10);
          }
          se.target.nextElementSibling.style.width = `${se.target.value}%`;
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/HomeEvent.js');
      console.log(error);
    }
  }

  changeRadioToggleChangeHandler(
    allToggleOnOffInput,
    dataObj,
    updatedDataObj,
    costitemId
  ) {
    this.allToggleOnOffInput = allToggleOnOffInput;
    this.allToggleOnOffInput.forEach((too) => {
      too.addEventListener('change', (tooe) => {
        // console.log({[tooe.target.name]: tooe.target.checked });
        if (costitemId) {
          updatedDataObj[tooe.target.name] = tooe.target.checked;
        } else {
          dataObj[tooe.target.name] = tooe.target.checked;
        }
      });
    });
  }

  changeTwoLevelInput(allTwoLevelInputs, dataObj, updatedDataObj, costitemId) {
    this.allTwoLevelInputs = allTwoLevelInputs;
    // console.log(allTwoLevelInputs);
    this.allTwoLevelInputs.forEach((atl) => {
      atl.addEventListener('change', (atle) => {
        // console.log({[atle.target.name]: atle.target.value });
        if (costitemId) {
          updatedDataObj[atle.target.name] = atle.target.value;
        } else {
          dataObj[atle.target.name] = atle.target.value;
        }
      });
    });
  }

  saveCostitemDataHandler(
    saveDataElement,
    dataObj,
    updatedDataObj,
    costitemId
  ) {
    this.saveDataElement = saveDataElement;
    this.dataObj = dataObj;
    this.saveDataElement.addEventListener('click', async (sde) => {
      sde.preventDefault();
      // console.log(dataObj);
      // console.log(Object.getOwnPropertyNames(dataObj));
      // console.log(costitemId);
      // console.log({updatedDataObj, dataObj});
      this.interfaceInt.loadingStart();
      let userid = window.localStorage.getItem('userid');

      // Save or update data
      if (!costitemId) {
        if (Object.getOwnPropertyNames(this.dataObj).length > 0) {
          try {
            if (!userid) {
              // generate user id
              userid = this.helper.generateUserId();
            }
            this.dataObj.userid = userid;
            const option = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(this.dataObj),
            };
            const response = await fetch(`${BACKEND_URL}/costitem/add`, option);
            const text = await response.text();
            const jsonRes = JSON.parse(text);
            // console.log(jsonRes);
            if (response.status === 200 || response.status === 201) {
              window.localStorage.setItem('userid', userid);
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
          // console.log('Updating');
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
            dataObj = jsonRes;
          }
        } catch (error) {
          console.log(error);
        }
      }
      this.interfaceInt.loadingTerminate();
    });
  }
}

export default HomeEvent;
