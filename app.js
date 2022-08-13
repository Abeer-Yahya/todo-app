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

let ans1 = prompt("Do you live in Amman?", "");
if (ans1 !== "y" && ans1 !== "yes" && ans1 !== "n" && ans1 !== "no") {
  ans1 = "invalid";
}

let ans2 = prompt("Do you have a job?", "");
if (ans2 !== "y" && ans2 !== "yes" && ans2 !== "n" && ans2 !== "no") {
  ans2 = "invalid";
}

let ans3 = prompt("Are you married?", "");
if (ans3 !== "y" && ans3 !== "yes" && ans3 !== "n" && ans3 !== "no") {
  ans3 = "invalid";
}

let answers = [];
answers.push(name);
answers.push(gender);
answers.push(age);
answers.push(ans1);
answers.push(ans2);
answers.push(ans3);
answersRev = answers.reverse();
console.log(answersRev);

let rate = prompt("Rate our website on a 0-5 scale.");

if (rate >= 5) {
  rate = 5;
} else if (rate <= 0) {
  rate = 0;
} else if (rate >= 0 && rate <= 5) {
  alert("You rated us " + rate + " stars! Thank you!");
}
