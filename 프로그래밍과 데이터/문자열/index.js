// 문자열
console.log("I'm Iron man");

// 문자열에 작은 따옴표를 썼기 때문에 문장 전체는 큰 따옴표로 감쌈
// 하지만 큰 따옴표 자체를 문자열로 출력하기 위해서는
// 문장 전체를 감싼 큰 따옴표와 중복되는 큰 따옴표 앞에만 "\"를 붙임
console.log("He said \"I'm Iron man\"");

// 헷갈린다면 문장 전체를 감싼 따옴표 제외 모든 따옴표 앞에 "\" 붙이는 방법
console.log("He said \"I\'m Iron man\"");

// 아니면 문장 전체를 백틱으로 감싸기
console.log(`He said "I'm Iron man"`);

console.log('Hello,' + ' Hamin');

console.log('3' + '5');