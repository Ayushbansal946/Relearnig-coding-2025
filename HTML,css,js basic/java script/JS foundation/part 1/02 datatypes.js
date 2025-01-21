/* string / number / boolean /bigint / undefined / null / object / symbol / character / float
*/
let str1="abc";
let num=10;
let bol=true;
let dec=10n;
let e=undefined;
let nul=null;
let obj=("red" ,"green","blue");// dont use {} for object that dosent contain key value pair
let obj1=["red" ,"green","blue"];// dont use [] for array object that dosent contain key value pair
let obj2 = { name:"ayush bansal" , age:27 };// let obj2={ name:"ayush", age:27};
let sim=Symbol("abc");
let ch='a';
let fnum=10.5;
console.log(typeof str1);
console.log(typeof  num);
console.log(typeof bol);
console.log(typeof dec);
console.log(typeof e);
console.log(typeof nul);
console.log(typeof obj);//console will log object 3 times beacuse we have declared object three times
console.log(typeof obj1);// console will log object all times beacuse we have declared array object with three times
console.log(typeof obj2);//console will log object two times beacuse we have declared object two times
console.log(typeof sim);
console.log(typeof ch);
console.log(typeof fnum);
// output of this code will be
console.log("\n  \n ");//string
console.log(str1);//string
console.log(num);//number 
console.log(bol);//boolean
console.log(dec);//bigint 
console.log(e);//undefined
console.log(nul);//null
console.log(obj1);//object will only log once because we have it is taking the last declared object
console.log(obj2);//object
console.log(sim);//symbol
console.log(ch);//string
console.log(fnum);//number