import axios from 'axios';
import domain from '../api'

const getData = async (data) => {
    try {
        const response = await axios.get(`${domain}`, data);
        return response.data;
    } catch (err) {
        return err.message
    }
}

export { getData }