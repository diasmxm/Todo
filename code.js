const root = document.getElementById('root');

function createElement(tag, content, className, parent, position) {
    const el = document.createElement(tag);
    el.innerText = content;
    el.classList.add(className);
    parent.insertAdjacentElement(position, el);
    return el;
}

const main_columns = createElement('div', '', 'columns', root, 'afterbegin');
main_columns.style.paddingTop = '2em';
const column = createElement('div', '', 'column', main_columns, 'afterbegin');
column.classList.add('is-half');
column.classList.add('is-offset-one-quarter');
const input = createElement('input', '', 'input', column, 'afterbegin');
const column2 = createElement('div', '', 'column', main_columns, 'beforeend');
const btn = createElement('button', 'add', 'button', column2, 'beforeend');
const toggle = createElement('input', '', 'toggle', column2, 'beforeend');
toggle.setAttribute('type', 'checkbox');
btn.classList.add('is-primary');
const ol = createElement('ol', '', 'ol', column, 'beforeend');
ol.style.margin = '1em 0 0 2em';
ol.setAttribute('type', 'A');
const todo = [];
let delete_btns = [];

btn.onclick = () => {
    addTodo();
};

input.onkeydown = e => {
    if (e.code == 'Enter') {
        addTodo();  
    }
};

let flag = false;
toggle.onchange = () => {
    if (!flag) {
        document.body.style.backgroundColor = 'black';
        flag = true;
    } else {
        document.body.style.backgroundColor = 'white';
        flag = false;
    }
};

function addTodo() {
    if (input.value == '') {
        return;
    }
    todo.push(input.value);
    ol.innerHTML = '';
    input.value = '';
    todo.map((item, index) => {
        let li = createElement('li', item, 'li', ol, 'beforeend');
        li.style.marginTop = '1em';
        li.setAttribute('key', index);
        let btn_delete = createElement('button', 'delete', 'button', li, 'beforeend');
        btn_delete.classList.add('is-danger');
        btn_delete.classList.add('is-small');
        btn_delete.style.marginLeft = '3em';
        delete_btns = [];
        delete_btns.push (btn_delete);
        delete_btns.map((btn, index) => {
            btn.onclick = () => {
                const key = btn.parentNode.getAttribute('key');
                todo.splice(key, 1);
                btn.parentNode.remove();
            };
            
        });
    });
}



