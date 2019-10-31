const { createECDH, ECDH } = require('crypto');
var fs = require('fs');

const ecdh = createECDH('secp256k1');
ecdh.generateKeys();

const publicKey = ecdh.getPublicKey('hex', 'compressed');
const privateKey = ecdh.getPrivateKey('hex', 'compressed');

const uncompressedPubKey = ECDH.convertKey(publicKey,
                                        'secp256k1',
                                        'hex',
                                        'hex',
                                        'uncompressed');

let keys = {
    public: publicKey,
    private: privateKey,
    uncompressedPubKey: uncompressedPubKey
}

fs.writeFile('keys/ec', JSON.stringify(keys), function (err) {
    if (err) throw err;
});
console.log(JSON.stringify(keys));
