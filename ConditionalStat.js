//b
function runtests(testType) {
switch(testType)
{
    case "smoke":
        console.log("Smoke")
          break
    case "sanity" :
       console.log("sanity")
       break
    case "regression" :
         console.log("regression")
         break
    default: console.log("smoke")
    

}}

runtests("smoke")
runtests("sanity")
runtests("regression")
runtests("abc")
//-----------------------------a

function launchBrowser(browserName)
{
    if(browserName=="chrome")
    {
     console.log("Launch browser is chrome")
    }
    else if(browserName=="IE")
   {
     console.log("Launch browser is IE")
    }
    else{
        console.log("Launch browser is Opera")
    }
}

launchBrowser("chrome")
launchBrowser("IE")
launchBrowser("ie")