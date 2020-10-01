import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts , fetchUsers} from '../Actions';


import UserHeader from './UserHeader';

type Post = { userId : number , id : number, title : string, body : string}

const getUniqueID = ( array : Array<Post>  ) => {
    const mapper = new Map();
    
    for( let i = 0; i< array.length ; i++){
        let id = array[i]

        if( mapper.get(array[i].userId) ){ continue; }
        else{ mapper.set(array[i].userId , true) }
    }

    return mapper;
}

const PostList = ( prop : any ) => {

    useEffect(
        ()=>{
            // Actually it will never be undefined because reducers cannot return undefined so the state cannot be undefined at init. Its most likely [] because that's what we initialize it to at the reducer.
            if( prop.posts.length === 0){ 
                prop.fetchPosts();
            }
            else if( Object.keys(prop.users).length === 0 && prop.users.constructor === Object ){
                prop.posts[0].map(  (post : Post) => {
                    prop.fetchUsers(  post.userId  );
                }  )
            }

            
        }, [prop]
        
    )
//
    const renderList = () => {
        if ((prop.posts !== undefined || prop.posts !== null) && prop.posts.length >0){
            return prop.posts[0].map(
                (post : any) : any=>{
                    return (
                        <div className="item" key={post.id}>
                            <i className="large middle aligned icon user" />
                            <div className="content">
                                <div className="description">
                                    <h2> {post.title} </h2>
                                    <p> {post.body} </p>
                                </div>
                                <UserHeader userName={ prop.users[post.userId] ? prop.users[post.userId] : 'Loading user . . .'  }/>
                            </div>
                        </div>
                    )
                }
            )}
        else {
            return 'Loading . . . Please Wait';
        }

    }




    return (
        <div className="ui relaxed divided list">
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state : any) =>{
    return (
        { 
            posts : state.posts,
            users : state.users
        })
};

export default connect(mapStateToProps, {fetchPosts, fetchUsers})(PostList);