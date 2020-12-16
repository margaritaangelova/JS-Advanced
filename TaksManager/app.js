function solve() {
    let OpenSection= document.getElementsByTagName('section')[1];
    let progressSection= document.getElementsByTagName('section')[2];
    let completedSection= document.getElementsByTagName('section')[3];

    let addBtn= document.getElementById('add');
    addBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        let task= document.getElementById('task');
        let description= document.getElementById('description');
        let date= document.getElementById('date');

        if(task.value==='' || description.value==='' || date.value===''){
            return;
        }

        let article= document.createElement('article');
        let h3= document.createElement('h3');
        h3.innerText=task.value;
        let pDescription= document.createElement('p');
        pDescription.innerText=`Description: ${description.value}`;
        let pDate= document.createElement('p');
        pDate.innerText=`Due Date: ${date.value}`;

        let div=document.createElement('div');
        div.className='flex';
        let btnStart= document.createElement('button');
        btnStart.className='green';
        btnStart.innerText='Start';
        let btnDelete= document.createElement('button');
        btnDelete.className='red';
        btnDelete.innerText='Delete';

        btnDelete.addEventListener('click', deleteArticle);

        btnStart.addEventListener('click', (event)=> {
            let btnFinish= document.createElement('button');
            btnFinish.className='orange';
            btnFinish.innerText='Finish';

            btnFinish.addEventListener('click', ()=>{
                article.lastElementChild.remove();
                completedSection.lastElementChild.appendChild(article);
            });

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(btnFinish);
            progressSection.lastElementChild.appendChild(article);

        });

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        OpenSection.lastElementChild.appendChild(article);

        task.value='';
        description.value='';
        date.value='';
    });

    function deleteArticle(event){
        event.target.parentElement.parentElement.remove();
    }
}