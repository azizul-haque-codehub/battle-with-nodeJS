import fs from 'fs';

console.log(fs.readFileSync(process.argv[2]).toString());