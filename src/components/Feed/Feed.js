import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Post from './Post/Post';

function Feed() {

    const [posts, setPosts] = useState([])

    const sendPost = (e) =>{
        e.preventDefault();

       
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarTodayIcon} title="Write acticle" color="#7FC15E"/>

                </div>
            </div>
            {posts.map((post)=>(
                <Post />
            ))}
            <Post 
            name="Tom Cruise"
            description="This is a test"
            message= "Wow this is worked"
            />
        </div>
    )
}

export default Feed
