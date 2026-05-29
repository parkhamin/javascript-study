// typeof 연산자
console.log(typeof 101);
console.log(typeof 'Hamin')
console.log(typeof 'true');

console.log(typeof 1);
console.log(typeof 1.0);
console.log(typeof "1");
console.log(typeof `1`);

function sayHello() {
  console.log('Hello');
}

console.log(typeof sayHello);

console.log(typeof "Hello" + 'Hamin'); // stringHamin 출력
console.log(typeof 8 - 3); // NaN 출력

console.log(typeof ("Hello" + 'Hamin'));
console.log(typeof (8 - 3));