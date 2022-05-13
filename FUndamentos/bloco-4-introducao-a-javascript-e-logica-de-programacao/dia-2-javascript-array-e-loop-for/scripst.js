// conteudos do dia

//exercicio 1
let menuServices;
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
console.log(menu.length);
console.log(menu[1])
for (let index=0; index < menu.length ; index+=1 ){
if (menu[index] == 'Serviços'){
menuServices = index;}}
console.log(menuServices);

// exercicio 1 for/of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let listaNomes of names){
    console.log(listaNomes);
}

