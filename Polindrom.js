let word = prompt("Enter your word: ")

let tmp = ""

let flag = true

for (let i = 0; i < word.length/2; i++){
    if (word[i] !== word[word.length -1 - i]){
        flag = false
        break
    }
}

if (flag)
    console.log("Polindrom")
else
    console.log("Not Polindrom")