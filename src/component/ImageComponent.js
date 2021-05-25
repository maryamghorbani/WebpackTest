import './styles/image-style.css';
import firstImage from './images/1.png';


class ImageComponent {

    crateImageTag() {
        const image = document.createElement('img');
        image.alt = 'My Image';
        image.classList.add('image');
        image.src = firstImage;

        return image;
    }

    createTextTag() {
        const text = document.createElement('h2');
        text.innerHTML = 'سلام مریم';

        return text;
    }

    render(){
        const element = document.createElement('div');
        element.classList.add('img-box')

        element.appendChild(this.crateImageTag());
        element.appendChild(this.createTextTag());

        return element;
    }
}

export default new ImageComponent();