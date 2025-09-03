#!/usr/bin/env node
// explanation of avobe line -> #! its called shebang , /usr/bin/env its path of env, we know when we provide a path in command its execute the executable file in here exaclty happened similar
// #!/usr/local/nodejs/bin/node -> its work only one system linux but if this app install windows then ? not work
console.log(process.cwd())
console.log("hello world")