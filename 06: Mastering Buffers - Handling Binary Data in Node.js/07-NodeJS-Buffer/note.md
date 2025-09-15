- **NodeJS Buffer**
    <aside>
    💡
    
    ### Why NodeJS Buffer Isolated to Javascript Buffer ?
    
    - Pure JavaScript Buffer is great with Unicode-encoded strings but it does not handle binary data very well. It is not problematic when we perform an operation on data at the browser level
    - but at the time of dealing with `TCP stream` and performing a `read-write operation on the file system` is required to deal with **`pure` binary data**.
    - **In Node, Buffer is used to store and manage binary data**. **Buffer in Node is a built-in object** used to **perform operations on `raw` binary data**. The buffer class allows us to handle the binary data directly.
    - https://www.geeksforgeeks.org/node-js/what-is-buffer-in-node-js/
    </aside>
    
    💾 Buffer in Node.js—
    A Buffer in Node.js is just a specialized version of Uint8Array (i.e. an array of bytes) that comes with extra methods and features provided by Node.js — specifically designed for binary data handling 📦.
    
    🌐 Environment Info
    ✅ Available globally in Node.js
    ❌ Not available in the browser
    
    - ⚠️ new Buffer() is deprecated due to security risks
    
    import { Buffer } from "buffer"
    ✅ Use Buffer.from() or Buffer.alloc() instead
    
    🛠️ Ways to Create a Buffer
    ✅ 1. Using Buffer.alloc(size)
    🔹 Creates an empty buffer of the given size
    🔹 Allocates memory safely (fills with 0s by default)
    const buffer = Buffer.alloc(4); // 4 bytes (32 bits)
    
    ✅ 2. Using Buffer.from(...)
    🔹 Creates a buffer from a string, array, or ArrayBuffer
    🔹 Internally allocates more memory than required
    const arrayBuffer = new ArrayBuffer(4);
    const bufferFromAB = Buffer.from(arrayBuffer);
    
    🧪 Quick Test
    import { Buffer } from "buffer";// Create a buffer from an empty ArrayBuffer
    const a = new ArrayBuffer(4);
    const nodeBuffer = Buffer.from(a);
    // Print buffer content as string
    console.log(nodeBuffer.toString());
    // Output: empty string (since no text is stored)
    
    📝 Note:
    If this was just a plain ArrayBuffer or a Uint8Array, we would need to use TextDecoder to manually decode the content like this:
    const decoder = new TextDecoder("utf-8");
    console.log(decoder.decode(new Uint8Array(a)));
    🚀 But with Buffer, we don’t need TextDecoder!
    The .toString() method automatically decodes the byte content using UTF-8 by default. This makes Buffer more convenient for handling text-based binary data in Node.js.
