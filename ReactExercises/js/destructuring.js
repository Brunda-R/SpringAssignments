var a,b,rest;

[a,b]=[1,2];
console.log(a);
console.log(b);

[a,b,...rest]=[1,2,3,4,5];
console.log(a);
console.log(b);
console.log(rest);


({a,b}={a:1,b:2});
console.log(a);
console.log(b);

({a,b,...rest}={a:1,b:2,c:3,d:4});
console.log(a);
console.log(b);
console.log(rest);
