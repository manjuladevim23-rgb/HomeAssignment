let x = "madam"
let y = x.split('').reverse().join('')
console.log(y)
if(x==y)
{
    console.log("the string is Pallindrome")
}
else{
    console.log("The string is not palllindrome")
}

///--------------------
console.log("********************************")
function Pallindrome(t1)
{
//let t1 = "level"
 let t2 = t1.split('')
 //console.log(t2)
 let rev= ""
for(let i=t2.length-1;i>=0;i--)
{
    rev=rev+t1[i]

}
console.log(rev)

if (t1==rev)
{
    console.log("The string is Pallindrome")
}
else
{
console.log("The String is not pallindrome")
}
}

Pallindrome("level")
Pallindrome("manjula")

