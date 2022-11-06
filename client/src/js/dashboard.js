import DashboardEvent from './EventListener/DashboardEvent';
import FetchData from './Utils/FetchData';
import DashboardUserInterface from './UserInterface/DashboardUserInterface';

document.addEventListener('DOMContentLoaded', (domE) => {
  domE.preventDefault();

  /**
   * @class initializations
   * */
  const fetchData = new FetchData();
  const dashboardInt = new DashboardUserInterface();
  const dashboardEvt = new DashboardEvent();
  /**
   * @var - declare variables
   */
  let costitemList = [];

  const tableWrapper = document.querySelector('.cost-calculated-table-wrapper');
  (async () => {
    // const response = await fetchData.fetchCostitemDataByIP();
    // console.log("ranning");
    costitemList = await fetchData.fetchCostitemDataByIP();
    console.log(costitemList);
    dashboardInt.makeCostitemTable(tableWrapper, costitemList);
    /**
     * @event
     * event listener for edit and delete
     */
    const allCostitemsEdit = document.querySelectorAll('.costitem-edit');
    dashboardEvt.redirectToEditCostitem(allCostitemsEdit);
  })();

});
