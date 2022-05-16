let fat = 1;
for (let i = 10; i > 0; i -=1) {
   fat = fat * i;
}
console.log(fat);

let palavra = 'tryber';
let ordemI = '';

for (let i=0; i < palavra.length;  i +=1){
   ordemI += palavra[palavra.length - 1 - i];
}

console.log(ordemI)

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorP = '';
let menorP= '';


for (let i = 0; i < array.length;  i +=1){
  if ((array[i].length) > (maiorP.length)) {
      maiorP=array[i]}
}
console.log(maiorP);

