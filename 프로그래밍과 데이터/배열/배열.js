// 배열 (Array)
// element: 배열의 요소
// index: 배열의 순서
let courseRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

// indexing (0 ~ ...)
console.log(courseRanking[0]);

let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(members.length); // 보이지 않는 mebers 배열 객체의 프로퍼티
console.log(members['length']);
console.log(members[members.length - 1]);

console.log(members[5]); // undefined 출력
members[5] = 'Nice';
console.log(members[5]);