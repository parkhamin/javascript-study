// break과 continue;
let i = 1;

while(i <=10) {
	console.log(i);
	if(i === 7){
		break;
	}
	i++;
}

console.log();

for(let i = 1; i <= 10; i++){
	console.log(i);
	if(i === 7){
		break;
	}
}

console.log();

for(let i = 1; i <= 10; i++){
	if(i % 2 === 0) {
		continue;
	}
	console.log(i);
}

console.log();

while(i <= 10){
	if(i % 2 === 0){
		i++;
		continue;
	}
	console.log(i);
	i++;
}
