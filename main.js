

//
function getNumbers() {
    var num = '';
    num = document.getElementById("number").value;

    if (num % 2 !==""){
    document.getElementById("output").innerHTML = num + " " + "Kindly enter a number";
    }
    if (num % 2 === 0) {
        document.getElementById("output").innerHTML = num + " " + "is even!";
    }
    else {
        document.getElementById("output").innerHTML = num + " " + "is odd!";


        
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
