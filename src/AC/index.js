import {DELETE_ARTICLE, INCREMENT} from '../constants';


export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArtice(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}
