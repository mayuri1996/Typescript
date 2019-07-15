function replace(arr){
  var set =[];
  if(arr[i]==0 || arr[i]==1){
     set.push(-1);
  }
  else{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
         set.push(0);
        }
        else{
            set.push(1);
        }
    }
  }
  console.log(set);
}

var a = [12,34,11,15];
replace(a);