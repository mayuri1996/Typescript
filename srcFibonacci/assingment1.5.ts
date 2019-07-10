
function Fibonacci(num:number)
{
    var a:number=0;
    var b:number=1;
    var c:number;
    console.log(a);
    console.log(b);
    for(var i=0;i<num;){
       c=a+b;
       console.log(c);
       a=b;
       b=c;
       i=c;
    }
}

var Fibonacci1=Fibonacci(21);