const fs = require("fs")
const env_vars = process.env

const envData = fs.readFileSync("./.env").toString().split("\n")

envData.forEach(variables => {
    const [key,value] = variables.split('=')
    process.env[key] = value
})

console.log(env_vars);