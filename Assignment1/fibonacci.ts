function fibonacci(no:number):string
{
    var series:string = '';
    var sum:number = 0;
    var n1:number = 1;
    var n2:number = 0;
    while(sum < no) {         
        sum = n1+n2;                         
        n1 = n2;
        n2 = sum;     
        series += ' ' + sum;         
    }
    return series;
}

console.log('Fibonacci series for 21 is : ' + fibonacci(21));