
// AbortController and AbortSignal

const ac = new AbortController();

ac.signal.onabort = () => console.log('Aborted!');

setTimeout(() => ac.abort(), 1000);



// Integration of AbortController / AbortSignal throughout core APIs
//
// * Child Process (exec, execFile, fork, spawn)
// * EventTarget (cancel waiting for an event)
// * File System (readFile, watch, writeFile)
// * HTTP (request)
// * Net (listen)
// * Readline / REPL (question)
// * Streams
// * Awaitable Timers
// * UDP/Dgram
//
// And more coming

// The idiomatic pattern is to pass the AbortSignal as an option
// into a cancelable operation:

import { setTimeout } from 'timers/promises';

{
  const ac = new AbortController();

  await Promise.race([
    setTimeout(1000).then(() => ac.abort()),
    setTimeout(2000, undefined, { signal: ac.signal })
      .catch(() => console.log('Aborted'))
  ]);
}
