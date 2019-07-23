function chkArmstrong(no:number):void
{
    var no1:number = no;
    var og:number = no;
    var length:number = 0;
    var armstrong:number = 0;
    var mul:number = 1;
    while(no1 != 0) {
        no1 = Math.floor(no1/10);
        length++;
    }

    while (no != 0) {
        mul = no%10;
        armstrong = armstrong + Math.pow(mul, length);
        no = Math.floor(no/10);
    }

    if (og == armstrong) {
        console.log("It is armstrong number");
    } else {
        console.log("It is not armstrong number");
    }
}

chkArmstrong(153);