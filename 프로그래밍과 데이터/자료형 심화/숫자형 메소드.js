// Number
let myNumber = 0.3591

// toFixed(0 ~ 100)
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(7));
console.log(typeof myNumber.toFixed(7)); // string 확인
console.log(Number(myNumber.toFixed(7)));
console.log(+myNumber.toFixed(2)); // 숫자로 변환

// 단항 연산자 (Unary Plus): 뒤에 오는 데이터를 무조건 숫자로 변환하려고 시도
// +"0.36" -> 0.36
// +true -> 1
// +"abc" -> NaN
// 이항 연산자 (Binary Addition)
// 둘 다 숫자면? 산술 더하기
// 하나라도 문자열이면? 문자열 연결

// toString(2 ~ 36)
console.log(myNumber.toString(2)); // 2진수 문자열로 변환
console.log(myNumber.toString(8)); // 8진수
console.log(myNumber.toString(16)); // 16진수
// console.log(255.toString(2)); 정수를 소수점으로 인식하기 때문에 불가
console.log(255..toString(2));
console.log((255).toString(2));