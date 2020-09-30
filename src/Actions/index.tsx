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

export {fetchPosts};