let loader      = document.getElementById("loader"),
    userKey         = document.getElementById("userKey"),
    userPublicKey   = document.getElementById("userPublicKey"),
    userPrivateKey  = document.getElementById("userPrivateKey");

/** 
	Options for generating keys, we need to provide the number
	of bits for the keys, the larger the number the stronger 
	the keys are, but they become harder to generate, we need
	to provide a passphrase so we can later decrypt the keys.
**/
let keyOptions = {
	userIds: [{name: "userName", email: "example@example.com"}],
	numBits: 2048,
	passphrase: "123456"
	//you would get the passphrase from an input field normally
};

let user = {};

/**
	Here we generate keys using the options provided above,
	we save the keys in local objects, but you would usually
	store them in a database, or some other permanent storage.
**/

openpgp.generateKey(keyOptions)
	.then((key) => {
		user.privateKey = key.privateKeyArmored;
		user.publicKey = key.publicKeyArmored;
		loader.innerHTML = "";
		userKey.innerHTML = "keys generated.";
		userPublicKey.innerHTML = user.publicKey;
		userPrivateKey.innerHTML = user.privateKey;
		return Promise.resolve();
	})
  .catch((err)=>{
    // In case something goes wrong
    console.error(err);
  })

