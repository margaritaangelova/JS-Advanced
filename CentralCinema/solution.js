function solve() {
    let parentDivElement=document.getElementById('container');
    let sectionMovies= document.getElementById('movies');
    let archiveSection= document.getElementById('archive');
    let nameElement= parentDivElement.children[0];
    hallElement= parentDivElement.children[1];
    ticketPriceElement= parentDivElement.children[2];

    let ticketPriceValue= ticketPriceElement.value;
    let onScreenButton=parentDivElement.children[3];

    onScreenButton.addEventListener('click', e=>{
        e.preventDefault();

        if(!nameElement.value || !hallElement.value || !Number(ticketPriceElement.value)){
            return;
        }

        let ulElement=sectionMovies.children[1];

        let liElement= document.createElement('li');
        let spanElement= document.createElement('span');
        spanElement.innerHTML=`<span>${nameElement.value}</span>`
        let strongElement= document.createElement('strong');
        strongElement.innerHTML=`<strong>Hall: ${hallElement.value}</strong>`;
        let divElement= document.createElement('div');
        let priceStrongElement=document.createElement('strong');
        priceStrongElement.textContent= `${ticketPriceElement.value}`;
        let currencyElement=document.createElement('strong');
        currencyElement.textContent= `lv.`;
        let inputElement=document.createElement('input');
        inputElement.setAttribute('placeholder', 'Tickets Sold');
        let archiveButton= document.createElement('button');
        archiveButton.innerHTML= 'Archive';

        divElement.appendChild(priceStrongElement);
        divElement.appendChild(currencyElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(archiveButton);

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(divElement);

        //add list item to #movies
        ulElement.appendChild(liElement);
        sectionMovies.appendChild(ulElement);

        //Clear all input fields\
        nameElement.value='';
        hallElement.value='';
        ticketPriceElement.value='';

        archiveButton.addEventListener('click', e=>{
            if(Number(inputElement.value)){
                let priceAllTickets=document.querySelector(`#movies ul li div strong`);
                let ulArchiveElement=archiveSection.children[1];
                let clearButton=archiveSection.children[2];

                let liArchiveElement= document.createElement('li');
                let deleteButton= document.createElement('button');
                deleteButton.innerHTML= 'Delete';
                let strongTotalamountElement= document.createElement('strong');

                let sum=Number(priceAllTickets.textContent*inputElement.value);

                strongTotalamountElement.innerText=`Total amount: ${sum.toFixed(2)} leva`;

                deleteButton.addEventListener('click', e=>{
                    liArchiveElement.remove();
                });

                clearButton.addEventListener('click', e=>{
                    ulArchiveElement.remove();
                
                });

                liArchiveElement.appendChild(spanElement);
                liArchiveElement.appendChild(strongTotalamountElement);
                liArchiveElement.appendChild(deleteButton);
                ulArchiveElement.appendChild(liArchiveElement);

                liElement.remove();


            }


        });
    });
}