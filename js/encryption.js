var userPublicKey = document.getElementById("userPublicKey");
var userPrivateKey = document.getElementById("userPrivateKey"); 
var unencrypted = document.getElementById("unencrypted");
var encrypted = document.getElementById("encrypted");

var publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK----- 
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

var options = {
    data: 'This is a very secret message',
    publicKeys: openpgp.key.readArmored(publicKey).keys
};

unencrypted.innerHTML = "Plain text message : \r\n\r\n" + options.data;

openpgp.encrypt(options).then(encryptedData => {
		encrypted.innerHTML = "Encrypted message : \r\n\r\n" + encryptedData.data;
});
