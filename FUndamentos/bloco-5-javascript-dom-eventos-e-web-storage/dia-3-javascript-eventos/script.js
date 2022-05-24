function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dia = dezDaysList[index];
        let diaitem = document.createElement('li');

        if (dia === 24 | dia === 31) {
            diaitem.className = 'day holiday';
            diaitem.innerHTML = dia;
            getDaysList.appendChild(diaitem);
        } else if (dia === 4 | dia === 11 | dia === 18) {
            diaitem.className = 'day friday';
            diaitem.innerHTML = dia;
            getDaysList.appendChild(diaitem);
        } else if (dia === 25) {
            diaitem.className = 'day holiday friday';
            diaitem.innerHTML = dia;
            getDaysList.appendChild(diaitem);
        } else {
            diaitem.innerHTML = dia;
            diaitem.className = 'day';
            getDaysList.appendChild(diaitem);
        }
    };
};
createDaysOfTheMonth();

//2
function criarBotaoFeriado(nomeBotao) {
    let containerBotao = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    let IdNovoBotao = 'btn-holiday';

    novoBotao.innerHTML = nomeBotao;
    novoBotao.id = IdNovoBotao;
    containerBotao.appendChild(novoBotao);
};
criarBotaoFeriado('Feriados');

//3
function mostreFeriados() {
    let pegarBotaoFeriado = document.querySelector('#btn-holiday');
    let pegarFeriados = document.querySelectorAll('.holiday');
    let corDeFundo = 'rgb(238,238,238)';
    let novaCor = 'darkgreen';

    pegarBotaoFeriado.addEventListener('click', function () {
        for (let i = 0; i < pegarFeriados.length; i += 1) {
            if (pegarFeriados[i].style.backgroundColor === novaCor) {
                pegarFeriados[i].style.backgroundColor = corDeFundo
            } else {
                pegarFeriados[i].style.backgroundColor = novaCor;
            }
        }
    })
}
mostreFeriados();

//4
function criaBotaoSexta(textoRecebido) {
    let containerBsexta = document.querySelector('.buttons-container');
    let novoBotaoSexta = document.createElement('button')
    let IDnovoBotaoSexta = 'btn-friday';

    novoBotaoSexta.innerHTML = textoRecebido;
    novoBotaoSexta.id = IDnovoBotaoSexta;
    containerBsexta.appendChild(novoBotaoSexta);
}

criaBotaoSexta('Sexta-Feira');

//5
function mostreSextas(textoSexta) {
    let pegarBotaoDeSeta = document.querySelector('#btn-friday');
    let sexta = document.getElementsByClassName('friday')
    let novoTextoSexta = 'É Sexta!';
    
    pegarBotaoDeSeta.addEventListener('click', function () {
        for (let i = 0; i < sexta.length; i += 1) {
            if (sexta[i].innerHTML !== novoTextoSexta) {
                sexta[i].innerHTML = novoTextoSexta
            } else {
                sexta[i].innerHTML = textoSexta[i];
            }
        }
    })
    
}

let sextasDez = [ 4, 11, 18, 25 ];
mostreSextas(sextasDez);







