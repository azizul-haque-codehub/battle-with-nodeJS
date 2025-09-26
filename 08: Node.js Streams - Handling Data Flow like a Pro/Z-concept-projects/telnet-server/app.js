// telnet-server.js
const net = require("net");

// ANSI escape codes for colors
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const CYAN = "\x1b[36m";

const server = net.createServer((socket) => {
  console.log("Client connected");

  // Welcome message
  socket.write(CYAN + "Welcome to My Telnet Server!\n" + RESET);
  socket.write(YELLOW + "Type something and I will echo it back.\n\n" + RESET);

  // Send a little animation (rotating bar)
  let i = 0;
  const frames = ["|", "/", "-", "\\"];
  const interval = setInterval(() => {
    socket.write("\r" + GREEN + "Loading " + frames[i % frames.length] + RESET);
    i++;
  }, 200);

  // Echo client input
  socket.on("data", (data) => {
    console.log(data.buffer);
    socket.write("\n" + BLUE + "You typed: " + RESET + data.toString());
  });

  socket.on("end", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});

// Run server on port 2323
server.listen(2323, () => {
  console.log("Telnet server running on port 2323");
});
