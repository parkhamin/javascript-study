// AND와 OR의 연산 방식
// Javascript에서 AND 연산 
// 왼쪽 값이 Truthy하면 오른쪽 값 리턴, 왼쪽 값이 Falsy하면 그대로 왼쪽 값을 리턴하는 방식
console.log('Codeit' && 'Javascript');

// Javascript에서 OR 연산
// 왼쪽 값이 Truthy하면 왼쪽 값 리턴, 왼쪽 값이 Falsy하면 오른쪽 값을 리턴하는 방식
console.log('Codeit' || 'Javascript');

console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}

