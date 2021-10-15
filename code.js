// let str = 'abc';
// str[0] = 'd';
// 
// console.log(str);
// 
// let arr = [1,2,3,4,5];
// arr[10] = 6
// 
// console.log(arr);


const root = document.getElementById("root");

function createElement(tag, content, className, parent, position){
    const el = document.createElement(tag);
    el.innerText = content;
    el.classList.add(className);
    parent.insertAdjacentElement(position, el);
    return el;
}
const input = createElement('input', '', 'input', root, 'afterbegin');
const btn = createElement('button', 'add', 'btn', root, 'beforeend');
const ul = createElement('ul', '', 'ul', root, 'beforeend');
const todo = new Array();


btn.onclick = () => {
    // console.log(input.value);
    todo.push(input.value);
    ul.innerHTML = '';
    input.value = '';
    todo.map((item)=>{
        createElement('li', item, 'li', ul, 'beforeend');
    });
};

