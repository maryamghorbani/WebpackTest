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
    render(){
        const element = document.createElement('div');
        element.classList.add('img-box')

        element.appendChild(this.crateImageTag());

        return element;
    }
}

export default new ImageComponent();