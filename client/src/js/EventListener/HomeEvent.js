/* eslint-disable no-empty */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
import GlobalEvent from './GlobalEvent';
import { BACKEND_URL } from '../config/keys';
import Helper from '../Utils/Holper';
import InterfaceIntraction from '../InterfaceIntraction/InterfaceIntraction';
import CostCalculation from '../Utils/CostCalculation';

class HomeEvent extends GlobalEvent {
  constructor() {
    super();
    this.helper = new Helper();
    this.loadingElement = document.querySelector('.loading-element-wrapper');
    this.noLoadingElements = document.querySelectorAll('.no-loading');
    const params = new URLSearchParams(window.location.search);
    this.costitemId = params.get('costitemId');
    this.interfaceInt = new InterfaceIntraction(
      this.noLoadingElements,
      this.loadingElement
    );
    this.costCalc = new CostCalculation();
  }

  sliderFillerWidthChange(allSliders) {
    try {
      this.allSliders = allSliders;
      allSliders.forEach((slider) => {
        slider.addEventListener('input', (se) => {
          // selector.style.left = `${se.target.value}%`;
          // console.log(se.currentTarget);
          // console.log({[se.target.name] : se.target.value});
          //   console.log(se.target.nextElementSibling);
          se.target.nextElementSibling.style.width = `${se.target.value}%`;
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/HomeEvent.js');
      console.log(error);
    }
  }

  sliderDataValueChange(allSliders, dataObj, updatedDataObj, costitemId) {
    try {
      this.allSliders = allSliders;
      allSliders.forEach((slider) => {
        slider.addEventListener('change', (se) => {
          // selector.style.left = `${se.target.value}%`;
          // console.log(se.currentTarget);
          // console.log({[se.target.name] : se.target.value});
          //   console.log(se.target.nextElementSibling);
          const valueInt = parseInt(se.target.value, 10);
          let newCost = 0;
          let costBoxElement = null;
          let prevACost = 0; // Actual cost
          if (se.target.name === 'design') {
            // design-cost-box
            costBoxElement = document.getElementById(`design-cost-box`);
            // calculate cost if value increased
            prevACost = parseInt(costBoxElement.dataset.designcost, 10);
            // console.log(costBoxElement);
          }

          if (costitemId) {
            // if(updatedDataObj[se.target.name]){
            //   if(updatedDataObj[se.target.name] > valueInt){
            //     valueIncreased = false;
            //   }else{
            //     valueIncreased = true;
            //   }
            // }
            const prevValInt = updatedDataObj[se.target.name];
            newCost = this.costCalc.getCostOfDesign(
              prevValInt,
              valueInt,
              prevACost
            );
            updatedDataObj[se.target.name] = valueInt;
          } else {
            const prevValInt = dataObj[se.target.name];
            newCost = this.costCalc.getCostOfDesign(
              prevValInt,
              valueInt,
              prevACost
            );
            dataObj[se.target.name] = valueInt;
          }

          // console.log({newCost});

          if (costBoxElement) {
            costBoxElement.textContent = newCost;
            costBoxElement.setAttribute('data-designcost', newCost);
          }
          // console.log('New Cost - ', newCost);
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/HomeEvent.js');
      console.log(error);
    }
  }

  noOfPageAndDesignChnageHandler(
    websiteDesignSlider,
    noOfPageSlider,
    designFCost,
    dataObj,
    updatedDataObj,
    designCostBoxElement
  ) {
    this.designSliderElement = websiteDesignSlider;
    this.noOfPageSliderElement = noOfPageSlider;
    this.fdc = designFCost;
    this.designCost = dataObj.design
      ? this.costCalc.getCostOfDesign(dataObj.design, this.fdc)
      : this.fdc;
    this.nopc = dataObj.noofpage
      ? this.costCalc.getCostOfNOP(dataObj.noofpage)
      : 1;
    // console.log(dataObj.design, this.designCost, this.nopc);

    // console.log(designCostBoxElement.dataset.designcost);

    this.designSliderElement.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);

      if (this.costitemId) {
        updatedDataObj[swde.target.name] = valueInt;
      } else {
        dataObj[swde.target.name] = valueInt;
      }
      this.designCost = this.costCalc.getCostOfDesign(valueInt, this.fdc);
      // console.log(this.nopc, this.designCost);
      const totalCost = this.nopc + this.designCost;
      designCostBoxElement.textContent = totalCost;
      designCostBoxElement.setAttribute('data-designcost', totalCost);
    });

    this.noOfPageSliderElement.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);
      this.nopc = this.costCalc.getCostOfNOP(valueInt);

      if (this.costitemId) {
        updatedDataObj[swde.target.name] = valueInt;
      } else {
        dataObj[swde.target.name] = valueInt;
      }
      // console.log(this.nopc, this.designCost);
      const totalCost = this.nopc + this.designCost;
      designCostBoxElement.textContent = totalCost;
      designCostBoxElement.setAttribute('data-designcost', totalCost);
    });
  }

  websiteControlChnageHandler(
    writingControlSlider,
    flexibilityControlSlider,
    dataObj,
    updatedDataObj
  ) {
    this.writingControlSlider = writingControlSlider;
    this.flexibilityControlSlider = flexibilityControlSlider;

    this.writingControlSlider.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);
      if (this.costitemId) {
        updatedDataObj[swde.target.name] = valueInt;
      } else {
        dataObj[swde.target.name] = valueInt;
      }
    });
    this.flexibilityControlSlider.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);
      // console.log(valueInt);
      if (this.costitemId) {
        updatedDataObj[swde.target.name] = valueInt;
      } else {
        dataObj[swde.target.name] = valueInt;
      }
    });
  }

  contentCostChnageHandler(
    stockimageInputElement,
    copywriteInputElement,
    contentInputElement,
    dataObj,
    updatedDataObj,
    contentFCost,
    stockimageFCost,
    copywriteFCost
  ) {
    this.stockimageInputElement = stockimageInputElement;
    this.copywriteInputElement = copywriteInputElement;
    this.contentInputElement = contentInputElement;

    this.stockimageQty = dataObj.stockimage ? dataObj.stockimage : 0;
    this.stockimageCost = stockimageFCost;
    this.copywriteCost = copywriteFCost;
    this.copywriteQty = dataObj.copywrite ? dataObj.copywrite : 0;
    this.contentCost = contentFCost;
    this.contentQty = dataObj.content
      ? this.costCalc.getCostOfContent(dataObj.content)
      : 0;

    // console.log(dataObj);
    // console.log(this.stockimageQty, this.copywriteQty, this.contentQty);

    const costBoxElement = document.getElementById(`content-cost-box`);

    this.stockimageInputElement.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);
      // eslint-disable-next-line no-restricted-globals
      const newIntVal = isNaN(valueInt) ? 0 : valueInt;
      this.stockimageQty = newIntVal;
      if (this.costitemId) {
        updatedDataObj[swde.target.name] = newIntVal;
      } else {
        dataObj[swde.target.name] = newIntVal;
      }
      // console.log(this.nopc, this.designCost);
      const totalCost =
        this.stockimageCost * this.stockimageQty +
        this.copywriteCost * this.copywriteQty +
        this.contentCost * this.contentQty;
      costBoxElement.textContent = totalCost;
      costBoxElement.setAttribute('data-designcost', totalCost);
    });

    this.copywriteInputElement.addEventListener('change', (swde) => {
      const valueInt = parseInt(swde.target.value, 10);
      const newIntVal = isNaN(valueInt) ? 0 : valueInt;
      this.copywriteQty = newIntVal;
      if (this.costitemId) {
        updatedDataObj[swde.target.name] = newIntVal;
      } else {
        dataObj[swde.target.name] = newIntVal;
      }
      // console.log(this.nopc, this.designCost);
      const totalCost =
        this.stockimageCost * this.stockimageQty +
        this.copywriteCost * this.copywriteQty +
        this.contentCost * this.contentQty;
      costBoxElement.textContent = totalCost;
      costBoxElement.setAttribute('data-designcost', totalCost);
    });

    this.contentInputElement.addEventListener('change', (ciee) => {
      const valueInt = parseInt(ciee.target.value, 10);
      this.contentQty = this.costCalc.getCostOfContent(valueInt);

      if (this.costitemId) {
        updatedDataObj[ciee.target.name] = valueInt;
      } else {
        dataObj[ciee.target.name] = valueInt;
      }
      const totalCost =
        this.stockimageCost * this.stockimageQty +
        this.copywriteCost * this.copywriteQty +
        this.contentCost * this.contentQty;
      costBoxElement.textContent = totalCost;
      costBoxElement.setAttribute('data-designcost', totalCost);
    });
  }

  ecommerceCostChangeHandler(
    ecommerceInputElement,
    dataObj,
    updatedDataObj,
    ecommerceCost
  ) {
    this.ecommerceInputElement = ecommerceInputElement;

    this.ecommerceCost = ecommerceCost;
    this.ecommerceQty = 0;
    const costBoxElement = document.getElementById(`ecommerce-cost-box`);

    this.ecommerceInputElement.addEventListener('change', (ciee) => {
      const valueInt = parseInt(ciee.target.value, 10);
      this.ecommerceQty = this.costCalc.getCostOfEcommerce(valueInt);

      if (this.costitemId) {
        updatedDataObj[ciee.target.name] = valueInt;
      } else {
        dataObj[ciee.target.name] = valueInt;
      }

      costBoxElement.textContent = Math.ceil(
        this.ecommerceQty * this.ecommerceCost
      );
      costBoxElement.setAttribute(
        'data-ecommercecost',
        Math.ceil(this.ecommerceQty * this.ecommerceCost)
      );
    });
  }

  changeRadioToggleChangeHandler(
    allToggleOnOffInput,
    dataObj,
    updatedDataObj,
    costitemId
  ) {
    this.allToggleOnOffInput = allToggleOnOffInput;
    const costBoxElement = document.getElementById(`addons-cost-box`);

    this.totalCostOfAddons = this.costCalc.getCostOfAllAddons(dataObj);
    // console.log(this.totalCostOfAddons);


    this.allToggleOnOffInput.forEach((too) => {
      too.addEventListener('change', (tooe) => {
        // console.log({[tooe.target.name]: tooe.target.checked });
        if (costitemId) {
          updatedDataObj[tooe.target.name] = tooe.target.checked;
        } else {
          dataObj[tooe.target.name] = tooe.target.checked;
        }
        const getNewVal = this.costCalc.getCostOfSingleAddon(tooe.target.name);
        if (tooe.target.checked) {
          this.totalCostOfAddons += getNewVal;
        } else {
          this.totalCostOfAddons -= getNewVal;
        }
        costBoxElement.textContent = this.totalCostOfAddons;
        costBoxElement.setAttribute('data-addonscost', this.totalCostOfAddons);
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
      // console.log(updatedDataObj, dataObj);
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
