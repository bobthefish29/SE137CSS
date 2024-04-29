var buttons = document.querySelectorAll(`nav button`);

for(let i=0; i<buttons.length; i++){
    
    buttons[i].addEventListener(`click`, butts);

}
//this is the old way of functions
function butts(e)
{
    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.remove(`active`);
    }
    e.target.classList.add(`active`);
    document.querySelector(`#breadcrumbs`).innerHTML = `<a href ="#">${e.target.innerHTML}</a>`;

}

var dropDownButton = document.querySelector(`aside button`);

// dropDownButton.addEventListener(`click`, e=>{
    //This is to have the new short way
// })

dropDownButton.addEventListener(`click`, e=>{
    // the order of class meters
    document.querySelector(`.tray`).classList.toggle(`hide`);
})