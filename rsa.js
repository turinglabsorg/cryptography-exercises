const crypto = require('crypto');
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

if(argv.t !== undefined){
    if(argv.e !== undefined){
        fs.readFile('./keys/pub', (err, publicKey) => {
            if (err) throw err;
            let buffer = Buffer.from(argv.t);
            let encrypted = crypto.publicEncrypt(publicKey, buffer);
            console.log(encrypted.toString("base64"))
        });
    }else if(argv.d !== undefined){

        fs.readFile('./keys/prv', (err, privateKey) => {
            if (err) throw err;
            var buffer = Buffer.from(argv.d, "base64")
            var decrypted = crypto.privateDecrypt(
                { key: privateKey.toString() },
                buffer,
            )
            console.log(decrypted.toString("utf8"))
        });
        
    }else{
        console.log('Text and Method parameters are required!')
        console.log('Encrypt with: node rsa.js -e -t=HelloWorld')
        console.log('Decrypt with: node rsa.js -d -t=nhjQDCYp+EQIa3WHSD4gRjkjrEhGbZAeTrxoYhF1HwuynMTkiF2DwNkvkh3ZQtE699hDfKMnRjjMkNE2674VTPVwUAg0A3e5qR9670WZumja7EuhAP6JOEeaBuuB23P9MAzITmSrxHQRU8CS0N2MiUjL4gtwZfzBK2v2pByrDy2KtAyIwkWE9HLis/wgf4PGsg0XeyRRYgT/EOxEhmed2McHT3IWGG2W9WJocZbISJyjwVe5NDX4ZWyK0pkL7mYsHZ8YoZ0IXsngQSgNaMoUoLSXpgBA01zB9n5qdkIFKHLUOqr+z8GNPq2MPj0Y55Hgkm8X1ROILVcZvC0+7hNromZnXGg6OmjnS4EjB/ekY3BwYGwcukM0SdCWWFyjVxlLJZOappVYXWdKWcQq/YIj+EhIrmUbLgry/A08FHC2dMlYesJX0cIuh/clNmo9ZsNFMzWKaHmOlsae2kziuG86YO+e3K8Mek+xLMdDowfK4Iq6gBKZJIusS+K/vkYHCUIfAzHRpT7l+G47eYpKisv/bBKppgmyQY4Qby+Wv/K3orNLm6x6Eb8KG25Uhw4aU36i0RezezptjkaBbkxu+9CVZMfCE7TiK1gNXlFzrMseh9zMkhO9jXpiGclTe0yvJAYqcdC2AYSTqDvOeHwDKtpF1uZqPEBnA7LNT3V0mLxDrkc=')
    }
}else{
    console.log('Text and Method parameters are required!')
    console.log('Encrypt with: node rsa.js -e -t=HelloWorld')
    console.log('Decrypt with: node aes.js -d -t=nhjQDCYp+EQIa3WHSD4gRjkjrEhGbZAeTrxoYhF1HwuynMTkiF2DwNkvkh3ZQtE699hDfKMnRjjMkNE2674VTPVwUAg0A3e5qR9670WZumja7EuhAP6JOEeaBuuB23P9MAzITmSrxHQRU8CS0N2MiUjL4gtwZfzBK2v2pByrDy2KtAyIwkWE9HLis/wgf4PGsg0XeyRRYgT/EOxEhmed2McHT3IWGG2W9WJocZbISJyjwVe5NDX4ZWyK0pkL7mYsHZ8YoZ0IXsngQSgNaMoUoLSXpgBA01zB9n5qdkIFKHLUOqr+z8GNPq2MPj0Y55Hgkm8X1ROILVcZvC0+7hNromZnXGg6OmjnS4EjB/ekY3BwYGwcukM0SdCWWFyjVxlLJZOappVYXWdKWcQq/YIj+EhIrmUbLgry/A08FHC2dMlYesJX0cIuh/clNmo9ZsNFMzWKaHmOlsae2kziuG86YO+e3K8Mek+xLMdDowfK4Iq6gBKZJIusS+K/vkYHCUIfAzHRpT7l+G47eYpKisv/bBKppgmyQY4Qby+Wv/K3orNLm6x6Eb8KG25Uhw4aU36i0RezezptjkaBbkxu+9CVZMfCE7TiK1gNXlFzrMseh9zMkhO9jXpiGclTe0yvJAYqcdC2AYSTqDvOeHwDKtpF1uZqPEBnA7LNT3V0mLxDrkc=')
}