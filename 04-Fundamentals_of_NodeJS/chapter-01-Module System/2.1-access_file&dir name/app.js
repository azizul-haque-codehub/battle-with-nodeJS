

console.dir(import.meta.filename);
console.dir(import.meta.dirname);

// we can add more props in import.meta
import.meta.env = "/usr/dev/node"
console.log(import.meta);

// process.cwd() !== import.meta.dirname

console.log(process.cwd()); // its print current working dir mean which dir to execute node app.js but if we change dir via process.chdir()
console.log(import.meta.dirname);


console.log(import.meta.dirname); // parent of app.js file mean 2.1-access_file...
process.chdir("../../") // we navigate 2 steps upper
console.log(process.cwd(),"line no : 18");//
 