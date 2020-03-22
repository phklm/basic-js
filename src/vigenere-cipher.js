let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.reverse = isReverse;
}

encrypt(message, key) {
    if (!message || !key)
        throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let n = 0;
    let res = message.split('').map(i => {
        let char = alphabet.indexOf(i);
        if (char < 0) return i;

        let keychar = alphabet.indexOf(key[n]);
        let d = (char + keychar) % alphabet.length;
        n = (n + 1) % key.length;
        return alphabet[d];
    });

    if (this.reverse)
        return res.join('');
    return res.reverse().join('');
}

decrypt(message, key) {
    if (!message || !key)
        throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let n = 0;
    let res = message.split('').map(i => {
        let char = alphabet.indexOf(i);
        if (char < 0) return i;

        let keychar = alphabet.indexOf(key[n]);
        let d = (alphabet.length + char - keychar) % alphabet.length;
        n = (n + 1) % key.length;
        return alphabet[d];
    });

    if (this.reverse)
        return res.join('');
    return res.reverse().join('');
}

}
module.exports = VigenereCipheringMachine;
