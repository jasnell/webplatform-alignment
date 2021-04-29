import { BroadcastChannel } from 'worker_threads';

const bc1 = new BroadcastChannel('example');
bc1.onmessage = ({data}) => {
  console.log(data);
  bc1.close();
}

const bc2 = new BroadcastChannel('example');
bc2.onmessage = ({data}) => {
  console.log(data);
  bc2.close();
}

const bc3 = new BroadcastChannel('example');
bc3.postMessage('hello')
bc3.close();


// BroadcastChannel is a one-to-many message passing API
// that works across worker threads.

// In the browser, every BroadcastChannel within the same
// origin shares a namespace. On Node.js, there's no origin
// so there's a single global namespace.
