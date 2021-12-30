import axios from 'axios';

const API = 'https://www.superheroapi.com/api.php/6270248763048316';

export const getHeroe = async(id) => {

    const res = await axios.get(`${API}/${id}`);
    const heroe = await res.data;

    return heroe;
}
