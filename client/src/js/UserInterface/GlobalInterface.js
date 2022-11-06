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

  makeATableOfCostitemList(costitemList) {
    let tableRows = '';
    //     "search": false,
    //     "id": "6366a37061df5f491e573d90"
    // }
    // Calculate money with all there value
    const yesNoToggle = (ynt) => (ynt ? 'Yes' : 'No');
    const preventUndefined = (ci) => (ci === undefined ? '' : ci);
    for (let i = 0; i < costitemList.length; i += 1) {
      tableRows += `
                  <tr>
                    <td class="p-1 text-center border-right border-bottom">${
                      i + 1
                    }</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.design
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.noofpage
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.content
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.ecommerce
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.profit
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].schedule
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].blog
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.writingcontrol
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${preventUndefined(
                      costitemList[i]?.flexibilitycontrol
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].chat
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].tracking
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].galary
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].leadgen
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].social
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">${yesNoToggle(
                      costitemList[i].search
                    )}</td>
                    <td class="p-1 text-center border-right border-bottom">
                      <button class="btn btn-primary rounded-2 costitem-edit" data-costitemId="${costitemList[i].id}" >Edit</button>
                    </td>
                    <td class="p-1 text-center">
                      <button class="btn btn-danger rounded-2 costitem-delete" data-costitemId="${costitemList[i].id}">Delete</button>
                    </td>
                  </tr>
                  `;
    }
    try {
      if (costitemList.length > 0) {
        const tableString = `
                            <table class="table w-full text-light-1 border">
                              <thead>
                                <tr>
                                  <th class="py-2 border-bottom border-right">Serial</th>
                                  <th class="py-2 border-bottom border-right">Design(%)</th>
                                  <th class="py-2 border-bottom border-right">Number of page(%)</th>
                                  <th class="py-2 border-bottom border-right">Content(%)</th>
                                  <th class="py-2 border-bottom border-right">Ecommerce(%)</th>
                                  <th class="py-2 border-bottom border-right">Profit(%)</th>
                                  <th class="py-2 border-bottom border-right">Scheduling / ‍‍‍Reservations</th>
                                  <th class="py-2 border-bottom border-right">Blog</th>
                                  <th class="py-2 border-bottom border-right">Comfort level writing code?(%)</th>
                                  <th class="py-2 border-bottom border-right">Desired editing flexibility?(%)</th>
                                  <th class="py-2 border-bottom border-right">Live Chat</th>
                                  <th class="py-2 border-bottom border-right">Analy‍‍‍tics & tracking</th>
                                  <th class="py-2 border-bottom border-right">Image / Video ga‍‍‍lleries</th>
                                  <th class="py-2 border-bottom border-right">Forms / Lead gene‍‍‍ration</th>
                                  <th class="py-2 border-bottom border-right">Social Media (share / lik‍‍‍e / reviews)</th>
                                  <th class="py-2 border-bottom border-right">Onsite sea‍‍‍rch</th>
                                  <th class="py-2 border-bottom border-right">Edit</th>
                                  <th class="py-2 border-bottom">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${tableRows}
                              </tbody>
                            </table>
        `;

        const tableElement = this.domParser.parseFromString(
          tableString,
          'text/html'
        );
        return tableElement.activeElement.childNodes[0];
      }
      return `<div class="p-3 text-danger-1 bg-danger-2">No item found</div>`;
    } catch (tlblIErr) {
      console.log(tlblIErr);
    }
    return null;
  }
}

export default GlobalInterface;
