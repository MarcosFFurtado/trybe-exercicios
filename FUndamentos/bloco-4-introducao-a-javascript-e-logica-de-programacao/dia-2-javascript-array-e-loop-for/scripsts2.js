//exercicios
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0, media = 0;
let maiorValor = numbers[0];
let evenN = 0;
let menorValor = numbers[0];

for(let index=0; index < numbers.length ; index +=1 ){
//1
console.log(numbers[index]);
//2
sum = sum + numbers[index];
//3
media = sum/numbers.length;
console.log(sum);
console.log(media);
if (media >= 20) {console.log("media maior que 20")}
else {console.log("media menor que 20")}//4
//5
if (maiorValor<numbers[index]){maiorValor=numbers[index]}
//6
if (numbers[index] % 2 != 0){evenN++}
//7
if (menorValor>numbers[index]){menorValor=numbers[index]}
};
console.log(maiorValor);
console.log(evenN);
console.log(menorValor);

//8
let result = [];
for (let cont=1; cont < 26; cont +=1){
    result.push(cont);
}
console.log(result);

//9
let result2 = [], numero;
for (let ct=0; ct < result.length; ct +=1){
    numero = result[ct]/2;
    result2.push(numero);
}
console.log(result2);

