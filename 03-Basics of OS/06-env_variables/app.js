
const env_vars = process.env;
console.log(env_vars)


const fs = require('fs')

const fileData = fs.readFileSync("./env").toString().split("\n")

fileData.forEach((variable)=> {
 const [key,value] = variable.split("=")
 // now we can add env variable from my project env file to system env variable
 env_vars[key]=value
})
 
console.log(env_vars);