//function to open client email with populated fields from form
function emailTo(userName, subject, message){
    var myEmail = 'samhughes98@hotmail.co.uk';
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${message}` + " %0D%0A%0D%0A%0D%0AKind regards,%0D%0A " +  userName ;
  }

//function to validate fields on contact form
function validate(){
    var userName = document.getElementById("userName");
    var userSubject = document.getElementById("userSubject");
    var userMessage = document.getElementById("userMessage");

    var validated = 0;

    if(!userName.value || userName.value.length < 3){
        alert("please enter a valid name!");
    } else {
        ++validated;
    }

    if(!userSubject.value || userSubject.value.length < 5){
        alert("please enter a valid Topic!");
    } else {
        ++validated;
    }

    if(!userMessage.value || userMessage.value.length <= 3){
        alert("Message incorrect - not long enough");
    } else {
        ++validated;
    }

    if(validated >= 3){
    emailTo(userName.value, userSubject.value, userMessage.value);
    }
}



