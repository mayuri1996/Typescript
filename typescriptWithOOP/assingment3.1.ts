class Arithmetic
{
     Number1:number;
     Number2:number;
     result:number;

    constructor(value1:number,value2:number){
        this.Number1=value1;
        this.Number2=value2;
    }

    Addition(){
        this.result=this.Number1+this.Number2;
        return this.result;
    }
    Substraction(){
        this.result=this.Number1-this.Number2;
        return this.result;
    }
    Multiplication(){
        this.result=this.Number1*this.Number2;
        return this.result;
    }
    Division(){
        this.result=this.Number1/this.Number2;
        return this.result;
    }

}

var obj1 = new Arithmetic(34,12);
var obj2 = new Arithmetic(8,5);
var result;

console.log("    obj1 to call all methods");
result=obj1.Addition();
console.log("Addition="+result);
result=obj1.Substraction();
console.log("Substraction="+result);
result=obj1.Multiplication();
console.log("Multiplication="+result);
result=obj1.Division();
console.log("Division="+result);

console.log("    obj2 to call all methods");
result=obj2.Addition();
console.log("Addition="+result);
result=obj2.Substraction();
console.log("Substraction="+result);
result=obj2.Multiplication();
console.log("Multiplication="+result);
result=obj2.Division();
console.log("Division="+result);