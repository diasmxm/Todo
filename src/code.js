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

import { createElement } from './createElement';
import { drawTodos } from './drawTodos';

const main_columns = createElement('div', '', 'columns', root, 'afterbegin');
main_columns.style.paddingTop = '3em';
const column = createElement('div', '', 'column', main_columns, 'afterbegin');
column.classList.add('is-half');
column.classList.add('is-offset-one-quarter');
const input = createElement('input', '', 'input', column, 'afterbegin');
const column2 = createElement('div', '', 'column', main_columns, 'beforeend');
const btn = createElement('button', 'add', 'button', column2, 'beforeend');
const toggle = createElement('input', '', 'toggle', column2, 'beforeEnd');
toggle.setAttribute('type', 'checkbox')
btn.classList.add('is-primary');

const ol = createElement('ol', '', 'ol', column, 'beforeend'); // обертка списка
ol.style.margin = '1em 0 0 2em';
ol.setAttribute('type', 'A');
let todo = [];
let delete_btns = [];

window.onload= () =>{
    todo = JSON.parse(localStorage.getItem('todo'))
    if(todo){
        drawTodos(todo, ol, delete_btns)
    }
}

btn.onclick = () => {
    addTodo();
};

input.onkeydown = (e) => {
    if(e.code == 'Enter') {
        addTodo();
    }
};

let flag = false;
toggle.onchange = () =>{
    if(!flag){
        document.body.style.backgroundColor = 'black';
        flag = true
    }else{
        document.body.style.backgroundColor = 'white';
        flag = false;
    }
}

function addTodo() {
    if(input.value == '') {
        return;
    }
    todo.push(input.value);
    localStorage.setItem('todo', JSON.stringify(todo))
    ol.innerHTML = ''; // тут обнуляем, мы каждый раз перерисовываем элементы
    input.value = '';
    drawTodos(todo, ol, delete_btns)
}




// оформить интерфейс
// input уменьшить
// посередине
// кнопку справа
// li добавить border
// добавление дела на нажатие Enter
// удаление li (добавить для этого кнопку л li)
// редактирование дела

