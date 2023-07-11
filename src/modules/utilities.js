class Utilities {
    constructor(api) {
      this.api = api;
    }
  
    // Convert DOT to Planck
    dotToPlanck(dot) {
      return this.api.registry.createType('Balance', dot).to('planck').toString();
    }
  
    // Convert Planck to DOT
    planckToDot(planck) {
      return this.api.registry.createType('Balance', planck).to('dot').toString();
    }
  }
  
  module.exports = Utilities;
  