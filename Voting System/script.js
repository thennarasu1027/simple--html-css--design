let option1 = 0;
let option2 = 0;
let option3 = 0;

let currentUser = "";

function checkEligibility(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;

if(name === "" || age === ""){
document.getElementById("message").innerText="Enter name and age";
return;
}

if(age >= 18){

currentUser = name;

if(localStorage.getItem(name)){
document.getElementById("message").innerText="You already voted!";
document.getElementById("voteSection").style.display="none";
return;
}

document.getElementById("voteSection").style.display="block";
document.getElementById("message").innerText="You can vote";

}
else{
document.getElementById("message").innerText="You are NOT eligible";
}

}

function castVote(option){

if(option === "Option 1"){
option1++;
}
else if(option === "Option 2"){
option2++;
}
else{
option3++;
}

localStorage.setItem(currentUser,"voted");

alert("Vote submitted");

document.getElementById("voteSection").style.display="none";

}

function adminLogin(){

let username = prompt("Enter admin username");
let password = prompt("Enter admin password");

if(username === "admin" && password === "1234"){

document.getElementById("adminResult").style.display="block";

document.getElementById("option1Votes").innerText="Option 1 : "+option1+" votes";
document.getElementById("option2Votes").innerText="Option 2 : "+option2+" votes";
document.getElementById("option3Votes").innerText="Option 3 : "+option3+" votes";

}
else{
alert("Wrong admin login");
}

}