function accessPrivilege(user) {
  user["role"] == "admin"
    ? user["active"] == true &&
      user["experience"] > 5 &&
      user["department"] == "IT"
      ? console.log("Full IT Admin Access")
      : user["active"] == true &&
        user["experience"] > 5 &&
        user["department"] != "IT"
      ? console.log("Full General Admin Access")
      : user["active"] == true && user["experience"] <= 5
      ? console.log("Limited Admin Access")
      : console.log("Admin Access Revoked")
    : user["role"] == "manager"
    ? user["active"] == true &&
      user["experience"] > 3 &&
      user["department"] == "Sales"
      ? console.log("Full Sales Manager Access")
      : user["active"] == true &&
        user["experience"] > 3 &&
        user["department"] != "Sales"
      ? console.log("Full Manager Access")
      : user["active"] == true && user["experience"] <= 3
      ? console.log("Limited Manager Access")
      : console.log("Manager Access Revoked")
    : user["role"] == "user"
    ? user["active"] == true && user["department"] == "Support"
      ? console.log("Priority Support Access")
      : user["active"] == true && user["department"] != "Support"
      ? console.log("User Access")
      : user["active"] == false
      ? console.log("User Access Revoked")
      : console.log("Invalid ")
    : console.log("Invalid Role");
}

// admin ? true : manager ? true : user ? true: false

//   if (user["role"] == "admin") {
//     if (
//       user["active"] == true &&
//       user["experience"] > 5 &&
//       user["department"] == "IT"
//     ) {
//       console.log("Full IT Admin Access");
//     } else if (
//       user["active"] == true &&
//       user["experience"] > 5 &&
//       user["department"] != "IT"
//     ) {
//       console.log("Full General Admin Access");
//     } else if (user["active"] == true && user["experience"] <= 5) {
//       console.log("Limited Admin Access");
//     } else if (user["active"] == false) {
//       console.log("Admin Access Revoked");
//     }
//   } else if (user["role"] == "manager") {
//     if (
//       user["active"] == true &&
//       user["experience"] > 3 &&
//       user["department"] == "Sales"
//     ) {
//       console.log("Full Sales Manager Access");
//     } else if (
//       user["active"] == true &&
//       user["experience"] > 3 &&
//       user["department"] != "Sales"
//     ) {
//       console.log("Full Manager Access");
//     } else if (user["active"] == true && user["experience"] <= 3) {
//       console.log("Limited Manager Access");
//     } else if (user["active"] == false) {
//       console.log("Manager Access Revoked");
//     }
//   } else if (user["role"] == "user") {
//     if (user["active"] == true && user["department"] == "Support") {
//       console.log("Priority Support Access");
//     } else if (user["active"] == true && user["department"] != "Support") {
//       console.log("User Access");
//     } else if (user["active"] == false) {
//       console.log("User Access Revoked");
//     }
//   } else {
//     console.log("Invalid Role");
//   }
// }

let person = {
  role: "manager",
  experience: 4,
  active: true,
  department: "Marketing",
};

accessPrivilege(person);
