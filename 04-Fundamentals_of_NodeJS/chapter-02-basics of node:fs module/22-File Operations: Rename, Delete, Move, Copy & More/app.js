import { copyFile, cp, mkdir, open, rename, rmdir, stat } from "fs/promises";
import path from "path";
 
// try {
//     await copyFile("../21-writeFile/error.log","copied.txt") // of course need to provide path with filename (node docs)
// } catch (error) {
//     console.log(error);
// }

// try {
//   await cp("./src", "./test", { recursive: true }); // its also copy just file not dir
//   console.log("dir copy done");
// } catch (error) {
//   console.log(error);
// }

// try {

//   const createDir = await mkdir("./src/newfol", { recursive: true });

//   console.log(`created ${createDir}`);
// } catch (err) {
//   console.error(err.message);
// }

// let a = await open('./copid.txt')

// import { opendir } from 'node:fs/promises';

// try {
//   const dir = await opendir('./');
//   for await (const dirent of dir)
//     console.log(dirent.name);
// } catch (err) {
//   console.error(err);
// }

// try {
//     await rename("renamed_fol","./src/renamed_fol")
    
// } catch (error) {
    
// }

// try {
//     await rename("./test","./src/test")
// } catch (error) {
    
// }

// rmdir("./src/renamed_fol")

     const stats = await stat(path.join(import.meta.dirname,"./app.js"))
     console.log(stats);
    
