export default 
    (state = [], // defaulting state to null for initial values
    action : any) => {
    

    switch( action.type ){
    case  
        'FETCH_POST':
        {
            return action.payload;
        }
        default :
        {
            return state;
        }
    }
}