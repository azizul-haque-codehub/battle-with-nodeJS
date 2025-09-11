
-💡 UTF-8 হলো **variable-length encoding**
— একেকটা character 1 byte থেকে 4 byte পর্যন্ত হতে পারে:


### 4. Encoding Pattern
UTF-8 নির্দিষ্ট **বাইনারি pattern** ব্যবহার করে বোঝায় কত byte লাগবে:
- 1 byte: `0xxxxxxx` -Here 7 bits are actual bits for character
- 2 byte: `110xxxxx 10xxxxxx` -Here 11 bits are actual bits for character
- 3 byte: `1110xxxx 10xxxxxx 10xxxxxx` -Here 16 bits are actual bits for character
- 4 byte: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` -Here 21  bits are actual bits for character

(এখানে `x` হলো **`কোডপয়েন্টের`** bit)

 
কম্পিউটারের দৃষ্টিতে **কোনো "compound letter" নেই** — সবসময় আলাদা আলাদা **Unicode codepoint** থাকে।
তবে render করার সময় font shaping system সেগুলোকে জোড়া লাগিয়ে একসাথে **"যৌগিক অক্ষর"** বা ligature আকারে দেখায়।

---

### 📌 উদাহরণ `"ন্দ্র"`

* `ন` → U+09A8
* `্` (হসন্ত) → U+09CD
* `দ` → U+09A6
* `্` (হসন্ত) → U+09CD
* `র` → U+09B0

UTF-8 এ প্রতিটা আলাদা করে encode হয় (প্রতিটি 3 byte)।
ফলে মোট = 5 × 3 byte = 15 byte = 120 bits।
