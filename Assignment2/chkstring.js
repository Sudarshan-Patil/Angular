function chkstring(str) {
    var sentence = "Pune Kothrud Marvellous Infosystems";
    if (sentence.indexOf(str) != -1) {
        console.log('String contains Marvellous in it.');
    }
    else {
        console.log('String does not contains Marvellous in it.');
    }
}
chkstring('Marvellous');
