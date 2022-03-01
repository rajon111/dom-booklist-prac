const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const bookList = document.getElementById('book-list');

btn.addEventListener('click',function(e){
    e.preventDefault()
    // console.log('hello')
    if(title.value == '' && author.value == '' && year.value == '' ){
        alert('Input field is empty')
    }else{
        const parentBody = document.getElementById('book-list')
        const tr = document.createElement('tr')
        tr.innerHTML =`
        <th>${title.value} </th>
        <th> ${author.value}</th>
        <th>${year.value} </th>
        `;
        parentBody.appendChild(tr)
    }
})