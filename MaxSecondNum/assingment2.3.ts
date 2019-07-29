function Maximum(arr):number
{
    var first:number,second:number;
    first = second = arr[0];
	   
	for (var i = 0; i < arr.length; i++)
	{
		if(arr[i] > first)
		{
			second = first;
			first = arr[i];
		}
		else if(arr[i] > second && arr[i] < first)
		{
			second = arr[i];
		}	
    }
    return second;
}

var a = [23, 89, 6, 29, 56, 45, 77, 32];
var arr1 = Maximum(a);
console.log(arr1);