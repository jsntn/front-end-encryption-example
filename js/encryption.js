let loader      = document.getElementById("loader"),
    userKey     = document.getElementById("userKey"),
    userPublicKey   = document.getElementById("userPublicKey"),
    userPrivateKey  = document.getElementById("userPrivateKey"); 
    unencrypted = document.getElementById("unencrypted"),
    encrypted   = document.getElementById("encrypted");

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
    userPublicKey.innerHTML = user.publicKey;
    // user.publicKey = "-----BEGIN PGP PUBLIC KEY BLOCK----- Version: OpenPGP.js v2.5.4 Comment: http://openpgpjs.org xsBNBFrtB8ABCAD4Elx/Zq1Xx9EAyIPIwWijnm3mO5lyeK46FEtX7v3b8YAb CVhJa74MxP1zv3kTriIo953xf4h0W0UYH9Wwlem2et/W4xejlfnMZCstONFo 9Zn/mfzjKavbd1tQj1/EPv6aAKNV44WNQQRYx6UBKtWwW7g4b186NluZC3/S 4geqwyBRKDMeOY+JrhkM8gzbw6/Igq71YtYo3lXvKX9IT4BGunX3B9xTri+F m9D91rdjIA/9rHySrzqnLFNhekOQ/+p/SM2bZVgSjkHmtBpMJquFhORcLzM3 J9bEZzQ9Lx0kCt4Q+flZILe57Yt45mhqHlf4uWpIY3lFuGQurKx1V4a1ABEB AAHNGnVzZXIgPGV4YW1wbGVAZXhhbXBsZS5jb20+wsB1BBABCAApBQJa7QfB BgsJBwgDAgkQtmGN00RT+p4EFQgKAgMWAgECGQECGwMCHgEAAJrHCACzo8nU s9OUQrMiLMp5bLKnFWHSBUQl5aB41ln1RvMcp28Sz1pJ97mm/jjgTivlU5ly XJdaqRt7USz+7VXrEfucRUqTDsKxTlrPerjOqzQnsC5MxwV7KdcasbDn5ANQ tsamYpTfJHEBcMPGr/INYv5ryuMzRlNQiYb2dnNtIbcZ/pa/KxKKmUADS5Hg RiwbCV51+vkeAyuvP8IdZXC88kT8wngEzPIyP1W9FDJfz8X8X/26MvbL1CcM wNAZsWJEQtIEv/oC+9+51vWkJtcttuh0G20cYTRcBzD1VCd009R7i0nOV41V zBwuGBLlzvFSTU+sBv1saxsL/vw2M9yQ1fZ0zsBNBFrtB8ABCADyUtmnsJeq MDyXp0zkVE2e4ZNGIJUTP55JSrX9T+hRQSNmDCN+Ta6EeQp1pggS5JQlU3mB snvJZyMv36kZjRsMXAWIG0p7kA+DMRbQe6/7UMj+RP/4JLmGq2/1Kh/lqohh Iu+kXVcSXC7PI0kUbZRu70sHyGOYpFyIkatLaSuhsz5NZYQO3VhNbtgcI7U1 zxBA6lMHwkJn6+Ta/E7hVEWUTyaDpvtNiXGkEGg0LE1cjQV8KLky49HIfR+N WmsJsb1E0gGhtfTyn5wVwTJeU1a91L2n+4JHLQWowPwlq8HcA4wtNav+XZqC Zxa1SsNhvugise01q+uwtM/xKXn3AC+ZABEBAAHCwF8EGAEIABMFAlrtB8EJ ELZhjdNEU/qeAhsMAABtLAf/bcwzIxak3PWpaaWBD1roEb3nwU48tEP9Llkj t4JRDkDUaKj3WmLVEWAUeO2ugifQ7FbiqSeDwCdTApNPUZDahvDwWTFz5MfH RSz/CXIReV9ALofGgNpwg04m/jocn83sXnHRiCFb7/2mh91sBFv1RWSVbre8 CAAPi8nG4UcYy5aQ2AK95I+xGaIoE/fVtTi27m5GFZ1QbaQqT4e2WavvmJmP zOP100BLDCOA4g9ZBZy74D8VR2G2blH/teVfXtAuLFX1WrGMS0wqFmfnP7AP Gqy9Ny4lQ7SVmEr90kO/GqJkkzFjKaF+zGRXDsWoJuRDaNBuvKI+LDW4+BFh Zz+2uQ== =LXcI -----END PGP PUBLIC KEY BLOCK-----";
    userPrivateKey.innerHTML = user.privateKey;
		return Promise.resolve();
	})
	.then(() => {
		// Using user's public key, we encrypt the contents of the email.
		const options = {
			data: JSON.stringify(email),
			publicKeys:  openpgp.key.readArmored(user.publicKey).keys
		};
		unencrypted.innerHTML = "Plain text message : \r\n\r\n" + options.data;

		return openpgp.encrypt(options)
	})
	.then((cipherText)=>{
		// We get the cipherText which is the encrypted contents of the email.
		message = cipherText.data;
		encrypted.innerHTML = "Encrypted message : \r\n\r\n" + message;
		return Promise.resolve();		
	})
	.catch((err)=>{
		// In case something goes wrong
		console.error(err);
	})
