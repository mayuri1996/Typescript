function oddNumber(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0 || arr[i]==1){
           console.log("neithet even nor odd ="+arr[i]);
           
        }
        else if(arr[i]%2!=0){
            console.log("Odd Number ="+arr[i]);
        }
    }
}

var a = [2,3,4,0,5,7,1,8]
var odd = oddNumber(a);