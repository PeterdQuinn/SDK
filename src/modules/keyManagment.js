const { Keyring } = require('@polkadot/keyring');

class KeyManagement {
    constructor() {
        this.keyring = new Keyring({ type: 'sr25519' });
    }

    // Creates a new key pair from the given seed and adds it to the keyring
    createPair(seed) {
        return this.keyring.addFromUri(seed);
    }

    // Retrieves a key pair by address from the keyring
    getPair(address) {
        return this.keyring.getPair(address);
    }
}

module.exports = KeyManagement;
