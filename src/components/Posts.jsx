import { useState } from "react";
import PostElement from "./PostElement.jsx";
import PostDeleteModal from "./PostDeleteModal.jsx";

export default function Posts({
    posts,
    forcePostRefresh
}) {
    const [showPostDelete, setShowPostDelete] = useState(false);
    const [selectPostId, setSelectPostId] = useState(null)

    const deleteActionClickHandler = (postId) => {
        setSelectPostId(postId);
        setShowPostDelete(true);
    };
    const closeModalHandler = () => {
        setShowPostDelete(false)
    };

    return (
        <div>
            {posts.map(post => <PostElement
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                onDeleteClick={deleteActionClickHandler}
                onCloseClick={closeModalHandler}
            />)}

            {showPostDelete && <PostDeleteModal
                postId={selectPostId}
                onCloseClick={closeModalHandler}
                forcePostRefresh={forcePostRefresh}
            />}
        </div>
    )
}