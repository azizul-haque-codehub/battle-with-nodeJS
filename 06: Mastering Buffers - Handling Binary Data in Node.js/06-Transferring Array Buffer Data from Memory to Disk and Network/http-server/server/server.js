import http from "http";

const buf = new Uint8Array(8);
buf.forEach((ele, inx) => {
  buf[inx] = "Procodrr".charCodeAt(inx);
});
startServer(buf);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(responseData);
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}