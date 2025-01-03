function priceCategory(price) {
  if (price >= 1000) {
    console.log("Expensive");
  } else if (price >= 500 && price <= 999) {
    console.log("Moderate");
  } else if (price < 500 && price > 0) {
    console.log("Affordable");
  } else if (price == 0) {
    console.log("Free");
  } else {
    console.log("Invalid Price");
  }
}

priceCategory(750);
