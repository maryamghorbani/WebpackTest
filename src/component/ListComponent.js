import "./styles/list-style.css"


class ListComponent {

    createItem(title) {
        const item = document.createElement('li')
        item.innerText = title;

        return item;
    }
    render() {
        const element = document.createElement('ul')

        element.appendChild(this.createItem('item1'))
        element.appendChild(this.createItem('item2'))
        element.appendChild(this.createItem('item3'))
        element.appendChild(this.createItem('item4'))

        return element;
    }
}

export default new ListComponent();