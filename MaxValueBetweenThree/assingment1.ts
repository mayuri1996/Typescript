/*Return Largest Value from 3 parameters*/ 

function Maximum(no1:number,no2:number,no3:number):number
{
    var max:number;
    if((no1>no2)&&(no1>no3))
    {
      max = no1;
    }
   else if((no2>no1)&&(no2>no3))
    {
      max = no2;
    }
    else
    {
      max = no3;
    }
  return max;
}

/*function call*/
var Max:number;
Max = Maximum(23,89,6);

console.log("Max is :"+Max);