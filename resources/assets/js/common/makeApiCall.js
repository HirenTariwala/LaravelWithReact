import axios from 'axios';

export async function makeApiCall(url){
    const response = await axios.get(url,{headers:{'Custom':'this is Custom','Authorization':'Test'}});
    return response;
}