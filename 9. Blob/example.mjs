import { Blob } from 'buffer';

{
  const blob = new Blob(['hello ', new Uint8Array([1,2,3])]);
  console.log(blob);

  console.log(await blob.text());
  console.log(await blob.arrayBuffer());
}

// Currently, only static Blobs are supported. Soon, Blob
// will support streaming data sources such as files, network
// connections, and streams.
//
// Blob support is part of the larger effort to implement WHAT-WG
// streams and fetch support.
//
// Will also be used to make data flow more efficient in new
// network APIs.

// Still very experimental
