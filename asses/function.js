function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    console.log(printContents);
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}