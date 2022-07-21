function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    if ( uname !="admin") {
        alert("Please enter valid username");
    }
    else if (pwd !="123456") {
        alert("Please enter valid password");
    }
   
    
    else if (pwd =="123456" && uname == "admin")
    
        window.location = "admin.html";
    
}
function clearFunc() {
    document.getElementById("email").value = "";
    document.getElementById("pwd1").value = "";
}	
