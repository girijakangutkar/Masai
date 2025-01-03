function userRole(user) {
  if (user["role"] == "admin" && user["active"] == true) {
    console.log("Admin Access Granted");
  } else if (user["role"] == "admin" && user["active"] == false) {
    console.log("Admin Access Revoked");
  } else if (user["role"] == "user" && user["active"] == true) {
    console.log("User Access Granted!");
  } else if (user["role"] == "user" && user["active"] == false) {
    console.log("User Access Revoked");
  } else {
    console.log("Access Denied");
  }
}

let user = { name: "Bob", role: "user", active: true };
userRole(user);
