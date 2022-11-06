/* eslint-disable no-useless-constructor */
import GlobalInterface from './GlobalInterface';

class HomeUserInterface extends GlobalInterface {
  constructor() {
    super();
  }

  makeCostitemTable(tableWrapper, costitemList) {
    this.tableWrapper = tableWrapper;
    this.costitemList = costitemList;
    // costitemList.forEach((costitem)=>{

    // });
    const tableElement = this.makeATableOfCostitemList(costitemList);
    tableWrapper.appendChild(tableElement);
  }
}

export default HomeUserInterface;
