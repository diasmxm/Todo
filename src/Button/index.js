import { createElement } from '../createElement';

export default class Btn{
    constructor(content, className, parent, position){
        this.content = content;
        this.className = className;
        this.parent = parent;
        this.position = position;
    }
    // создание самого элемента
    // методы добавления классов
    // методы добавления стилей
    $createElement(){
        return createElement('button', this.content, this.className, this.parent, this.position)
    }
    $addClasses(el, arrClasses){
        arrClasses.map((className)=>{
            el.classList.add(className)
        })
    }
}