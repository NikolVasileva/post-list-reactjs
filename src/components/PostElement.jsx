import styles from "./PostElement.module.css";

export default function PostElement({
    id,
    title,
    body,
    onDeleteClick,
    onCloseClick
}) {
    return (
        <article className={styles.post}>
            <h3 className={styles.postTitle}>
                {title}
            </h3>
            <p className={styles.postBody}>
                {body}
            </p>
            <button className="btn edit-btn" title="Edit" onClick={onCloseClick}>Edit</button>
            <button className="btn delete-btn" title="Delete" onClick={() => onDeleteClick(id)}>Delete</button>
        </article>
    );
}
