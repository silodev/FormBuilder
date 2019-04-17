import axios from 'axios';


export const saveForm = (elements) => {
    console.log(elements)
    axios.post('https://formbuilder-9a288.firebaseio.com/', {hej: 1} )
    .then(response => response.text())
    .catch(err => console.log(err));
}