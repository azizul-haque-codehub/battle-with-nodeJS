import { toast } from "./toast.js";
window.toast = toast;
const input = document.querySelector("input");
const canvas = document.querySelector("canvas");
input.addEventListener("change", async () => {
  const file = input.files[0];
  const arrBuf = await file.arrayBuffer();
  console.log("Original ArrayBuffer:", arrBuf);

  // Stream reading
  const readStream = file.stream().getReader();
  // console.log(await readStream.read());
  // console.log(await readStream.read());
  // while (true) {
  //   const { value, done } = await readStream.read();
  //   console.log(value);
  //   if (done) break;
  // }

  // for await (const chunk of readStream ) {
  //   console.log(chunk);
  // }

  //   const txt =await file.text("u");
  // console.log(txt);

  const ctx = canvas.getContext("2d");
  // Image Object তৈরি
  if (!file.type.includes("image/")) return alert("this is not an image");
  const img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // Canvas pixel data access
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data; // Uint8ClampedArray (RGBA bytes)
    console.log(data.length);
    // Mind-blowing effect: invert colors
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // Red
      data[i + 1] = 255 - data[i + 1]; // Green
      data[i + 2] = 255 - data[i + 2]; // Blue
      // Alpha (data[i+3]) untouched
    }

    // new image update
    ctx.putImageData(imageData, 0, 0);
    console.log("Pixel-level manipulation done!");
    toast("done");
  };
});

// // the File api is an JS api
// import fs from 'fs';
// const buf = fs.readFileSync("./script.js");
// // const file = new File(buf, "./x-index.html");
// const blob = new Blob(buf,{type:"text/txt"})
// console.log(blob.text());
// const arrBuf = await blob.arrayBuffer();
// console.log("Original ArrayBuffer:", arrBuf);

// // Stream reading
// const readStream = blob.stream().getReader();
// while (true) {
//   const { value, done } = await readStream.read();
//   console.log(value);
//   if (done) break;
// }
// const txt = await blob.text( );
// console.log(txt);

// async function playVideo() {
//   const response = await fetch("http://localhost:4000");
//   const reader = response.body.getReader();

//   const chunks = [];
//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;
//     chunks.push(value);
//   }

//   // merge all chunks into single blob
//   const videoBlob = new Blob(chunks, { type: "video/webm" });

//   // create object URL
//   const videoURL = URL.createObjectURL(videoBlob);
// console.log({chunks,videoBlob,videoURL});
//   // set as video source
//   const videoElement = document.getElementById("myVideo");
//   videoElement.src = videoURL;
//   videoElement.play();
// }

// playVideo();

//  async function streamVideo() {
//   const video = document.getElementById("myVideo");
//   const mediaSource = new MediaSource();
//   video.src = URL.createObjectURL(mediaSource);

//   mediaSource.addEventListener("sourceopen", async () => {
//     // Important: only add SourceBuffer when mediaSource is open
//     let sourceBuffer;
//     try {
//       sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp9"');
//     } catch (e) {
//       console.error("SourceBuffer init failed:", e);
//       return;
//     }

//     const response = await fetch("http://localhost:4000");
//     const reader = response.body.getReader();

//     async function appendChunk(chunk) {
//       return new Promise((resolve, reject) => {
//         sourceBuffer.addEventListener("updateend", resolve, { once: true });
//         sourceBuffer.addEventListener("error", reject, { once: true });
//         sourceBuffer.appendBuffer(chunk);
//       });
//     }

//     async function pump() {
//       const { done, value } = await reader.read();
//       if (done) {
//         // সব chunk শেষ হলে
//         if (mediaSource.readyState === "open") {
//           mediaSource.endOfStream();
//         }
//         return;
//       }

//       try {
//         await appendChunk(value);
//       } catch (err) {
//         console.error("appendBuffer failed:", err);
//         return;
//       }

//       pump(); // next chunk
//     }

//     pump();
//   });
// }

// streamVideo();
// console.time();
// const response = await fetch("http://localhost:4000");
// const data = await response.text();
// console.log(data);
// console.timeEnd(); // time : 57ms
console.time();
const response = await fetch("http://localhost:4000");
for await (const chunk of response.body) {
  console.log(chunk);
}
console.timeEnd(); // time : 57ms
