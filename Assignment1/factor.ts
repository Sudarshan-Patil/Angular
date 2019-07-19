function factor(no:number):string
{
   var factor:string = '';
   for(var i=1; i<no; i++) {
       if (no%i == 0) {
           factor += ' ' + i;
       }
   }
   return factor;
}

console.log('Factor of 20 is : ' + factor(20));