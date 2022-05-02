const bod = document.querySelector('body');
bod.classList.add('bod');

const btnBegin = document.createElement('button');
btnBegin.textContent = 'Press to start.';
bod.appendChild(btnBegin);

//clear the grid before drawing a new one
function reset() {
    document
    .querySelectorAll('.gridItem')
    .forEach( e => e.parentNode.removeChild(e));
}

function darker (ink) {
    gradient = 5*ink;
    if(ink==0)
        gradient = 0;
    return gradient;
}

function createTable (number){
    const container = document.querySelector('.container');
    reset(); 
    container.setAttribute('style','grid-template-columns: repeat('+ number +', 1fr)');
    let ink =50;
    for(i=1;i<=number*number;i++){
        let divsGrid = new Array();
        divsGrid[i] = document.createElement('div');
        divsGrid[i].classList.add('gridItem');
        container.appendChild(divsGrid[i]);
        //change the div color creating a track over the mouse 
        divsGrid[i].addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'rgb('+darker(ink)+','+darker(ink)+',255)';
            ink--; //decreases the RGB index turning color darker blue
        });
    }
}

btnBegin.addEventListener('click',() => {
    let numberOfDivs = prompt('Type a number of squares per side to draw the grid:');
    while (numberOfDivs <=0 || numberOfDivs>100 || isNaN(numberOfDivs))
    {
        numberOfDivs = prompt('Warning. Enter a number between 0 and 101 (exclusive).')
    }
    createTable(numberOfDivs);
});


 