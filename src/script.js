import ImageComponent from './component/ImageComponent'
import ListComponent from "./component/ListComponent";
const app = document.querySelector('#app');
app.appendChild(ImageComponent.render())
app.appendChild(ListComponent.render())
