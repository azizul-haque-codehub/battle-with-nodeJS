# 🔹 Technical Working Principle

Think of Base64 as a **6-bit mapping**:

1. Input length must be multiple of `3`bytes, if not `=` added for make lenth as padding.
2. **Input** = binary stream 8-bit bytes.
3. Split into groups of **3 bytes (24 bits)**.
    
    ```
    [xxxxxxxx][yyyyyyyy][zzzzzzzz] → total 24 bits
    
    ```
    
4. Re-split into **4 groups of 6 bits**:
    
    ```
    [xxxxxx][xxyyyy][yyyyzz][zzzzzz]
    ```
    
5. Each 6-bit chunk (0–63) maps to one **Base64 character**.

🧾 Key Facts:

🎯 Purpose: Encode binary data (like files, images) as text.