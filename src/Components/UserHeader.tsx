import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import {fetchUsers} from '../Actions'

const UserHeader = (prop : any) => {

    useEffect( 
        ()=>{
            if(!prop.users){
                prop.fetchUser(prop.userID)
            }
            console.log(prop.userName);
        }, [prop])

    const renderUser = () => {
        if(prop.userName){
            return(
            <div> {`USER : ${prop.userName}`} </div>
            )
        }
        else{
            return <div> Loading . . . User </div>
        }
    }

    return(
    <React.Fragment>
        {renderUser()}
    </React.Fragment>    
    )
}


const mapStateToProps = (state : any) =>{
    return { users : state.users}
};


export default connect(mapStateToProps, {fetchUsers})(UserHeader);


