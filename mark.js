let m = [60, 65, 70, 85, 90];
let attendance = 70;
for (let i = 0; i < m.length; i++) {
  if (attendance >= 60 && attendance < 70) {
    m[i] = m[i] + (m[i] / 100) * 3;
  }
  if (attendance >= 70 && attendance < 80) {
    m[i] = m[i] + (m[i] / 100) * 4;
  }
  //   if (attendance < 60) {
  //     return;
  //   }
  console.log(m[i]);
}
