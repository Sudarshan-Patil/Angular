function fibonacci(no) {
    var series = '';
    var sum = 0;
    var n1 = 1;
    var n2 = 0;
    while (sum < no) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        series += ' ' + sum;
    }
    return series;
}
console.log('Fibonacci series for 21 is : ' + fibonacci(21));
