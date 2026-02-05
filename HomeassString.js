let s =" Hello world"
let trimmed = s.trim()
let words= trimmed.split(" ")
let lastWord =words[words.length-1]
console.log(`The Last word count is  ${lastWord.length}`)

//--------------------//

/*First assign the word
Trin the words and convert to same case
check if the length are equal by comparing
sort the value and join 
compare sorted strings and Print message */
console.log("*****************************")
function isAnagram(word1,word2){

let trim1= word1.trim().toLowerCase()
let trim2= word2.trim().toLowerCase()


if (trim1.length==trim2.length)
{
    console.log("the string length is equal")
}
else{
    console.log("The string length is not equal")
}

let len1=trim1.split('').sort().join('')
let len2=trim2.split('').sort().join('')
if(len1==len2)
{
    console.log("True")
}
else{console.log("False")}
}

isAnagram("listen","silent")
isAnagram("hello","world")
//-----------------------------------
console.log("*****************************")
function Lastword1(lastWord)
{
//let lastWord ="  fly me   to   the moon  "
//t= t.trim()
console.log(lastWord)
let text =lastWord.trim().split(/\s+/) 
let lastword= text[text.length-1]
console.log("The Lastword is " +lastword)
console.log(`The last word ${lastword}  length is : ${lastword.length}`)}

Lastword1("  fly me   to   the moon  ")





