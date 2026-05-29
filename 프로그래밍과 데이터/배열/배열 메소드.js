// 배열의 메소드 (Array's Method)
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

// splice(startIndex, deleteCount, item) -> 배열에서 요소 완전 삭제
// 삭제할 개수를 지정하지 않으면 시작 인덱스부터 전부 삭제
members.splice(4);
console.log(members); // (4) ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼']

members.splice(1, 2); // 인덱스 1부터 2개 삭제
console.log(members); // (2) ['쿤갈레', '흙토끼']

members.splice(1, 1, 'nice', 'hi'); 
console.log(members); // (3) ['쿤갈레', 'nice', 'hi']

