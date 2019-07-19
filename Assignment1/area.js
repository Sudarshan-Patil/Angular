function area(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    return radius * radius * pi;
}
console.log("Area of circle is " + area(5));
