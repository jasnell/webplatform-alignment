
const mc = new MessageChannel();

mc.port1.onmessage = ({data}) => console.log(data);

mc.port2.postMessage('hello there');

// MessageChannel is a 1-to-1 message passing mechanism.

// MessageChannel is the primary communication between Worker Threads and the
// the main thread.

// Allows cloned or transfered values (e.g. transferring ownership of a
// typed array).
