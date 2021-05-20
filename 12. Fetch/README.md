No example for fetch yet.

Fetch *is* coming. We just have a lot of work to do to enable it.

Why?

Fetch is actually quite a bit more complicated than it seems.

We need:

* Finish Blob Implementation (Async data sources)

  What is a Blob? Think of it as an immutable sequence of data
  sources.

    +-------------------------------------------------+
    |                      Blob                       |
    | +-------------+ +-------------+ +-------------+ |--> Promise<string>
    | | Data Source | | Data Source | | Data Source | |--> Promise<ArrayBuffer>
    | +-------------+ +-------------+ +-------------+ |--> stream.Readable
    +-------------------------------------------------+

    string -----------> +-------------+
    ArrayBuffer ------> |             |
    TypedArray -------> | Data Source |
    stream.Readable --> |  (buffer)   |
    Blob -------------> +-------------+

  Those data sources can be things like strings,
  TypedArrays, streams, other other blobs.

  The actual data associated with each source may or may not
  exist or be known at the time the Blob is created.

  Consuming the Blob means consuming all of the data from all
  of the sources in the sequence. The Blob is also immutable and
  idempotent from an API perspective. Once data flows into the
  Blob, it cannot be changed but it can be read multiple times.

  As part of implementing fetch (and other APIs) we should finish
  implementing Blob.

  Blob will also have relevance as part of the QUIC implementation.

* Implement FormData (optional)

  The fetch standard includes support for the FormData API, which
  provides an API for working with HTML form data. In Node.js,
  it might not make sense to implement the FormData class. That's
  not a discussion we've yet had and it's just not clear yet if it
  would be accepted.

* Implement Headers

  The fetch standard has it's own Headers object API. There is the
  start of an implementation that has been contributed to Node.js
  but it is not yet complete. Additional work will need to go into
  completing it before we can get to fetch.

* Implement WHATWG Streams (ReadableStream)

  The fetch standard is build largely around the WHATWG streams API.
  While we could choose to implement fetch around the existing
  Node.js streams API, and likely will incorporate at least some
  level of support for the Node.js streams API, in order to properly
  implement the fetch *standard* we need an implementation of WHATWG
  Streams in Node.js.

  This is not a massive effort but it has been controversial, and no
  one is eager to introduce yet another streams API into Node.js,
  particularly one that, while standard, is expected to have slower
  performance than the existing APIs.

* Figure out what we need to do around CORS
* Figure out what we need to do around HTTP Caching
* Figure out what we need to do around HTTP state (fetch assumes a single per origin state that doesn't exist in Node.js)
* Figure out seamless HTTP version discovery and interop (HTTP1 vs. HTTP2 vs. HTTP3)

In the meantime..... Undici!

https://github.com/nodejs/undici

