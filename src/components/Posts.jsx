import { useEffect, useState } from "react";
import PostElement from "./PostElement.jsx";

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setPosts(Object.values(data))
        })
    }, [])

    return(
        <div>
            {posts.map(post => <PostElement 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            />)}
        </div>
    )
}