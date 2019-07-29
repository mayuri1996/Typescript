function ChkArmstrongNum(arr){
    for(var i=0;i<arr.length;i++)
    {
        var orignalNumber:number = arr[i];
        var remainder:number=0;
        var result:number=0;

        while(orignalNumber>0){
            remainder = orignalNumber%10;
            result = result+(remainder*remainder*remainder);
            orignalNumber = Math.floor(orignalNumber/10);
        }
        
        if(result==arr[i]){
            console.log("Armstrong Number is ="+arr[i]);
        }
    }
}

var a = [145,153,171];
ChkArmstrongNum(a);