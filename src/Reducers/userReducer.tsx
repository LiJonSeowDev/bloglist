export default 
    (state = null, // defaulting state to null for initial values
    action : any) => {
    

    switch( action.type ){
    case  
        'FETCH_USER':
        {
            return action.payload;
        }
        default :
        {
            return state;
        }
    }
}