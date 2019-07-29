function PrimeNum(arr)
{
   for(var i=0;i<arr.length;i++) {
    if(arr[i]==1){
      break;
    }
    else if(arr[i]==2){
        console.log(" prime="+arr[i]);
    }
    else
    {
        var count=0;
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                count =1;
               break;
            }
        }
        if(count==0){
            console.log(" prime="+arr[i]);
        }
    }
   }
}

var a = [6,7,3,1];
var check = PrimeNum(a);

