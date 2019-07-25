let a;
a = 3
let b = 'web';
const pi = 3.14;
//한 줄 주석

/*
여러줄
주석  
*/

console.log('Hello');
let sum = 0;
for (let i=1; i<=5; i++) {
    sum = sum + i;
}
console.log(sum); // 10
console.log(i); 

let num = 1;
console.log(1);
console.log(num);
let str1 = 'string';
let str2 = "string";
let bool = true;

console.log(typeof "1")
console.log(typeof 1)

let num1 = 1;
let str1 = String(num1);

let str2 = '1';
let num2 = Number(str2);

let grade = 85;
if(grade>=90){
    console.log('A');
}
else if(grade>=80){
    console.log('B')
}
else {
    console.log("C")
}
 
switch(num%2){
    case 0:
        console.log('짝수');
        break;
    case 1:
        console.log('홀수');
        break;
    default:
        console.log('숫자가 아닙니다.');
        break;
}
for(let i =0;i<10;i++){
    console.log(i);
}

let i = 0
while(i<10){
    console.log(i);
    i++;
}
// 함수 선언식(function declaration)
function sum(a,b){
    return a+b;
}

// 함수 표현식(function expression)
const sum2=function(a,b){
    return a+b;
}
let arr = [1,2,'HTML',true];//배열 선언
console.log(arr.length);//배열 길이 출력
console.log(arr[0]);//배열 0번째 요소 출력
arr[1] = '3'//배열 2번째 요소 값 수정
arr.push(4);//배열 마지막 요소 뒤에 값 추가1
arr[arr.length] = 5; //배열 마지막 요소 뒤에 값 추가2
console.log(arr[20]); //undefined 값 출력

let arr2 = ['A','B','C','D'];
for(let i in arr2){
    console.log(arr2[i]);
}

