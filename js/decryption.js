var userPublicKey = document.getElementById("userPublicKey");
var userPrivateKey = document.getElementById("userPrivateKey"); 
var unencrypted = document.getElementById("unencrypted");
var encrypted = document.getElementById("encrypted");
var final = document.getElementById("final");

var privateKey = `-----BEGIN PGP PRIVATE KEY BLOCK----- 
Version: OpenPGP.js v2.5.4 
Comment: http://openpgpjs.org 

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 
B7lF 
=lxgs 
-----END PGP PRIVATE KEY BLOCK-----`;

var key = openpgp.key.readArmored(privateKey).keys[0];

var encryptedMessage = `-----BEGIN PGP MESSAGE-----
Version: OpenPGP.js v2.5.4
Comment: http://openpgpjs.org

wcBMAz3X8syyYKP1AQf9Hwlkvlsx8OwtpO6Q/m5BsdvowLYl29fT8YIefW7y
u6g9sVoq0zP2W7Z+tqE1CYhpAH9o1Y1+bQDHY8wFvM5YYAAl/EcfsIuMtbJO
f/eih7F2t6k0A2jhF2E5kV+7NK00XpQslx8KdFIx2ca4l5BQXCFVPpnqrVN2
lMBSLo8ofe9zY6qhfRLuo20NgKyqW1XUxZyQ8KKmmFUaPBjRxwUNrIrh3KpA
QnpPNOnD0ZSaw0D9ep8rJ6JalTyvvrMj5maulPZ2UaB41gdSCqvqRE6Bv/D6
lK5ndCb8F+nBLz93bMEd6KtvE5YkjHzlZq3EqO1unA9e9FJd5hUez5AY0mSm
vtJVAW7wybe1ogrRv+F4jwkFkqHTbxBLad+gjixkg2fpsKzpw9s2YZJhoGf/
dGq+X7dUyj7aoczTtMcnd0SCP33JbnVwfoSGfUrPXxqoGwpaGSlLpVN8uA==
=rcTF
-----END PGP MESSAGE-----`;

encrypted.innerHTML = "Encrypted message: \r\n\r\n" + encryptedMessage;

var options = {
    message: openpgp.message.readArmored(encryptedMessage),
    privateKey: key
};

var pwd = prompt('Password, please',""); // password is `password`

if (key.decrypt(pwd)) {
  openpgp.decrypt(options).then(decryptedMessage => {
    final.innerHTML = "Decrypted message: \r\n\r\n" + decryptedMessage.data;
  });
} else {
  alert(pwd + ' is a wrong password.');
}
