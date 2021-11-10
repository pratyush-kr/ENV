function openForm(){
    if(document.getElementById("ShowForm").innerHTML === "Logout")
        document.getElementById("ShowForm").innerHTML = "Login";
    document.getElementById("form").style.display = "flex";
}

function closeForm(){
    document.getElementById("form").style.display = "none";
}

function handelSubmit(event){
    event.preventDefault();
    var myForm = document.getElementById('myLoginForm');
    const data = new FormData(myForm);
    console.log(data);
}