const My_Input = document.createElement('input');
document.body.appendChild(My_Input);
My_Input.placeholder = 'Enter text';

const Btn = document.createElement('button');
document.body.appendChild(Btn);
Btn.innerHTML = 'Add'

const UL = document.createElement('ul');
document.body.appendChild(UL);

Btn.addEventListener('click',showInput);

function showInput(){


    const text =document.createTextNode(My_Input.value);
    const LI = document.createElement('li');
    UL.appendChild(LI);
    LI.appendChild(Text);
    document.querySelector('input').value = ' ';
}