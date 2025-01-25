let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let e = 5;
for (let i = 0; i < a.length; i++) {
  if (a[i] === e) {
    console.log(`Element ${a[i]} is found at index ${i}`);
    break;
  }
}
