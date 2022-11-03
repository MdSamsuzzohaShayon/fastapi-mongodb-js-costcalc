import InterfaceIntraction from './InterfaceIntraction';

class OptionIntractions extends InterfaceIntraction {
  constructor(allExpendedContents, allItemOpenBtnsElement) {
    super();
    // console.log('OptionIntractions');
    this.allExpendedContents = allExpendedContents;
    this.allItemOpenBtnsElement = allItemOpenBtnsElement;
  }

  expandParticularOption() {
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
  }
}

export default OptionIntractions;
