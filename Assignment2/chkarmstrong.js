function chkArmstrong(no) {
    var no1 = no;
    var og = no;
    var length = 0;
    var armstrong = 0;
    var mul = 1;
    while (no1 != 0) {
        no1 = Math.floor(no1 / 10);
        length++;
    }
    while (no != 0) {
        mul = no % 10;
        armstrong = armstrong + Math.pow(mul, length);
        no = Math.floor(no / 10);
    }
    if (og == armstrong) {
        console.log("It is armstrong number");
    }
    else {
        console.log("It is not armstrong number");
    }
}
chkArmstrong(153);
