let headinginput = document.querySelector('#headingColor');
let paragraphinput = document.querySelector('#paragraphColor');
let backgroundinput = document.querySelector('#backgroundColor');
let heading = document.querySelector('.heading');
let paragraph = document.querySelector('.paragraph');
let background = document.querySelector('body');
let btn = document.querySelectorAll('.btn');
let input = document.querySelectorAll('.input');

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', (event) => {
        if ( event.target.id == 'headingbtn' ) {
            heading.style.color = `${headinginput.value}`;    
        } else if ( event.target.id == 'paragraphbtn' ) {
            paragraph.style.color = `${paragraphinput.value}`;    
        } else {
            background.style.background = `${backgroundinput.value}`;
        }
    });
}



