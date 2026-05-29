// Date
let myDate = new Date();
console.log(myDate);

// new Date('YYYY-MM-DD')
let myDate1 = new Date('2017-05-18');

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate1);
console.log(myDate2);

// Date.getTime()
let myDate3 = new Date(2017, 4, 18, 19, 11, 16); // 2017년 5월 18일 19시 11분 16초
console.log(myDate3.getTime());
