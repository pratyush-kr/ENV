function openForm(){
    if(document.getElementById("ShowForm").innerHTML === "Logout")
        document.getElementById("ShowForm").innerHTML = "Login";
    document.getElementById("form").style.display = "flex";
}

function closeForm(){
    document.getElementById("form").style.display = "none";
}