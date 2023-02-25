const genderOutput = document.getElementById("gender-output");

function getGender(num) {
  if (num < 50) {
    return "Male";
  } else if (num >= 50 && num < 100) {
    return "Non-Binary";
  } else {
    return "Female";
  }
}

genderOutput.textContent += getGender(75);
