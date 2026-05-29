// 값으로서 함수
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
};

function getSuccess() { // 콜백 함수
  return '정답!';
}

function getFail() { // 콜백 함수
  return '오답!';
}

const question = '5 + 3 = ?';

makeQuiz(question, '8', getSuccess, getFail);