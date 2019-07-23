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

class circleX extends circle
{
    circumference():number
    {
        return 2 * this.pi * this.radius;
    }
}

var obj3 = new circleX(30);
var obj4 = new circleX(40);

console.log('Circumference of circle is : ' + obj3.circumference());
console.log('Area of circle is : ' + obj3.area());
console.log('Circumference of circle is : ' + obj4.circumference());
console.log('Area of circle is : ' + obj4.area());

