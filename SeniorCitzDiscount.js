function SeniorDiscountEligibility(age) {
  if (age > 0) {
    if (age >= 60) {
      console.log("Eligible for Senior Discount");
    } else {
      console.log("Not Eligible for Senior Discount");
    }
  } else {
    console.log("Invalid Age");
  }
}

SeniorDiscountEligibility(63);
