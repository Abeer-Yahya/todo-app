let name = prompt("Hello, Enter your name please:", "");
let gender = prompt("Enter your gender please:", "");

if (gender !== "male" && gender !== "female") {
  prompt("You can only choose male or female:", "");
}

let age = prompt("Enter your age:", "");
if (age <= 0) {
  alert("Rejected");
}
let ignore = confirm("Do you want Our welcoming message? ");
if (ignore) {
  if (gender !== "male" && gender !== "female") {
    alert("Hello, " + name + "!  Welcome To our website!");
  } else
    alert(
      "Hello, " +
        (gender == "male" ? "Mr." : "Mrs.") +
        name +
        "!  Welcome To our website!"
    );
}
