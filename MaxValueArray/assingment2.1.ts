function Maximum(arr)
{
  var max = 0;
  for(var i=0;i<arr.length;i++)
  {
      if(max<arr[i]){
          max=arr[i];
      }
  }
  return max;
}

var a = [23,89,6,29,56,45,77,32];
var arr = Maximum(a);
console.log(arr);
