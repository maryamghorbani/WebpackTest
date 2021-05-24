
class ImageComponent {
    render(){
        const element = document.createElement('div');
        element.classList.add('img-box')
        element.innerHTML = 'Hello rocket'

        return element;
    }
}

export default new ImageComponent();