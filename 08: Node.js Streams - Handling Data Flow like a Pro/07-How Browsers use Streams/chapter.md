```🌐 How Browsers Use Streams in Node.js
When you create a server using the built-in http module, Node.js internally uses streams to handle incoming and outgoing data. This mimics how browsers interact with servers.

🧠 Core Concept
When a browser sends a request to a Node.js server:
req (Request) → behaves like a Readable Stream
res (Response) → behaves like a Writable Stream
✅ This allows the browser to send and receive large files or data chunks efficiently using streaming.

💻 Example: Sending an Image in Chunks
import http from "http";
import fs from "fs/promises";
const server = http.createServer(async (req, res) => {  
res.setHeader("Access-Control-Allow-Origin", "*");

res.setHeader("Content-Type", "image/webp");

const fileHandle = await fs.open("river.webp");  

const readStream = fileHandle.createReadStream({ highWaterMark: 1000 }); // 1000 bytes  

readStream.on("data", (chunk) => {    res.write(chunk);         
 // Sending chunk to browser    readStream.pause();        
// Simulate delay    
setTimeout(() => readStream.resume(), 10);  
});  

readStream.on("end", () => {    
res.end();                 
// End response  
});
});

server.listen(4000, "localhost", () => {  console.log("✅ Server started at http://localhost:4000"
);
});

🔍 What’s Happening?
readStream reads file in chunks of 1000 bytes.
Each chunk is sent to the browser via res.write().
Stream is paused and resumed manually using setTimeout to simulate a delay — this helps visualize how streaming works.
res.end() is called when the stream ends.

🧪 Real World Behavior
The browser receives partial data progressively.
This is how video buffering, image loading, or infinite scroll features work.
Browsers can start displaying content before it's fully downloaded — thanks to streaming.

🧠 Bonus Insight
You can stream any file — images, videos, text, JSON, etc.
This helps prevent loading huge files into memory all at once.
Very efficient for performance, scalability, and UX.
``````