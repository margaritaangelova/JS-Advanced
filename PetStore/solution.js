function solve() {
    let buttonElement= document.querySelector('#container button');
    let inputElements=Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement]=inputElements;

    let adoptionUlElement= document.querySelector('#adoption ul');
    let adoptedUlElement= document.querySelector('#adopted ul');

    buttonElement.addEventListener('click', e => {
        e.preventDefault();  //!
        //check if all fields have value
        if(!inputElements.every(x => x.value)){
            return;
        }

        //check if age is a number
        if(!Number(ageElement.value)){
            return;
        }

        //Create list item to adoption
        let liElement= document.createElement('li');
        let pElement= document.createElement('p');
        let spanElement= document.createElement('span');
        let petButtonElement= document.createElement('button');

        pElement.innerHTML= `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.textContent=`Owner: ${ownerElement.value}`;
        petButtonElement.textContent= `Contact with owner`;

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);

        //add list item to #adoption
        adoptionUlElement.appendChild(liElement);

        //Clear all input fields\
        nameElement.value= '';
        ageElement.value= '';
        kindElement.value= '';
        ownerElement.value= '';

        //attach event listener
        petButtonElement.addEventListener('click', petButtonClick);
    });

    function petButtonClick(e){
        let parent= e.currentTarget.parentElement;
        e.currentTarget.remove(); 

        let divElement= document.createElement('div');
        let inputElement= document.createElement('input');
        let takeItButtonElement= document.createElement('button');

        inputElement.setAttribute('placeholder', 'Enter your names');
        takeItButtonElement.textContent= 'Yes! I take it!';

        divElement.appendChild(inputElement);
        divElement.appendChild(takeItButtonElement);

        parent.appendChild(divElement);

        takeItButtonElement.addEventListener('click', onTakeItButtonClick);
    }

    function onTakeItButtonClick(e){
        let parentButtonElement= e.currentTarget.parentElement;
        let liElement= parentButtonElement.parentElement;

        let newOwnerInputElement=liElement.querySelector('input');
        let ownerNameSpanElement=liElement.querySelector('span');
        
        let newOwnerName= newOwnerInputElement.value;

        if(!newOwnerName){
            return;
        }
        
        ownerNameSpanElement.textContent= `New Owner: ${newOwnerName}`;

        adoptedUlElement.appendChild(liElement);

        parentButtonElement.remove();

        let checkedButtonElement= document.createElement('button');
        checkedButtonElement.textContent= 'Checked';

        liElement.appendChild(checkedButtonElement);

        checkedButtonElement.addEventListener('click', e=>{
            //liElement.remove();
            e.currentTarget.parent.remove()
        })
    }
}

