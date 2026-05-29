// 메소드 (Method)
// 객체의 프로퍼티에는 어떤 자료형이든 저장 가능
// 프로퍼티의 값으로 함수를 넣어준 경우 -> 메소드
let greetings = {
  sayHello: function () {
    console.log('Hello!');
  },
  sayHi: function () {
    console.log('Hi');
  },
  sayBye: function() {
    console.log('Bye');
  }
};

console.log(greetings.sayHello);
greetings.sayHello();