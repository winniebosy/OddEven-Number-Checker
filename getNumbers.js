function getNumbers() {
    var num = '';
    if (num % 2 === 0) {
        document.getElementById("").innerHTML = num + " " + "is even!";
    }
    else {
        document.getElementById("").innerHTML = num + " " + "is odd!";
    }
    //this fucntion will allow only number to be entered in the text box
    function allowOnlyNumbers(evt) {
        evt = (evt) ? evt : Window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (CharCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
