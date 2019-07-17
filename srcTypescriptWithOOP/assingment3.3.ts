class Circle{
    radius:number;
    PI:number;

    constructor(value:number){
      this.radius=value;
      this.PI=3.14;
    }

    Area(){
        return this.PI*this.radius*this.radius;
    }
}

class CircleX extends Circle{

    Circumference(){
        return 2*this.PI*this.radius;
    }
}

var obj = new CircleX(5);
var obj3 = new CircleX(8);
var result;
result = obj.Circumference();
console.log("Circumference of Circle="+result);
result = obj3.Circumference();
console.log("Circumference of Circle="+result);



