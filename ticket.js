const getPrice = (ticket = 4, age = [23, 19, 40, 50]) => {
  console.log(ticket, age);
  if (ticket !== age.length) {
    return " mismatch age and ticket count";
  } else if (ticket > 4 || ticket <= 0) {
    return "invalid ticket count";
  } else {
    let price = 0;
    for (let i = 0; i < age.length; i++) {
      if (age[i] <= 20) {
        price = price + 30;
      } else if (age[i] > 20 && age[i] <= 30) {
        price = price + 35;
      } else if (age[i] > 30 && age[i] <= 60) {
        price = price + 40;
      } else if (age[i] > 60) {
        price = price + 15;
      }
    }
    // console.log(`total price = ${price}`);
    return price;
  }
};

console.log(getPrice(2, [20, 20]));
console.log(getPrice(3, [30, 50, 60]));
console.log(getPrice());
console.log(getPrice(1, [30, 40]));
console.log(getPrice(5, [30, 40, 50, 70, 80]));
console.log(getPrice(4, []));
