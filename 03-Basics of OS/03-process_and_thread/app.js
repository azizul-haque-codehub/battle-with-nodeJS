// multithreaded_web_crawler.js
// Requirements: npm install axios cheerio
// Run: node multithreaded_web_crawler.js

const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");
const axios = require("axios");
const cheerio = require("cheerio");

if (isMainThread) {
  // ---------------- MAIN THREAD ----------------
  const urls = [
    "https://example.com",
    "https://wikipedia.org",
    "https://nodejs.org",
    "https://developer.mozilla.org",
  ];

  let completed = 0;

  urls.forEach((url) => {
    const worker = new Worker(__filename, { workerData: url });
    worker.on("message", (data) => {
      console.log("\n--- Result from:", data.url, "---");
      console.log("Title:", data.title);
      console.log("Links:", data.links.slice(0, 5)); // show first 5 links
      completed++;
      if (completed === urls.length) {
        console.log("\nAll workers finished scraping.");
      }
    });
    worker.on("error", (err) => console.error("Worker error:", err));
    worker.on("exit", (code) => {
      if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
    });
  });
} else {
  // ---------------- WORKER THREAD ----------------
  const url = workerData;
  (async () => {
    try {
      const res = await axios.get(url, { timeout: 10000 });
      const $ = cheerio.load(res.data);
      const title = $("title").text();
      const links = [];
      $("a").each((_, el) => {
        const href = $(el).attr("href");
        if (href && href.startsWith("http")) links.push(href);
      });
      parentPort.postMessage({ url, title, links });
    } catch (err) {
      parentPort.postMessage({ url, title: "[ERROR]", links: [] });
    }
  })();
}
