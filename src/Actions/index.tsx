import JSONPlaceholder from '../API/JSONPlaceholder';

const fetchPosts = () => {
    return async (dispatch :any) => {
        const response = await JSONPlaceholder.get('/posts');

        dispatch({
                type : 'FETCH_POST',
                payload : response.data
            });
    }
};


const fetchUser = () => {
    return async (dispatch  : any , id : number) => {
        const response = await JSONPlaceholder.get(`/users/${id}`);

        dispatch({
            type : 'FETCH_USER',
            payload : response.data
        });
    }
}

export {fetchPosts , fetchUser};