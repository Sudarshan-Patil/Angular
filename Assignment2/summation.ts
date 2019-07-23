function summation(...no:number[]):number
{
    var sum:number = 0;
    for(var i=0; i<no.length; i++)
    {
        sum += no[i];
    }
    return sum;
}

console.log("Addition is " + summation(23, 6, 7, 4, 5, 7));

