// switch문 (switch statement)
// break를 사용하지 않을 시 case에 맞는 코드 수행 후 break를 만날 때 까지 뒤 코드를 실행
// 즉 default문까지 전부 실행
let myChoice = 5;

switch(myChoice) {
    case 1:
        console.log('토끼를 선택한 당신, ...');
        break;
    case 2:
        console.log('고양이를 선택한 당신, ...');
        break;
    case 3:
        console.log('코알라를 선택한 당신, ...');
        break;
    case 4:
        console.log('강아지를 선택한 당신, ...');
        break;
    default:
        console.log('1에서 4 사이의 숫자를 선택해주세요.');
}