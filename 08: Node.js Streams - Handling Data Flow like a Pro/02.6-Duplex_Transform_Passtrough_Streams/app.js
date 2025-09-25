#!/usr/bin/env node

// Data/Streams Transmission Mode
/**
 * 1. Duplex -> 2 dimentional at the same time Duplex মানে দুই দিকেই কাজ করতে পারে।
 * 2. Transform -> Transform stream হলো একটা Duplex stream যেটা ইনপুটের ডাটা প্রসেস করে আউটপুট দেয়।
 * 3. PassThrough আসলে একটা বিশেষ Transform stream, যেটা কিছুই করে না।
*/

import { Readable, Writable, Duplex, Transform, PassThrough } from "stream";

  