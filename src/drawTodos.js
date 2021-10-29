import { createElement } from './createElement';
import {Btn} from './Button';

export function drawTodos(todo, ol, delete_btns) {   //tуду тут в скобках это аргумент
    todo.map((item, index) => {
        let li = createElement('li', item, 'li', ol, 'beforeend');
        li.style.marginTop = '1em';
        li.setAttribute('key', index)
        let btn_delete = createElement('button', '', 'button', li, 'beforeend');
        btn_delete.classList.add('is-danger');
        btn_delete.classList.add('is-small');
        btn_delete.style.marginLeft = '3em';
        let bucket = createElement('span', '', 'mdi-delete', btn_delete, 'beforeend');
        bucket.classList.add('mdi');
        delete_btns = [];
        delete_btns.push(btn_delete);
        delete_btns.map((btn, index)=>{
            btn.onclick = () =>{
                const key = btn.parentNode.getAttribute('key');
                todo.splice(key, 1);
                localStorage.setItem('todo', JSON.stringify(todo))
                btn.parentNode.remove()
            };
        });
    });
}