const bod = document.querySelector('body');
bod.classList.add('bod');


const btnBegin = document.createElement('button');
btnBegin.textContent = 'Aperte para começar.';
bod.appendChild(btnBegin);

function createTable (number){
    const container = document.querySelector('.container');
    for(i=1;i<=number;i++){
       let divsGrid = new Array();
       divsGrid[i] = document.createElement('div');
       divsGrid[i].textContent = 'B'+i;
       container.appendChild(divsGrid[i]);
    }
    return null;
}

//const container = document.querySelector('.container');
btnBegin.addEventListener('click',() => {
    let numberOfDivs = prompt('Digite de 1 a 100 o número de quadrados para:');
    while (numberOfDivs <=0 || numberOfDivs>100 || isNaN(numberOfDivs))
    {
        numberOfDivs = prompt('Atenção. Digite um número de 1 a 100.')
    }
    createTable(numberOfDivs);
    alert('Seu número é: '+numberOfDivs);
});


 