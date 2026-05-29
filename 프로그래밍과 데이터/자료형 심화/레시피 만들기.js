// 아래 코드중 잘못된 부분을 수정해 주세요
// 객체와 배열은 변수에 할당할 때 해당 값이 직접 지정되는 것이 아닌,
// 주소 값이 저장이 되는 참조형
// 객체나 배열이 할당된 변수를 다른 변수에 할당하게 되면 서로 같은 값을 바라보게 돼서
// 한쪽으로 수정하면, 다른 한쪽도 수정되는 현상 발생
// 배열의 경우 이런 상황을 해결하기 위해서는 slice() 메소드 호출
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);