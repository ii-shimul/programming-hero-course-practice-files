function calculateTax(income, expenses) {
  if (expenses < 0 || income < 0 || expenses > income) {
    return "Invalid Input";
  }
  let profit = income - expenses;
  let tax = profit * 0.2;
  
  return tax;
}

function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  }
  let splitted = email.split("@");
  let msg = splitted[0] + " sent you an email from " + splitted[1];

  return msg;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj.testScore > 50 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }

  let score = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    score += 20;
  }

  return score >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    typeof waitingTimes !== "object" ||
    typeof serialNumber !== "number" ||
    serialNumber < waitingTimes.length
  ) {
    return "Invalid Input";
  }

  let totalTime = 0;

  for (const i of waitingTimes) {
    totalTime += i;
  }

  let avgTime = Math.round(totalTime / waitingTimes.length);

  let remaining = serialNumber - (waitingTimes.length + 1);

  return avgTime * remaining;
}
