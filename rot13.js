// ROT13 is a simple letter substitution Caesar cipher that replaces a letter with the letter 13 letters after it in the alphabet. 

// The function that takes a string and returns the string ciphered with Rot13.

function rot13(message) {
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}  

/*
// Old Solution:

function rot13(message) {
    const encode = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:0 }
    return message.split(" ")
                  .map(word => {
                    return word.split("")
                          .map(c => {
                            let lowerC = c.toLowerCase()
                            if (lowerC in encode) {
                              let isLowerC = c === lowerC ? true : false
                              let rotCode = (encode[c.toLowerCase()] + 13) % 26
                              let rotChar = Object.keys(encode).find(key => encode[key] === rotCode)
                              return isLowerC ? rotChar : rotChar.toUpperCase()
                            }
                            return c
                          }).join("")
                  }).join(" ")
}
*/