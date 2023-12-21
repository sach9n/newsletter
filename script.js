
function validate() {
    let emailInput = document.querySelector("#email");
    let email = emailInput.value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        console.log("Thank you!");
    } else {
            document.getElementById("spanVal").style.display = "block";
    }
    
}


function Return() {
    window.location.href = "index.html";
}