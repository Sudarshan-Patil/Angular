var circle = /** @class */ (function () {
    function circle(rad) {
        this.pi = 3.14;
        this.radius = rad;
    }
    circle.prototype.area = function () {
        return this.pi * this.radius * this.radius;
    };
    return circle;
}());
var obj1 = new circle(10);
var obj2 = new circle(20);
console.log('Area of circle is : ' + obj1.area());
console.log('Area of circle is : ' + obj2.area());
