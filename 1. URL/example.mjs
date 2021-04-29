// Conforms to the WHATWG URL Standard

const url = new URL('https://example.org/foo/?a=b#c');

console.log(url.origin);

console.log(url.searchParams);

url.searchParams.set('x', 'z');

console.log(url.href);

// (oh, and btw, Node.js is more spec compliant than Chrome ;-) ...)


const url2 = new URL('/relative/path', 'https://example.org');

url2.hash = 'a hash value';

console.log(url2.href);

// Includes the URLSearchParams object

// url.parse() and the querystring module
// have been marked as "Legacy" ... new code
// should be using the standard, portable API
