let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = [],
  even = [];
for (let i = 0; i < a.length; i++) {
  a[i] % 2 === 0 ? even.push(a[i]) : odd.push(a[i]);
  //   if (c === 0) {
  //     console.log(`even number is  ${a[i]} ${a[i]} ${a[i]} ${a[i]}  ${a[i]}`);
  //   } else {
  //     console.log("odd number is: " + a[i]);
  //   }
}
console.log(`odd numbers ${odd} and even numbers ${even}`);
