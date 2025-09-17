1. at least 24bits(3bytes) required to encode/decode

``` abc = 01100001 01100010 01100011

011000 010110 001001 100011
  Y       W     J       J

btoa("abc") // YWJj ```
 

2. if not fill 1. requirement then its will fillup with 0's to do minimum 24 bits

` a = 011000 01
011000 010000 000000
  Y        Q    =
`
3.Multiple of 3 bytes reason is 4bytes = 32 , 6^2 = 36bits
  `
  abcd =01100001 01100010 01100011 01100100 = 32bits

011000 010110 001001 100011 011001 000000 000000 000000 = 48bits
 Y      W       J       j      Z       A    =       =
 `
