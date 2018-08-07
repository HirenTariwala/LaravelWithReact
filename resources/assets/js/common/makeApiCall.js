import axios from 'axios';

export async function makeApiCall(url){
    const response = await axios.get(url);
    return response;
}