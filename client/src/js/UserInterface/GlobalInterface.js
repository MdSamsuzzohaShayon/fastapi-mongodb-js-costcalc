class GlobalInterface {
  constructor() {
    console.log('This is global interface class');
    this.domParser = new DOMParser();
  }

  //   make slider label
  makeSliderLabel(labelItemList) {
    try {
      let labelItemString = '';
      for (let i = 0; i < labelItemList.length; i += 1) {
        labelItemString += `<h5 class="slider-l-1 text-uppercase text-light-1">${labelItemList[i]}</h5>`;
      }
      const labelString = `
                          <div class="slider-lebel d-flex w-full justify-content-between mt-2">
                              ${labelItemString}
                          </div>
                          `;

      const labelElement = this.domParser.parseFromString(
        labelString,
        'text/html'
      );
      // console.log(labelElement.activeElement.childNodes[0]);
      return labelElement.activeElement.childNodes[0];
    } catch (sliderLblErr) {
      console.log('Error from - /UserInterface/GlobalInterface.js');
      console.log(sliderLblErr);
    }
    return null;
  }

  // make slider
  makeSlider(sliderName, defaultValue = 50, step = 25) {
    try {
      let pointString = '';
      const max = 100;
      const totalPointsNum = max / step;
      const totalPoints = Math.floor(totalPointsNum + 1);
      // console.log({
      //   totalPoints,
      //   defaultValue,
      //   newDefaultValue: 100 / totalPoints,
      // });
      for (let i = 0; i < totalPoints; i += 1) {
        pointString += `<li class="list-unstyled text-light-1">•</li>`;
      }

      const setname = sliderName !== null ? `name="${sliderName}"` : '';

      const sliderString = `
                          <div class="slider-control w-full mb-4 mt-2 position-relative">
                              <input
                              class="slider-range-input w-full"
                              type="range"
                              "${setname}"
                              id="${sliderName}"
                              value="${defaultValue}"
                              min="0"
                              max="100"
                              step="${step}"
                              />
                              <div class="slider-filler position-absolute" style="width: ${defaultValue}%;"></div>
                              <div class="slider-pointers w-full position-absolute">
                                  <ul class="d-flex justify-content-between">
                                      ${pointString}
                                  </ul>
                              </div>
                          </div>
                          `;

      const sliderElement = this.domParser.parseFromString(
        sliderString,
        'text/html'
      );
      return sliderElement.activeElement.childNodes[0];
    } catch (sliderErr) {
      console.log('Error from - /UserInterface/GlobalInterface.js');
      console.log(sliderErr);
    }
    return null;
  }

  makeOnOffToggleInput(inputTitle, inputName) {
    try {
      const inputString = `
                          <div class="row mb-3 justify-content-between w-full align-items-center">
                            <h4 class="h4">${inputTitle}</h4>
                            <div class="radio-toggle-input">
                              <div class="on-off-toggle">
                                <input
                                  class="on-off-toggle-input"
                                  type="checkbox"
                                  id="${inputName}"
                                  name="${inputName}"
                                />
                                <label
                                  for="${inputName}"
                                  class="on-off-toggle-slider"
                                ></label>
                              </div>
                            </div>
                          </div>
                          `;
      const sliderElement = this.domParser.parseFromString(
        inputString,
        'text/html'
      );
      return sliderElement.activeElement.childNodes[0];
    } catch (onOffToggleErr) {
      console.log(onOffToggleErr);
    }
    return null;
  }

  makeTwoLevelInputField(txtLbl1, txtLbl2, inputName) {
    try {
      const inputString = `
                          <div>
                            <label for="${inputName}" class="double-label" >${txtLbl1}</label>
                            <input
                              type="text"
                              class="form-control two-level-inputs"
                              name="${inputName}"
                              id="${inputName}"
                            />
                            <label for="${inputName}" class="double-label" >${txtLbl2}</label >
                          </div>
      `;

      const inputElement = this.domParser.parseFromString(
        inputString,
        'text/html'
      );
      return inputElement.activeElement.childNodes[0];
    } catch (tlblIErr) {
      console.log(tlblIErr);
    }
    return null;
  }
}

export default GlobalInterface;
