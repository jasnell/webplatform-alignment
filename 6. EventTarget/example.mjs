
const et = new EventTarget();

et.addEventListener('example', (event) => {
  console.log(event);
}, { once: true });

et.dispatchEvent(new Event('example'));

// Several things in Node.js are now EventTargets
// * AbortSignal
// * MessagePort
//
// Likely more to come later.

// EventTarget is a lot slower than EventEmitter.
// EventEmitter is still preferred when code portability is not required.

// You can create your own event subclasses..

class MyEvent extends Event {
  constructor() {
    super('myevent');
  }
}
