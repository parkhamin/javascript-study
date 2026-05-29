// 객체 (Object)
// 객체와 프로퍼티
// 자바스크립트의 모든 것이 객체다!
// 속성(property): 키, 값의 한 쌍
// 키(property's name)은 문자열 -> 원래대로라면 ""으로 감싸줘야하지만,
// 자바스크립트가 자동으로 형변환을 해줌.
// 값(property's value)는 모든 자료형 가능

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

// 점 표기법 (objectName.propertyName)
console.log(codeit.bornYear);

// 만약, 프로퍼티 네임이 ''로 감싸진 경우에는 프로퍼티에 어떻게 접근하지?
// 대괄호 표기법 (objectName['propertyName'])

// 객체 안의 객체에 접근하려면?
console.log(codeit.bestCourse.title);

// 정의되지 않은 프로퍼티에 접근한 경우 undefined 출력

console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);

console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

console.log(codeit.name !== undefined)
// 'propertyName' in object
console.log('name' in codeit);
