import PostElement from "./PostElement.jsx";

export default function Posts({
    posts
}) {

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