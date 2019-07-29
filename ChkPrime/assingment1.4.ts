function ChkPrime(no:number):boolean
{
    if(no==1){
        return false;
    }
    else if(no==2){
        return true;
    }
    else{
        for(var i=2;i<no;i++){
            if(no%i==0){
             return false;
            }
        }
         return true;
    }
   
}

var check = ChkPrime(11);
if(check==true){
    console.log("It is Prime Number");
}
else{
    console.log("It is Not a Prime Number");
}
