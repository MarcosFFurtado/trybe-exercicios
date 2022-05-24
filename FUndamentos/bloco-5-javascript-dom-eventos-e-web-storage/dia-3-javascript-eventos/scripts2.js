function createDaysOfTheWeek() {
    let pegaListaDia = document.querySelector('#days');


    for (let i = 0; i < dezDaysList; i += 1) {
        let dia = dezDaysList[i];
        let itemListaDia = document.createElement('li');

        if (dia === 24 || dia ===31 ){
            itemListaDia.className = 'day holiday';
            itemListaDia.innerText = dia;
        } else if (dia ===4 || dia === 11 || dia === 18){
            itemListaDia.className = 'day friday';
            itemListaDia.innerHTML = dia;
        } else if ( dia ===25 ) {
            itemListaDia.className = 'day holiday friday';
            itemListaDia.innerHTML = dia;
            pegaListaDia.appendChild(itemListaDia);
        } else {
            itemListaDia.innerHTML = dia;
            itemListaDia.className = 'day';
            pegaListaDia.appendChild(itemListaDia);
        }
    }
}
criadorDia()


function criarBotaoFeriado(buttonName){
    let containerBotao = documen.querySelector('.buttons-container');
    let novobotao = document.createElement('button');
    let IdNovoBotao= 'btn-holiday';

    novobotao.innerHTML = buttonName;
    novobotao.id = IdNovoBotao;
    containerBotao.appendChild(novobotao);
};
criarBotaoFeriado('Feriados');

function mostreFeriados(){
    let pegarBotaoFeriado = document.querySelector('#btn-holiday');
    let pegarFeriados = document.querySelectorAll('.holiday');
    let corDeFundo = 'rgb(238,238,238)';
    let novaCor = 'white';

    pegarBotaoFeriado.addEventListener('click', function(){
        for (let i = 0; i < pegarFeriados.lengh ; i +=1){
            if(pegarFeriados[i].style.corDeFundo === novaCor){
                pegarFeriados[i].style.corDeFundo = corDeFundo
            } else {
                pegarFeriados[i].style.corDeFundo = novaCor;
            }
        }
    })
}

//5
function mostreSextas(textoSexta) {
    let pegarBotaoDeSeta = document.querySelector('#btn-friday');
    let sexta = document.getElementsByClassName('friday')
    let novoTextoSexta = 'É Sexta!!!';
    
    pegarBotaoDeSeta.addEventListener('click', function () {
        for (let i = 0; i < pegarFeriados.length; i += 1) {
            if (sexta[i].innerHTML !== novoTextoSexta) {
                pegarFeriados[i].innerHTML = novoTextoSexta
            } else {
                pegarFeriados[i].innerHTML = textoSexta[i];
            }
        }
    })
    
}

let sextasDez = [ 4, 11, 18, 25 ];
mostreSextas(sextasDez);

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  //6
function zoomDoMouse(){
    let dias = document.querySelector('#days');

    dias.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};

zoomDoMouse();

//7
function novaTarefa(tarefa) {

    let tarefaContainer = document.querySelector('.my-tasks');
    let NomeTarefa = document.createElement('span');
  
    NomeTarefa.innerHTML = task;
    tarefaContainer.appendChild(NomeTarefa);
  };
  
  novaTarefa('Projeto:');


  /// parei apenas vendo resultados:
  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');
