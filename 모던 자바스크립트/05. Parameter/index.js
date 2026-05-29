// Parameter: 함수 선언 부분에서 소괄호 안에 작성되는 것
function greeting(name = 'Hamin', interest) {
  console.log(`Hi! My name is ${name}!`);
  console.log(`I like ${interest}!`);
}

// Argument: 함수 호출 부분에서 파라미터로 전달하는 값에 해당
greeting('Javascript', 'Music');
greeting();