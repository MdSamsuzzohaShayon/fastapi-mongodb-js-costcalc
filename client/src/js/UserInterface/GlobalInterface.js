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
  makeSlider(defaultValue = 50, step = 25) {
    try {
      let pointString = '';
      const max = 100;
      const totalPointsNum = max / step;
      const totalPoints = Math.floor(totalPointsNum + 1)
      console.log({
        totalPoints,
        defaultValue,
        newDefaultValue: 100 / totalPoints,
      });
      for (let i = 0; i < totalPoints; i += 1) {
        pointString += `<li class="list-unstyled text-light-1">•</li>`;
      }

      const sliderString = `
                          <div class="slider-control w-full mb-4 mt-2 position-relative">
                              <input
                              class="slider-range-input w-full"
                              type="range"
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

  //   make fillers
  // make pointers
}

export default GlobalInterface;
