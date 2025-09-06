const { readFile } = require("fs/promises");
const main = async () => {
  try {
    const content = await readFile(process.argv[2], "utf8");
    console.log(content);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
};

main();
