const Staking = require('./modules/staking');
const Utilities = require('./modules/utilities');
const KeyManagement = require('./modules/keyManagement');

class PolkadotSDK {
  constructor(nodeURL) {
    this.api = ApiPromise.create({ provider: new WsProvider(nodeURL) });
    this.staking = new Staking(this.api);
    this.utilities = new Utilities(this.api);
  }
}

module.exports = PolkadotSDK;
