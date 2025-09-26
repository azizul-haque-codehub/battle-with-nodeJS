// ascii-video.js
const { spawn } = require("child_process");
const readline = require("readline");

const asciiChars = "@%#*+=-:. "; // Dark → Light mapping

function frameToAscii(frame, width, height) {
  let ascii = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width * 3; x += 3) {
      const r = frame[y * width * 3 + x];
      const g = frame[y * width * 3 + x + 1];
      const b = frame[y * width * 3 + x + 2];
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const char = asciiChars[Math.floor(brightness * (asciiChars.length - 1))];
      ascii += char;
    }
    ascii += "\n";
  }
  return ascii;
}

// ffmpeg দিয়ে ভিডিওকে raw RGB frame stream আকারে পাঠানো
const width = 80;
const height = 40;
const ffmpeg = spawn("ffmpeg", [
  "-i", "video.webm",      // ইনপুট ভিডিও ফাইল
  "-vf", `scale=${width}:${height}`,
  "-f", "rawvideo",
  "-pix_fmt", "rgb24",
  "pipe:1"
]);

ffmpeg.stderr.setEncoding("utf8"); // error log পড়ার জন্য

// প্রতি frame (width*height*3 bytes) process করা হবে
let buffer = Buffer.alloc(0);

ffmpeg.stdout.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);

  const frameSize = width * height * 3;
  while (buffer.length >= frameSize) {
    const frame = buffer.slice(0, frameSize);
    buffer = buffer.slice(frameSize);

    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    process.stdout.write(frameToAscii(frame, width, height));
  }
});

ffmpeg.on("close", () => {
  console.log("\n✅ Video ended.");
});
