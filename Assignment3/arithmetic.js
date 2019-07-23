var arithmetic = /** @class */ (function () {
    function arithmetic(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    arithmetic.prototype.addition = function () {
        return this.number1 + this.number2;
    };
    arithmetic.prototype.subtraction = function () {
        return this.number1 - this.number2;
    };
    arithmetic.prototype.multiplication = function () {
        return this.number1 * this.number2;
    };
    arithmetic.prototype.division = function () {
        return this.number1 / this.number2;
    };
    return arithmetic;
}());
var obj1 = new arithmetic(10, 20);
var obj2 = new arithmetic(20, 30);
console.log('Addition is : ' + obj1.addition());
console.log('Subtraction is : ' + obj1.subtraction());
console.log('Multiplication is : ' + obj1.multiplication());
console.log('Division is : ' + obj1.division());
console.log('Addition is : ' + obj2.addition());
console.log('Subtraction is : ' + obj2.subtraction());
console.log('Multiplication is : ' + obj2.multiplication());
console.log('Division is : ' + obj2.division());
