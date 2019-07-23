var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circleX.prototype.circumference = function () {
        return 2 * this.pi * this.radius;
    };
    return circleX;
}(circle));
var obj3 = new circleX(30);
var obj4 = new circleX(40);
console.log('Circumference of circle is : ' + obj3.circumference());
console.log('Area of circle is : ' + obj3.area());
console.log('Circumference of circle is : ' + obj4.circumference());
console.log('Area of circle is : ' + obj4.area());
