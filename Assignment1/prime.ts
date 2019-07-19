function chkPrime(no:number):boolean
{
    for(var i=2; i<no; i++)
    {
        if (no%i == 0 && no != i) {
            return false;
        }        
    }
    return true;
}

if (chkPrime(11)) {
    console.log("It is prime number");
} else {
    console.log("It is not a prime number");
}