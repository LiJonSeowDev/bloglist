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



const fetchUsers = (id : number) => {

    const getId = () =>{
        return id;
    }

    return async (dispatch  : any , state : any , getID = getId ) => {
        const response = await JSONPlaceholder.get(`/users/${getID()}`);

        dispatch({
            type : 'FETCH_USER',
            payload : response.data
        });
    }
}

export {fetchPosts , fetchUsers};