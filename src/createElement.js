export function createElement(tag, content, className, parent, position){
    const el = document.createElement(tag);
    el.innerText = content;
    el.classList.add(className);
    parent.insertAdjacentElement(position, el);
    return el;
}