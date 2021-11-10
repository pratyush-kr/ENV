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
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    const data = {"name": name, "password": pass};
    const https = new XMLHttpRequest();
    const url = 'http://localhost:3000/login'
    $.post(url, data);
}