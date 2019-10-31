const { generateKeyPair } = require('crypto');
var fs = require('fs');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
}, (err, publicKey, privateKey) => {
  console.log(publicKey)
  console.log(privateKey)
  fs.writeFile('keys/pub', publicKey, function (err) {
    if (err) throw err;
  });
  fs.writeFile('keys/prv', privateKey, function (err) {
    if (err) throw err;
  });
});
