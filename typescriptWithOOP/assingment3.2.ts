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

var obj = new Circle(4);
var obj3 = new Circle(9);
var result;
result=obj.Area();
console.log("Area of Circle="+result);
result=obj3.Area();
console.log("Area of Circle="+result);

