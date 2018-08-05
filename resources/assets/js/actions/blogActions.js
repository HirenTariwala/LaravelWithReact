import axios from 'axios';
import * as type from '../common/types';
import * as url from '../common/urls';

export async function getIntialBlogs() {
   const blogs = await axios.get(url.BASE_URL+'blogs');
   return { type: type.GET_INTIAL_BLOGS,payload:blogs.data }
}

export async function getNextBlogs(skip,limit) {
    const blogs = await axios.get(url.BASE_URL+'nextBlogs/'+skip+'/'+limit);
    return { type:type.GET_NEXT_BLOGS,payload: blogs.data }
}