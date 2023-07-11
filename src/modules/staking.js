class Staking {
    constructor(api) {
      this.api = api;
    }
  
    // Fetch staking information for an account
    async getStakingInfo(accountId) {
      return await this.api.query.staking.ledger(accountId);
    }
  
    // Bonding function
    async bond(controller, value, rewardDestination) {
      // account signer needs to be added
      return await this.api.tx.staking.bond(controller, value, rewardDestination);
    }
    
    // Unbonding function
    async unbond(value) {
      // account signer needs to be added
      return await this.api.tx.staking.unbond(value);
    }
  }
  
  module.exports = Staking;
  