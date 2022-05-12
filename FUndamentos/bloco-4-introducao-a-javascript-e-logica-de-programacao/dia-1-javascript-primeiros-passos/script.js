//1
const a = 123
const b = 32
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//2
if (a>b) {
    console.log ("a é maior que b, a:", a)
}else {
    console.log("b é maior que a, b:", b)
};

//3
const c = 123;
const d = 232;
const e = 245;
if (c > d && c > e) {
    console.log ("c é o maior número", c)
}else if ( d > e) {
    console.log("d é maior número, b:", d)
}else {console.log("c é ó maior número, c:", e)}

//4
const f = -5;
if ( f < 0 ) {
    console.log(f, "é negativo")
} else if ( f > 0){
    console.log(f, "é positivo")
};

//5
const ang1 = 50;
const ang2 = 40;
const ang3 = 90;
let soma = ang1 + ang2 + ang3
if (soma != 180) {
    console.log("false")
} else console.log("true");

//6
const piece = "rainha";
switch (piece.toLowerCase()){
    case "rei":
        console.log("rei uma casa");
        break;
    case "rainha":
        console.log("rainha, coluna inteira");
        break;
    default:
        console.log("peça invalida");
        break;
}// e assim por diante kkkk

//7
const result = 33;
if (result > 100 || result <0 ) {console.log("ERRO, nota ivalida");}
else if (result > 90) {console.log("A");}
else if (result > 80) {console.log("B");}
else if (result > 70) {console.log("C");}
else if (result > 60) {console.log("D");}
else if (result >= 50) {console.log("F");}
else if (result < 50) {console.log("F");}

//8
const x = 1
const y = 5
const z = 3 
let final = false;
if (x % 2 === 0|| y % 2 === 0|| z % 2 === 0) {final= true};
console.log(final);

//9
const g = 11;
const h = 32;
const i = 178;
let par = false;
if ((g % 2 !== 0 || h % 2 !== 0 || i % 2 !== 0)) {par = true};
console.log(par);

//10
const custoA = -10;
const valorV = 1100;
let lucro = 0;
if (custoA <= 0 || valorV <= 0){console.log("ERRO, valor negativo");}
else {
    lucro = (valorV - custoA)*1000 - ((valorV - custoA)*1000)*0.2;
    console.log(lucro);}

//11 AINDA NAO TERMINEI ESSE
const bsalary = 3000;
let INSS = 0;
let IR = 0;
console.log(bsalary);
if (bsalary >= 5189.82) {(INSS = 570.88);}
else if (bsalary >= 2594.93 && bsalary <= 5189.82) {INSS = bsalary*0.11;}
else if (bsalary >= 1566.95 && bsalary <= 2594.92) {INSS = bsalary*0.09;}
else if (bsalary <= 1566.94) {INSS = bsalary*0.08;}
console.log(INSS);
let BSal = bsalary - INSS;
console.log(BSal);
if (BSal >= 4664.68) {(IR = BSal*0.275);}
else if (BSal >= 3751.06 && BSal <= 4664.68) {IR = BSal*0.225;}
else if (BSal >= 2826.66 && BSal <= 3751.05) {IR = BSal*0.15;}
else if (BSal >= 1903.99 && BSal <= 2826.65) {IR = BSal*0.075;}
else if (BSal <= 1903.98) {IR = 0;}
console.log(IR)
console.log(BSal-IR);