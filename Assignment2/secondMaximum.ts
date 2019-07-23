function maximum(...no:number[]):number
{
    var temp:number = 0;
    for(var i=0; i<no.length; i++) {
        for (var j=0; j<no.length-1; j++) {
            if (no[j] > no[j+1])
            {
                temp = no[j];
                no[j] = no[j+1];
                no[j+1] = temp;
            }
        }
    }
    return no[no.length-2];
}

console.log("Second maximum number is " + maximum(23, 89, 6, 29, 56, 45, 77, 32));