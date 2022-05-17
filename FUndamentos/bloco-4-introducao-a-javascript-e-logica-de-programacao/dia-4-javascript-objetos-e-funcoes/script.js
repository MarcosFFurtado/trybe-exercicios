let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem vinda, '+ info.personagem);

  info.recorrente = 'sim';
  console.log(info);
  
  for (let prop in info){
  console.log(prop);
  }

  for (let valor in info){
    console.log(info[valor]);
    }

    let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'sim',
      };

    console.log(info2);

    // parte 2 funcoes

    function palindromo(palavra){
      for (index in palavra){
          if(palavra[index] != palavra[(palavra.length - 1) - index]){
              return false;
          }
      }
      return true;
    }

    console.log(palindromo('arara'));
    console.log(palindromo('desenvolvabaimento'));

    let harai = [2, 3, 6, 7, 10, 1];
    function indMaiorValor (numbers){
        let indexMaior = 0;
        for (let index in numbers){
            if(numbers[indexMaior] < numbers[index]){
                indexMaior = index;

            }
        }
        return indexMaior;
    }

    console.log(indMaiorValor(harai));
