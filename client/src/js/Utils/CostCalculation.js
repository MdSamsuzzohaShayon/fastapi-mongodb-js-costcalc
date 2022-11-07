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
    if (this.percentageValue === undefined || this.percentageValue === '' || this.percentageValue === '0') {
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
    if (this.percentageValue === undefined || this.percentageValue === '' || this.percentageValue === '0') {
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
}

export default CostCalculation;
