class CostCalculation {
  sliderItemDefaultValue(currentItemVal) {
    if (currentItemVal) {
      this.currentItemVal = currentItemVal;
    } else {
      this.currentItemVal = 0;
    }
    return this.currentItemVal;
  }

  formatNumberOfPage(percentageValue, step) {
    this.step = step;
    this.percentageValue = percentageValue;
    if (this.percentageValue === undefined) {
      return '';
    }

    // console.log(this.percentageValue, this.percentageValue > 1);
    if (this.percentageValue > 1 && this.percentageValue <= 20) {
      return 5;
    }
    if (this.percentageValue > 20 && this.percentageValue <= 40) {
      return 10;
    }
    if (this.percentageValue > 40 && this.percentageValue <= 60) {
      return 15;
    }
    if (this.percentageValue > 60 && this.percentageValue <= 80) {
      return 20;
    }
    if (this.percentageValue > 80 && this.percentageValue <= 100) {
      return `${25}+`;
    }
    return this.percentageValue;
  }

  formatLogoDesign(percentageValue, step) {
    this.step = step;
    this.percentageValue = percentageValue;
    if (
      this.percentageValue === undefined ||
      this.percentageValue === '' ||
      this.percentageValue === '0'
    ) {
      return 'No need';
    }

    // console.log(this.percentageValue, this.percentageValue > 1);
    if (this.percentageValue > 1 && this.percentageValue <= 33.9999) {
      return 'Basic';
    }
    if (this.percentageValue > 33.9999 && this.percentageValue <= 66.9999) {
      return 'Medium';
    }
    if (this.percentageValue > 66.9999 && this.percentageValue <= 100) {
      return 'Complex';
    }
    return this.percentageValue;
  }

  formatEcommerce(percentageValue, step) {
    this.step = step;
    this.percentageValue = percentageValue;
    if (
      this.percentageValue === undefined ||
      this.percentageValue === '' ||
      this.percentageValue === '0'
    ) {
      return 'No need';
    }

    // console.log(this.percentageValue, this.percentageValue > 1);
    if (this.percentageValue > 1 && this.percentageValue <= 33.9999) {
      return '1-10';
    }
    if (this.percentageValue > 33.9999 && this.percentageValue <= 66.9999) {
      return '11-100';
    }
    if (this.percentageValue > 66.9999 && this.percentageValue <= 100) {
      return '100+';
    }
    return this.percentageValue;
  }

  getCostOfDesign(perVel) {
    this.perVel = perVel; // Percentage value
    if (
      this.perVel === undefined ||
      this.perVel === null ||
      this.perVel === 0
    ) {
      this.perVel = 480;
      return this.perVel;
    }
    // console.log({
    //   prevVal: this.prevPVal,
    //   newVal: this.perVel,
    //   prevACost: this.prevACost,
    //   fdc,
    // });
    // console.log(this.perVel > 80, this.perVel <= 100);
    if (this.perVel > 1 && this.perVel <= 20) {
      // Current item and add
      // const incDecAmt = 515;
      // return this.perVel > this.prevPVal
      //   ? this.prevACost + incDecAmt
      //   : this.prevACost - incDecAmt;
      return 995;
    }
    if (this.perVel > 20 && this.perVel <= 40) {
      return 1510;
    }
    if (this.perVel > 40 && this.perVel <= 60) {
      return 1575;
    }
    if (this.perVel > 60 && this.perVel <= 80) {
      return 3100;
    }
    if (this.perVel > 80 && this.perVel <= 100) {
      return 4625;
    }
    return this.perVel;
  }

  // NOP = no of page
  getCostOfNOP(perVal) {
    this.perVal = perVal; // percentage Value
    if (
      this.perVal === undefined ||
      this.perVal === null ||
      this.perVal === 0
    ) {
      this.perVal = 0;
    }
    if (this.perVal > 1 && this.perVal <= 20) {
      return 120;
    }
    if (this.perVal > 20 && this.perVal <= 40) {
      return 270;
    }
    if (this.perVal > 40 && this.perVal <= 60) {
      return 420;
    }
    if (this.perVal > 60 && this.perVal <= 80) {
      return 570;
    }
    if (this.perVal > 80 && this.perVal <= 100) {
      return 720;
    }
    return this.perVal;
  }

  getCostOfContent(perVal) {
    this.perVal = perVal;

    if (
      this.perVal === undefined ||
      this.perVal === null ||
      this.perVal === 0
    ) {
      this.perVal = 0;
    }
    if (this.perVal > 1 && this.perVal <= 33.33) {
      return 1;
    }
    if (this.perVal > 33.33 && this.perVal <= 66.66) {
      return 2;
    }
    if (this.perVal > 66.66 && this.perVal <= 99.99) {
      return 3;
    }
    return this.perVal;
  }

  getCostOfEcommerce(perVal) {
    this.perVal = perVal;
    if (
      this.perVal === undefined ||
      this.perVal === null ||
      this.perVal === 0
    ) {
      this.perVal = 0;
    }
    if (this.perVal > 1 && this.perVal <= 33.33) {
      return 1;
    }
    if (this.perVal > 33.33 && this.perVal <= 66.66) {
      return 4.6666;
    }
    if (this.perVal > 66.66 && this.perVal <= 99.99) {
      return 9.3333;
    }
    return this.perVal;
  }

  getCostOfSingleAddon(addonItem) {
    this.costVal = 0;
    this.addonItem = addonItem;

    switch (addonItem) {
      case 'leadgen':
        this.costVal = 250;
        break;
      case 'galary':
        this.costVal = 250;
        break;
      case 'schedule':
        this.costVal = 250;
        break;
      case 'social':
        this.costVal = 250;
        break;
      case 'search':
        this.costVal = 1500;
        break;
      case 'profile':
        this.costVal = 2000;
        break;
      case 'tracking':
        this.costVal = 100;
        break;
      case 'chat':
        this.costVal = 100;
        break;
      case 'blog':
        this.costVal = 500;
        break;
      default:
        this.costVal = 0;
    }

    return this.costVal;
  }

  getCostOfAllAddons(dataObj) {
    this.dataObj = dataObj;
    let allItemCost = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const [objKey, objVal] of Object.entries(this.dataObj)) {
      // eslint-disable-next-line no-console
      // console.log(objKey, objVal);
      if (objVal === true) {
        const singleItemCost = this.getCostOfSingleAddon(objKey);
        allItemCost += singleItemCost;
      }
    }
    return allItemCost;
  }
}

export default CostCalculation;
