import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../Actions';

const PostList = ( prop : any ) => {

    useEffect(
        ()=>{
            if( prop.posts.length === 0){
                prop.fetchPosts();
            }
            console.log(prop.posts);
        }, [prop]
        
    )

    return (
        <div>
            PostList
        </div>
    )
}

const mapStateToProps = (state : any) =>{
    return { posts : state.posts}
};

export default connect(mapStateToProps, {fetchPosts})(PostList);