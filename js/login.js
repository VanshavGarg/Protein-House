function vemail(){
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email = document.getElementById("email").value;
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass=document.getElementById("pass").value;
    if (regexEmail.test(email)&&re.test(pass)) {
        alert("Registered Successfully");
    } 
    else if(email==""&&pass==""){alert("email and password cannot be empty");}
    else if(!regexEmail.test(email)){
        alert("Invalid email");
    
    }
    else if(!re.test(pass)){
    alert("Invalid password");}
    
    }
    function lemail(){
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email = document.getElementById("email1").value;
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass=document.getElementById("pass1").value;
    if (regexEmail.test(email)&&re.test(pass)) {
        alert("Logged In Successfull");
        
    } 
    else if(email==""&&pass==""){alert("email and password cannot be empty");}
    else if(!regexEmail.test(email)){
        alert("Invalid email");
    
    }
    else if(!re.test(pass)){
    alert("Invalid password");}
    
    }	