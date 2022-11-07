import InterfaceIntraction from './InterfaceIntraction';

class HomeIntractions extends InterfaceIntraction {
  // eslint-disable-next-line no-useless-constructor
  constructor(noLoadingElements, loadingElement) {
    super(noLoadingElements, loadingElement);
    // console.log('HomeIntractions');
  }

  expandParticularOption(allExpendedContents, allItemOpenBtnsElement) {
    try {
      this.allExpendedContents = allExpendedContents;
      this.allItemOpenBtnsElement = allItemOpenBtnsElement;
      // console.log(this.allOptions, this.allItemOpenBtnsElement);
      // data-optionitem="agency-wordpress"
      this.allItemOpenBtnsElement.forEach((aiob) => {
        // console.log(aiob);
        aiob.addEventListener('click', (aiobe) => {
          // console.log(
          //   aiobe.target.parentElement.dataset.optionbtn,
          //   aiobe.target.dataset.optionbtn
          // );
          let expandedContent = null;
          if (aiobe.target.dataset.optionbtn) {
            expandedContent = document.querySelector(
              `[data-optionitem="${aiobe.target.dataset.optionbtn}"]`
            );
          } else if (aiobe.target.parentElement.dataset.optionbtn) {
            expandedContent = document.querySelector(
              `[data-optionitem="${aiobe.target.parentElement.dataset.optionbtn}"]`
            );
          }
          if (expandedContent) {
            if (expandedContent.classList.contains('d-none')) {
              expandedContent.classList.remove('d-none');
            } else {
              expandedContent.classList.add('d-none');
            }
            //   if (this.defaultExpand === false) {
            //     this.defaultExpand = true;
            //   } else {
            //     // close all expended item
            //     this.allExpendedContents.forEach((aec) => {
            //       aec.classList.add('d-none');
            //     });
            //     this.defaultExpand = false;
            //   }
          }
        });
      });
    } catch (expandCntErr) {

      console.log('Error from - /InterfaceIntraction/HomeIntractions.js');
      console.log(expandCntErr);
    }
  }

  scrollToParticularElement(allElementsBtns){
    this.allElementsBtns = allElementsBtns;

    allElementsBtns.forEach((aeb)=>{
      aeb.addEventListener('click', (aebe)=>{
        aebe.preventDefault();
        // console.log(aebe.target.dataset.optiondetailbtn);
        const contentElement = document.querySelector(`[data-optiondetailcontent="${aebe.target.dataset.optiondetailbtn}-content"`);
        // console.log(contentElement);
        contentElement.scrollIntoView({ behavior: 'smooth'});

      });
    });
  }

  scrollToTargetedElement(btnElemnt, scrollElement){
    this.btnElemnt = btnElemnt;
    this.scrollElement = scrollElement;
    this.btnElemnt.addEventListener("click", (bee)=>{
      bee.preventDefault();
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

export default HomeIntractions;
