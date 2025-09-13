- **1st** Understand what’s and why we need ArrayBuffer() constructor

<aside>
💡

The **`ArrayBuffer()`** constructor creates [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) objects.

---

## 🔹 ArrayBuffer() কিসের থেকে binary data represent করে?

1. **Existing file থেকে**
    - আপনি যদি কোনো file পড়েন (image, audio, video, text, PDF, ZIP…), সেই file **disk-এ bytes হিসেবে সংরক্ষিত থাকে**।
    - `FileReader.readAsArrayBuffer()` বা `fetch().arrayBuffer()` ব্যবহার করে সেই **bytesগুলোকে ArrayBuffer**এ load করা যায়।
    
    ```jsx
    const response = await fetch("song.mp3");
    const buffer = await response.arrayBuffer(); // song.mp3-এর binary data now in ArrayBuffer
    
    ```
    
2. **Network response থেকে**
    - HTTP request করলে server data পাঠায় **bytes** হিসেবে।
    - `Response.arrayBuffer()` দিয়ে সেই bytes capture করা হয়।
3. **Programmatically generated data থেকে**
    - আপনি JS-এ নিজেই byte values তৈরি করতে পারেন।
    
    ```jsx
    let buffer = new ArrayBuffer(4);
    let view = new Uint8Array(buffer);
    view[0] = 255; // first byte
    view[1] = 128; // second byte
    
    ```
    
4. **Shared memory / workers থেকে**
    - Multi-threaded JS (Web Workers) বা SharedArrayBuffer ব্যবহার করলে অন্য thread থেকে bytes share করা যায়।

---

💡 analogy:

- ArrayBuffer = খালি drawer
- Original data (file, network, program) = যা drawer-এ রাখা হচ্ছে
- Drawer নিজে সেই content বোঝে না, শুধু ধরে রাখে

---

</aside>

---

- The **`ArrayBuffer`** object is used to represent a generic raw binary data buffer
- **Generic** → নির্দিষ্ট type নয়, যেকোনো ধরনের binary data রাখা যায়।
- **Raw binary data** → সংখ্যা, string বা object নয়, শুধু bits/bytes।
- **Buffer** → এক অস্থায়ী memory storage যেখানে data রাখা হয়।

💡 অর্থাৎ, **ArrayBuffer** হল JavaScript-এর একটি object যা **কোনো ধরনের raw binary data ধরে রাখার জন্য** ব্যবহার করা হয়।