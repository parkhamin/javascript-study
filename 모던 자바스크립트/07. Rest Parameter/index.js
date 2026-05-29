// Rest Parameter (...) : arguments는 유사배열이지만 rest parameter는 배열이기 때문에 배열 메소드 사용 가능
function printArguments(...args) {
  console.log(args.splice(0 , 2)); // 가능
  console.log(arguments.splice(0 , 2)) // 불가능
  console.log('-----------');
}

printArguments('Young', 'Mark', 'Koby');
console.log('---------------');

function printRank(first, second, ...others) {
  console.log('레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for(const arg of others){
    console.log(`참가자: ${arg}`);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');