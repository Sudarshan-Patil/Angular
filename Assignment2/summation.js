function summation() {
    var no = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        no[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < no.length; i++) {
        sum += no[i];
    }
    return sum;
}
console.log("Addition is " + summation(23, 6, 7, 4, 5, 7));
