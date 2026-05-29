// Arguments
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments);
  console.log('-----------');
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Young');
printArguments('Young', 'Mark');
printArguments('Young', 'Mark', 'Koby', 'Noel');
