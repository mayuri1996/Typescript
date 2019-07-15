
function DisplayReverse(arr){
    
    var set=[];
     for(var i=0;i<arr.length;i++){
         var revNum=0;
         var num = arr[i];
               while(num>0){
                   var rem = num%10;
                   revNum = revNum*10+rem;
                   num=Math.floor(num/10);
               }
              set.push(revNum);
     }
     console.log(set);
     
}
var a = [34,145,56,287];
DisplayReverse(a);