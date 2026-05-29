// 형 변환(Type Conversion)
// 자바 스크립트에서는 아래 코드에서 오류 발생 X
console.log('4' - true);

console.log('');

// 산술 연산(+, -, *, /, %, **)
// + 인 경우 문자열을 연결하는 기능 있기 때문에
// 그 제외 모두 숫자로 계산
console.log(4 + '2'); // 42
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

console.log('')

// 관계 비교 연산(<, <=, >, >=)
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
// NaN과 1을 비교
// 자바스크립트에서 NaN은 그 어떤 값과 비교해도 무조건 false를 반환
console.log('two' >= 1);

console.log('');

// 같음 비교 연산(===, !==, ==, !=)
// 일치 비교 경우 형 변환 X
console.log(1 === '1'); // 일치, 불일치
console.log(1 === true);
// 동등 비교 경우 형 변환 O
console.log(1 == '1'); // 동등, 부등
console.log(1 == true);
                    