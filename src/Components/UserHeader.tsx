import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import {fetchUser} from '../Actions'

const UserHeader = (prop : any) => {

    useEffect( 
        ()=>{
            if(!prop.users){
                prop.fetchUser(prop.userID)
            }
            console.log(prop.users);
        }, [prop])

    const renderUser = () => {
        if(prop.users){
            return(
            <div> {prop.users} </div>
            )
        }
        else{
            return <div> Loading . . . User</div>
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


export default connect(mapStateToProps, {fetchUser})(UserHeader);


