var grade = Math.floor(Math.random() * 100) + 1;
document.querySelector("h1").textContent = "Your grade is: " + grade + "%";

if (grade >= 85) {
  document.querySelector("p").textContent = "Excellent!";
  document.querySelector("p").style.backgroundColor = "green";
}
else if (grade < 85 && grade >= 75) {
  document.querySelector("p").textContent = "Very good!";
  document.querySelector("p").style.backgroundColor = "aqua";
}
else if (grade < 75 && grade >= 65) {
  document.querySelector("p").textContent = "Good!";
  document.querySelector("p").style.backgroundColor = "blue";
}
else if (grade < 65 && grade >= 50) {
  document.querySelector("p").textContent = "Pass";
  document.querySelector("p").style.backgroundColor = "grey";
}
else if (grade < 50 && grade >= 0) {
  document.querySelector("p").textContent = "Didn't pass!";
  document.querySelector("p").style.backgroundColor = "red";
}
