const bod = document.querySelector('body');
bod.classList.add('bod');

// bod.addEventListener('mouseover', e => {
//         bod.setAttribute('style','background-color: black');
// });

const btnBegin = document.createElement('button');
btnBegin.textContent = 'Aperte para começar.';
bod.appendChild(btnBegin);

function reset(container) {
    container.querySelectorAll('.grid-item')
    container.forEach( e => e.parentNode.removeChild(e));
}

function createTable (number){
    const container = document.querySelector('.container');
    //reset(container);
    container.setAttribute('style','grid-template-columns: repeat('+ number +', 1fr)');
    for(i=1;i<=number*number;i++){
       let divsGrid = new Array();
       divsGrid[i] = document.createElement('div');
       divsGrid[i].classList.add('divG');
       container.appendChild(divsGrid[i]);
       //change the div color creating a track over the mouse 
       divsGrid[i].addEventListener('mouseover', e => e.target.style.backgroundColor = 'blue');
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
});

// divsGrid.addEventListener('onmouseover', () => {
//     divsGrid.setAttribute('style','background-color: black');
// });


 