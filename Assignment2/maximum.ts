function maximum(...no:number[]):number
{
    var max:number = 0;
    for(var i=0; i<no.length; i++)
    {
        if (no[i] > no[i+1]) {
            max = no[i];
            no[i] = no[i+1];
            no[i+1] = max;
        }
    }
    return max;
}

console.log("The maximum number is : " + maximum(23, 89, 6, 29, 56, 45, 77, 32));
