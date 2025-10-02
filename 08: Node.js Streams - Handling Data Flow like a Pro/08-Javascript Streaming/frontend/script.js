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
