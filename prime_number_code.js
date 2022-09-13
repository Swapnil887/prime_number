let number = 41;
var check =0;
for(var i=2;i<number;i++)
{
    if(number/i==0)
    {
        check=1
        break
    }
}

if(check==0)
{
    console.log("prime number")
}
else{
    console.log("not prime number")
}