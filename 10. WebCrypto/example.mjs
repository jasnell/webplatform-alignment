
import { webcrypto } from 'crypto';

const key = await webcrypto.subtle.generateKey({
  name: 'AES-GCM',
  length: 256,
}, true, [ 'encrypt', 'decrypt' ]);

const data = 'some secret data';

const additionalData = 'hello world';
const iv = webcrypto.getRandomValues(new Uint8Array(12));
const tagLength = 128;

const cipher = await webcrypto.subtle.encrypt({
  name: 'AES-GCM',
  additionalData,
  tagLength,
  iv,
}, key, data);

const plaintext = await webcrypto.subtle.decrypt({
  name: 'AES-GCM',
  additionalData,
  tagLength,
  iv,
}, key, cipher);

const dec = new TextDecoder();

console.log(dec.decode(plaintext));

