import * as type from '../common/types';

const initState = {
    blogs:[]
};

export default function blogReducer(state=initState,acion) {
    switch (acion.type) {
        case type.GET_INTIAL_BLOGS:
            return Object.assign({},state,{blogs: acion.payload.blogs});
        case type.GET_NEXT_BLOGS:
            return Object.assign({},state,{blogs: state.blogs.concat(acion.payload.blogs)});
        default:
            return state;

    }
}