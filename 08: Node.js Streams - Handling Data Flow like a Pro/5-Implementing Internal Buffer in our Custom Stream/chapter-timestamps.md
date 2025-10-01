``` const fd = fs.openSync("./nums.txt", "w");
for (let index = 0; index <= 100000; index++) {
  fs.writeSync(fd, `${index}, `);
}
```
1. ekane amra file open kore write korchi jeta kubi faster than writeFile method we know reason .(once open file) 
2. kintu ekane o ekta issue acche.jemon amra bar bar directly disk e write kortachi. kintu eta solution hocche Stream & buffer
3. ReadStream & writeStream are use this buffer mechanism to fast and performance
4. Now we are implementaing our own stream and its internal buffer to write in RAM/memory than its write on Disk . while we are write ram/memory its extremely fast .
5. let's implement its
- buf.write method args and return value
-
