class arithmetic
{
    public number1:number;
    public number2:number;

    constructor(num1:number, num2:number)
    {
        this.number1 = num1;
        this.number2 = num2;
    }

    addition():number
    {
        return this.number1 + this.number2;        
    }

    subtraction():number
    {
        return this.number1 - this.number2;        
    }

    multiplication():number
    {
        return this.number1 * this.number2;        
    }

    division():number
    {
        return this.number1 / this.number2;        
    }

}

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