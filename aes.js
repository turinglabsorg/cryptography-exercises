const crypto = require('crypto');
var argv = require('minimist')(process.argv.slice(2));

if(argv.p !== undefined && argv.t !== undefined){
    if(argv.e !== undefined){
        const algorithm = 'aes-192-cbc';
        const password = argv.p;
        const key = crypto.scryptSync(password, 'salt', 24);
        const iv = Buffer.alloc(16, 0);

        const cipher = crypto.createCipheriv(algorithm, key, iv);

        let encrypted = '';
        cipher.on('readable', () => {
            let chunk;
            while (null !== (chunk = cipher.read())) {
                encrypted += chunk.toString('hex');
            }
        });
        cipher.on('end', () => {
            console.log(encrypted);
        });

        cipher.write(argv.t);
        cipher.end();
    }else if(argv.d !== undefined){

        const crypto = require('crypto');
        const algorithm = 'aes-192-cbc';
        const password = argv.p;
        const key = crypto.scryptSync(password, 'salt', 24);
        const iv = Buffer.alloc(16, 0);

        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        let decrypted = '';
        decipher.on('readable', () => {
        while (null !== (chunk = decipher.read())) {
            decrypted += chunk.toString('utf8');
        }
        });
        decipher.on('end', () => {
            console.log(decrypted);
        });

        const encrypted = argv.t;
        decipher.write(encrypted, 'hex');
        decipher.end();


    }else{
        console.log('Text, Password and Method parameters are required!')
        console.log('Encrypt with: node aes.js -e -t=HelloWorld -p=MySuperPassWord')
        console.log('Decrypt with: node aes.js -d -t=81cdd89449e32d34c73bc4e96ffa1c25 -p=MySuperPassWord')
    }
}else{
    console.log('Text, Password and Method parameters are required!')
    console.log('Encrypt with: node aes.js -e -t=HelloWorld -p=MySuperPassWord')
    console.log('Decrypt with: node aes.js -d -t=81cdd89449e32d34c73bc4e96ffa1c25 -p=MySuperPassWord')
}