var userPublicKey = document.getElementById("userPublicKey");
var userPrivateKey = document.getElementById("userPrivateKey");

var options = {
    userIds: [{ name: 'user', email: 'user@example.com' }],
    numBits: 2048,
    passphrase: 'password'
};

var pubKey, privKey;
openpgp.generateKey(options).then(key => {
    privateKey = key.privateKeyArmored;
    publicKey = key.publicKeyArmored;
		userPublicKey.innerHTML = publicKey;
		userPrivateKey.innerHTML = privateKey;  
});
