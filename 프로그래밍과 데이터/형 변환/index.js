// 형 변환(Type Conversion)

console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

console.log('');

// 숫자 -> 문자
let a = 123;
console.log(a);
console.log(String(a));
console.log(typeof a);
console.log(typeof String(a));

console.log('');

// 불린 -> 문자
let b = true;
console.log(b);
console.log(String(b));
console.log(typeof b);
console.log(typeof String(b));

console.log('');

// 문자 -> 숫자
// 하지만 '123' 경우 형 변환 가능
let c = '문자';
console.log(c);
console.log(Number(c));
console.log(typeof c);
console.log(typeof Number(c));

console.log('');

// 불린 -> 숫자
// true -> 1
// false -> 0
let d = true;
console.log(d);
console.log(Number(d));
console.log(typeof d);
console.log(typeof Number(d));

console.log('');

// 문자 -> 불린
// '' -> 경우 boolean false 출력
let e = '문자';
console.log(e);
console.log(Boolean(e));
console.log(typeof e);
console.log(typeof Boolean(e));

console.log('');

// 숫자 -> 불린
// 숫자가 0, NaN인 경우 boolean false 출력
let f = 123;
console.log(f);
console.log(Boolean(f));
console.log(typeof f);
console.log(typeof Boolean(f));