import { BACKEND_URL } from '../config/keys';

class FetchData {
  constructor() {
    this.backend_url = BACKEND_URL;
    const params = new URLSearchParams(window.location.search);
    this.costitemId = params.get('costitemId');
  }

  async fetchCostitemData() {
    this.costitemList = [];
    try {
      const userid = window.localStorage.getItem('userid');
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(
        `${BACKEND_URL}/costitem/user/?userid=${userid}`,
        options
      );
      if (response.status === 200 || response.status === 201) {
        const text = await response.text();
        const jsonRes = JSON.parse(text);
        this.costitemList = jsonRes;
      }
    } catch (error) {
      console.log(error);
    }
    return this.costitemList;
  }

  async fetchSingleCostitemDataByCostitemId(costitemId) {
    // this.currentCostitem = null;
    this.costitemId = costitemId;
    try {
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch(
        `${BACKEND_URL}/costitem/single/${this.costitemId}`,
        options
      );
      if (response.status === 200 || response.status === 201) {
        const text = await response.text();
        const jsonRes = JSON.parse(text);
        this.currentCostitem = jsonRes;
        return this.currentCostitem;
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

export default FetchData;
