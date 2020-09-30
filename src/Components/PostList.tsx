import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../Actions';


import UserHeader from './UserHeader';

const PostList = ( prop : any ) => {

    useEffect(
        ()=>{
            if( prop.posts.length === 0){
                prop.fetchPosts();
            }
            console.log(prop.posts);
        }, [prop]
        
    )

    const renderList = () => {
        if (prop.posts && prop.posts.length > 0 ){
            return prop.posts.map(
                (post : any) : any=>{
                    return (
                        <div className="item" key={post.id}>
                            <i className="large middle aligned icon user" />
                            <div className="content">
                                <div className="description">
                                    <h2> {post.title} </h2>
                                    <p> {post.body} </p>
                                </div>
                                <UserHeader userID={post.userID}/>
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
    return { posts : state.posts}
};

export default connect(mapStateToProps, {fetchPosts})(PostList);