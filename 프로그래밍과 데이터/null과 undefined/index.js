// null과 undefined
// null: 의도적으로 표현할 때 사용하는 값

// undefined: 값이 없다는 것을 확인하는 값, 선언한 후에 값을 정해주지 않음

let codeit;
console.log(codeit); // undefined 출력
codeit = null;
console.log(codeit); // null 출력
codeit = undefined;
console.log(codeit); // undefined 출력

console.log('');

console.log(null == undefined); // true 출력
console.log(null === undefined); // false 출력

console.log('');

let cup;
console.log(cup); // undefined
cup = '물';
console.log(cup); // 물
cup = null;
console.log(cup); // null