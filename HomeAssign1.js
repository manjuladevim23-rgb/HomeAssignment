let isOddOrEven =30
for(let i=0;i<=isOddOrEven;i++)
{
    if(i%2==0)
    {
        console.log("Number is even " +i)
    }
    else{
        console.log("Number is odd " +i)
    }
}

//-----------------------------Number Type
let num = 43
if (num>0)
{
    console.log(num+ " is Positive Number " +" Type is  "+typeof(num))
}
else if(num<0)
{
  console.log(num+ " is Negative Number" +" Type is  "+typeof(num))  
}
else if(num==0){

    console.log(num+ " is zero" +" Type is  "+typeof(num))  
}
else{
    console.log(num+ " is not a number" +" Type is " +typeof(num))
}
//---------------------------------