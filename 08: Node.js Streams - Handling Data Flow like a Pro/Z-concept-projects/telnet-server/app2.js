// funny-telnet-server.js
const net = require("net");

// ANSI colors
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";

const server = net.createServer((socket) => {
  console.log("Client connected");

  // Funny Welcome
  socket.write(MAGENTA + "😎 Welcome to Funny Telnet Server! 😎\n" + RESET);
  socket.write(CYAN + "Type anything and see what happens...\n\n" + RESET);

  // Rotating emoji animation
  let i = 0;
  const frames = ["😜", "🤪", "😎", "🤩"];
  const anim = setInterval(() => {
    socket.write("\r" + YELLOW + "Fun Loading " + frames[i % frames.length] + RESET);
    i++;
  }, 300);

  // Echo client input with playful twist
  socket.on("data", (data) => {
    const input = data.toString().trim();
    const responses = [
      `😂 You just typed "${input}"!`,
      `🤔 Hmm... "${input}"? Interesting!`,
      `😲 OMG "${input}" is a cool word!`,
      `😎 Keep typing "${input}", I'm watching!`
    ];
    const resp = responses[Math.floor(Math.random() * responses.length)];
    socket.write("\n" + BLUE + resp + RESET + "\n");
  });

  socket.on("end", () => {
    clearInterval(anim);
    console.log("Client disconnected");
  });
});

// Run server on port 2323
server.listen(2323, () => {
  console.log("Funny Telnet server running on port 2323!");
});
