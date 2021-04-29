
const text = '\x10\x20\x30\x40\x50\x60\x70\x80\x90\xFF';

const encoded = btoa(text);

console.log(encoded);

const decoded = atob(encoded);

console.log(decoded === text);


// Why is it marked legacy?

// console.log(atob(btoa('😎')));

// const enc = Buffer.from('😎').toString('base64');
// console.log(Buffer.from(enc, 'base64').toString());





// But why support it at all then?

// Over 2 million search hits for atob on github
// The atob module on npm has 16.9 million weekly downloads (1000+ dependents)
// The abab module on npm has 13.1 million weekly downloads (250+ dependents)
