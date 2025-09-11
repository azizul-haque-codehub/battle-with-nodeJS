
-💡 UTF-8 হলো **variable-length encoding**
— একেকটা character 1 byte থেকে 4 byte পর্যন্ত হতে পারে:


### 4. Encoding Pattern
UTF-8 নির্দিষ্ট **বাইনারি pattern** ব্যবহার করে বোঝায় কত byte লাগবে:
- 1 byte: `0xxxxxxx` -Here 7 bits are actual bits for character
- 2 byte: `110xxxxx 10xxxxxx` -Here 11 bits are actual bits for character
- 3 byte: `1110xxxx 10xxxxxx 10xxxxxx` -Here 16 bits are actual bits for character
- 4 byte: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` -Here 21  bits are actual bits for character

(এখানে `x` হলো **`কোডপয়েন্টের`** bit)