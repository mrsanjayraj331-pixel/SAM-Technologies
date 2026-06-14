document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let ern = document.getElementById("ern").value;
    let password = document.getElementById("password").value;

    if(ern === "744331" && password === "SANJAYRAJ"){
        window.location.href = "dashboard.html";
    }else{
        document.getElementById("error").style.display = "block";
    }

});