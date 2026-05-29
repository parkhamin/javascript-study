function welcome(name) {
    console.log('안녕하세요 ' + name + '님!');
};

welcome('박하민');
welcome('강영훈');
welcome('이승수');

function printSquare(x) {
    console.log(x * x);
}

printSquare(2);
printSquare(5);
printSquare(6);

function printSum(num1, num2) {
    console.log(num1 + num2);
}

printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

function introduce(name, birth, nationality, job) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + '입니다.');
    console.log('생년월일은 ' + birth + '이고,');
    console.log('국적은 ' + nationality + '입니다.');
    console.log('직업은 ' + job + '입니다.');
    console.log('잘 부탁드립니다');
}

introduce('박하민', '00.09.20', '한국', '학생')