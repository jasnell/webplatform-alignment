

const enc = new TextEncoder();
const dec = new TextDecoder();

console.log(dec.decode(enc.encode('hêlló')));

