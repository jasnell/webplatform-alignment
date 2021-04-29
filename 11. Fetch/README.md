No example for fetch yet.

Fetch *is* coming. We just have a lot of work to do to enable it.

Why?

Fetch is actually quite a bit more complicated than it seems.

We need:

* Finish Blob Implementation (Async data sources)
* Implement FormData
* Implement WHATWG Streams (ReadableStream)
* Figure out what we need to do around CORS
* Figure out what we need to do around HTTP Caching
* Figure out what we need to do around HTTP state (fetch assumes a single per origin state that doesn't exist in Node.js)
* Figure out seamless HTTP version discovery and interop (HTTP1 vs. HTTP2 vs. HTTP3)

In the meantime..... Undici!

https://github.com/nodejs/undici

