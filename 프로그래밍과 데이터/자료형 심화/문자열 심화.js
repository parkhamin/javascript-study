// String
let myString = 'Hi Hamin';

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // 0 ~ 1
console.log(myString.slice(3)); // 3 ~ 끝
console.log(myString.slice()); // 문자열 전체 반환

// 양 끝 공백 제거
console.log(myString.trim());

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
console.log(myString.indexOf('a')); // 앞부터
console.log(myString.lastIndexOf('i')); // 뒤부터

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드

// 문자열 길이
console.log(myString.length);