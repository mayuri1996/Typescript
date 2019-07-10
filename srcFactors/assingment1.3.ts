function DisplayFactors(no:number):number
{
    console.log("Factors of "+no+" is=");
   for(var i=1;i<=no;i++){
       if(no%i==0){
         
          console.log(i);
          
       }
   }
   return this.factors;
}

var values:number;
values = DisplayFactors(20);

