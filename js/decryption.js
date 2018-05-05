let loader      = document.getElementById("loader"),
    userKey     = document.getElementById("userKey"),
    userPublicKey   = document.getElementById("userPublicKey"),
    userPrivateKey  = document.getElementById("userPrivateKey"); 
    unencrypted = document.getElementById("unencrypted"),
    encrypted   = document.getElementById("encrypted"),
    final       = document.getElementById("final"),
    temp        = document.getElementById("temp");

/** 
	Options for generating keys, we need to provide the number
	of bits for the keys, the larger the number the stronger 
	the keys are, but they become harder to generate, we need
	to provide a passphrase so we can later decrypt the keys.
**/
let keyOptions = {
	userIds: [{name: "user", email: "example@example.com"}],
	numBits: 2048,
	passphrase: "password"
	//you would get the passphrase from an input field normally
}

let user = {},
    message = "",
    email = {
			subject: "Hey there!",
			body: "This is a test text."
		};

/**
	Here we generate keys using the options provided above,
	we save the keys in local objects, but you would usually
	store them in a database, or some other permanent storage.
**/

openpgp.generateKey(keyOptions)
	.then(key => {
		user.privateKey = key.privateKeyArmored;
		user.publicKey = key.publicKeyArmored;
		userKey.innerHTML = "keys generated.";
    user.publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK----- 
Version: OpenPGP.js v2.5.4 
Comment: http://openpgpjs.org 

xsBNBFrtKN8BCADypOzu1VPPmMnAfSx45HwiQ/G+DUnVKegs2EXJdsBHbADH 
a1C7fDZFELUoI6wSC1PiLa0mOZcoZDHQCSmD5WIk+aIB/rXYW40crzZTuvxl 
mjjbKQ4hfLsLgDNzStNIa/NSJa8wU9MB1zf3zevvW0z15/Medp5BA+1bPOyP 
Xz9EzBMe2msuPfrI6PcesgSHzrAVJxjGf0mkMkG3duStlCZAAuWYumFwvkqN 
r/1UklkW445uxMvDM/tDJU9osQMeXO8Ls8SuRKof/+13AtGIJqWYIwW9RmCQ 
4pLV5Oip3bZ+1coIdJQu2mJpLHVbwV9BjBhSy1rnr5QN4TN/Bs4zcKKvABEB 
AAHNGnVzZXIgPGV4YW1wbGVAZXhhbXBsZS5jb20+wsB1BBABCAApBQJa7Sjg 
BgsJBwgDAgkQ3iyS9uPyee0EFQgKAgMWAgECGQECGwMCHgEAAFgAB/0VX4Kb 
qjEP03Tcj5SKGntBrATlBlu5wTTlAA0reE4K9H3Mp9sh70g+193fPTT8Qjzr 
fnHdQPQ2XT0VeWxO1J44yUHoP8xgev82hGuxmHiVjdx3xgNQDKnnmpGQ8l9K 
maMUqoftnJoQl9yNOi4AaXeKK7Iy+Bwy7EHpD3ajomzIqor5PVroBccqbMvy 
a5mfP3NsIm+eVLkAkIGB68tkt29xbdPbLyqZtXy0Gp1BeWNbsArrZoSH/tTN 
tFSQcTkSuvXh+JNIP6dtRES4PivdYQHPLgQvr6oVPh/K0kF02MIvbNQq/QDO 
UD/mwZ4nhm6jEK754SGtnWiSauUVqhCXB9IEzsBNBFrtKN8BCAC4niq6tvAN 
qAOQz93Hpehh7iG/iEuFpwal3pcfK0/TOj5H0qpGhPKVPE9dW8l9kMcdMQMK 
a/f2o62q/ZSuOZAIY2kEVTB/UxQ0SMofS8ygvJRp5Rhykpey+mR32lAyIN26 
OsiWo53p1PjaunoWSgGp6Z6kX8lvE/MaYsI+TqryI3IxPrvdjptvPL80XNEQ 
zd7hfGVfSwhsor9C73zOpZEI0pHvy3W/UKUSTLpBm9wCN5rN8LCK2bBcUncz 
Jqu1oTFA/uSyk6f5HHUfy0REH+ie4ZzTfp6ZLdgC1QHQWda4SzsAVryuNHqB 
H+83RXBFqNayq3nua4ygR7E2vVVhl399ABEBAAHCwF8EGAEIABMFAlrtKOAJ 
EN4skvbj8nntAhsMAADdrAf8DKjvbPqRLsNkuMNKdd+O/mMwYEIGaeYYD+99 
NX3JwxZp1pijEX8gK8HUf768+q/vhu6Chnx9n0JqBwmytb+B6Z2GViOjq0rT 
HcftxVFmN/lsmnFM+spfePfgd+gVmjPnGb3Nn6ztadjBJEhJ6AO3YSLoigi+ 
4f5O8qWFWv9QoreZkpVOtBP1fQnyKsxBDS2yIXb2fq48oU6D01wTdHXFcvvC 
J25NPQTl+MaVYj2CNxfDPPAaOmOkbEg9tRo5Qs/dL4qd/Fvhh9PNXUplcAn8 
rbhbdPBjh+LLh/y0VRxy53UaojP5OWanYVI6Z15G2y2ik6h1S5qDiWZVfQig 
YQe5RQ== 
=Mm7U 
-----END PGP PUBLIC KEY BLOCK-----`;
    userPublicKey.innerHTML = user.publicKey;
    user.privateKey = `-----BEGIN PGP PRIVATE KEY BLOCK----- 
Version: OpenPGP.js v2.5.4 
Comment: http://openpgpjs.org 

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 
B7lF 
=lxgs 
-----END PGP PRIVATE KEY BLOCK-----`;
    userPrivateKey.innerHTML = user.privateKey;
		return Promise.resolve();
	})
	.then(() => {
		// Using user's public key, we encrypt the contents of the email.
		const options = {
			data: JSON.stringify(email),
			publicKeys:  openpgp.key.readArmored(user.publicKey).keys
		};
		// unencrypted.innerHTML = "Plain text message : \r\n\r\n" + options.data;

		return openpgp.encrypt(options)
	})
	.then((cipherText)=>{
		// We get the cipherText which is the encrypted contents of the email.
		message = cipherText.data;
		encrypted.innerHTML = "Encrypted message : \r\n\r\n" + message;
    message = `-----BEGIN PGP MESSAGE-----
Version: OpenPGP.js v2.5.4
Comment: http://openpgpjs.org

wcBMAz3X8syyYKP1AQf/Xho3Psx3Aq7Nvv3kkKq8SdnA4vRNY7n9H4x3J6Xr
G9ZShuk0ey/kvYdgBY4vrBKxbcXbevivBGOmmlVqUqLfEMeSF7IUc2lnUGGI
qPKmEzYSK8BMXBnje2vJxj8kZheO6/XnjM6t47Cmj4o5ERZ7FaBfumau8MNt
S+kj3z4z9tqkGrXi0zpeCW0z7trqtv5OOygvJTla1GCYHgr/xnWsO3BGzfNP
POL5Q2PcKeNIKl0F3n4vXsOgc55xY7VSitaoGRvnhM2B2m4N1phbjmTsOAiR
VNh1re1jF2i5Wh84Hs7xI4AnPuPx7xd50baUzp42aeYq14PHFcT6i23c7I9Y
0NJuAZ8pDb97Ht9eOQA+Frfw7fDpY/Sswfzv8P0AFA5w9w3VpAZSClqzSyWb
8wZueJWe5bBq8zhDGiEQGYOmI5UHMD85FgmUA1Vuaoviierew1HmZQBDRzQe
1vHma5pFURruDO+2IXIm438mppHSK04=
=lWiT
-----END PGP MESSAGE-----`;
    //temp.innerHTML = message;
		return Promise.resolve();		
	})
	.then(() => {
		/**
		   To decrypt the email, we now use user's private key, but before
		   we can actually use it, we need to decrypt it using the passphrase
		   we provided when we initialized the keys
	    **/
		let privateKey = openpgp.key.readArmored(user.privateKey).keys[0];

		if (privateKey.decrypt("password")) {
			return openpgp.decrypt({
            			privateKey: privateKey,
            			message: openpgp.message.readArmored(message)
            		});
		} 
		return Promise.reject('Wrong passphrase');
	})
	.then((decryptedData) => {
		// If all goes well we can now read the contents of Jonh's message :)
		final.innerHTML = "Decrypted message : \r\n\r\n" + decryptedData.data;
		console.log(JSON.parse(decryptedData.data));
	})
	.catch((err)=>{
		// In case something goes wrong
		console.error(err);
	})
