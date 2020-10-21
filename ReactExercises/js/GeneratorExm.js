function * naturalnumbers(){
	let n=1;
	while(true){
		yield n;
		n+=1;
	}
}

const obj = naturalnumbers();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next().value);



// function *generatorFunction(){
// 	console.log("one");
// 	yield 'one';
// 	console.log("two");
// 	yield 'two';

// 	console.log("three");
// 	yield 'three';

// 	console.log("four");
// 	yield 'four';

// }

// const obj=generatorFunction();
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
