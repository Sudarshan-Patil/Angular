class circle
{
    radius:number;
    pi:number = 3.14;

    constructor(rad:number)
    {
        this.radius = rad;
    }

    area():number
    {
        return this.pi * this.radius * this.radius;
    }
}

var obj1 = new circle(10);
var obj2 = new circle(20);

console.log('Area of circle is : ' + obj1.area());
console.log('Area of circle is : ' + obj2.area());