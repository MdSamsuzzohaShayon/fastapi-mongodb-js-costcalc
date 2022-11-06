/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
import GlobalEvent from './GlobalEvent';

class HomeEvent extends GlobalEvent {
  constructor() {
    super();
  }

  redirectToEditCostitem(allCostitemsEdit) {
    try {
      this.allCostitemsEdit = allCostitemsEdit;
      //   //  data-costitemId="${costitemList[i].id}"
      //   console.log(allCostitemsEdit);
      this.allCostitemsEdit.forEach((costitem) => {
        costitem.addEventListener('click', (cie) => {
          cie.preventDefault();
        //   console.log(cie.target.dataset.costitemid);
          const costitemId = cie.target.dataset.costitemid;
          window.location.replace(`${window.location.origin}/index.html?costitemId=${costitemId}`)
        });
      });
    } catch (error) {
      console.log('Error from - /EventListener/DashboardEvent.js');
      console.log(error);
    }
  }
}

export default HomeEvent;
