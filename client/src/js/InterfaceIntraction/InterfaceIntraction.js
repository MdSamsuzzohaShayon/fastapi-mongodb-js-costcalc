class InterfaceIntraction {
  constructor(noLoadingElements, loadingElement) {
    console.log('InterfaceIntraction');
    this.noLoadingElements = noLoadingElements;
    this.loadingElement = loadingElement;
  }

  loadingStart() {
    this.loadingElement.classList.remove('d-none');
    // Disable loading
    this.noLoadingElements.forEach((noLoading) => {
      noLoading.classList.add('d-none');
    });
  }

  loadingTerminate() {
    this.loadingElement.classList.add('d-none');
    // Disable loading
    this.noLoadingElements.forEach((noLoading) => {
      noLoading.classList.remove('d-none');
    });
  }
}

export default InterfaceIntraction;
