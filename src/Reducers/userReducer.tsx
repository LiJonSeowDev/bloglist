interface UsersDict<TValue> {
    [key: string]: TValue;
}

export default 
    (state : UsersDict<boolean> = {} , // defaulting state to null for initial values
    action : any) => {
    

    switch( action.type ){
    case  
        'FETCH_USER':
        {
            if (state[action.payload.id]){ return state}
            else {
                let newState = {...state};
                newState[action.payload.id] = action.payload.username;

                return newState;
            }
        }
        default :
        {
            return state;
        }
    }
}