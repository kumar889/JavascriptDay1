const secondInput =document.createElement('input');
document.body.appendChild(secondInput);

const fourthButton = document.createElement('button');
document.body.appendChild(fourthButton);
fourthButton.innerHTML = "BUTTON"

secondInput.addEventListener('input' ,dothis);

function dothis(event){
    console.log(event.target.value)
};