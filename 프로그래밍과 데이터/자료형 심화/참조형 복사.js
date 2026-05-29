// 참조형 복사하기 (Reference Type Copy)
let number1 = [1, 2, 3];
let number2 = number1;

number2.push(4);

console.log(number1);
console.log(number2);

let number3 = [1, 2, 3];
let number4 = number3.slice();

number3.push(4);

console.log(number1);
console.log(number2);

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = course1;

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);

let course3 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course4 = {};

for (let key in course3) {
  course4[key] = course3[key];
}

course4.title = '자료 구조';

console.log(course3);
console.log(course4);