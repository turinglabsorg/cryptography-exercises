const { createECDH, ECDH } = require('crypto');

const alice = createECDH('secp256k1');
alice.generateKeys();

let aliceKeys = {
    public: alice.getPublicKey('hex', 'compressed'),
    private: alice.getPrivateKey('hex', 'compressed')
}

const bob = createECDH('secp256k1');
bob.generateKeys();

let bobKeys = {
    public: bob.getPublicKey('hex', 'compressed'),
    private: bob.getPrivateKey('hex', 'compressed')
}

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');
console.log(JSON.stringify(aliceKeys))
console.log(JSON.stringify(bobKeys))
console.log(aliceSecret)
console.log(bobSecret)