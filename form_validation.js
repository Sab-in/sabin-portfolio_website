function validate() {
    var first_name = document.forms["messageForm"]["first_name"].value;
    var last_name = document.forms["messageForm"]["last_name"].value;
    var email = document.forms["messageForm"]["email"].value;
    var Gender = document.forms["messageForm"]["gender"].value;
    var message = document.forms["messageForm"]["message"].value;


    if (first_name == "" || last_name == "" || message == "" || Gender == "" || message == "") {
        alert("Hey There, you have missed out a couple of fileds!!!")
    }
    else {
        alert("Thank you for your time.")
    }
}