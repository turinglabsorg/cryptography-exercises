var bitcoin = require('bitcoinjs-lib')
var bitcoinMessage = require('bitcoinjs-message')
var argv = require('minimist')(process.argv.slice(2))

const keyPair = bitcoin.ECPair.makeRandom()
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
var privateKey = keyPair.privateKey

console.log('Generated new address: ' + address)
console.log('Private key is: ' + keyPair.toWIF())
console.log('Public Key is: ' + keyPair.publicKey.toString('hex'))

if(argv.m !== undefined){
    var message = argv.m
    var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
    console.log('Signature for message "'+argv.m+'" is: ' + signature.toString('hex'))
    console.log('Verification is: ' + bitcoinMessage.verify(message, address, signature))
}