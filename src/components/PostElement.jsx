import styles from "./PostElement.module.css";

export default function PostElement({
    title,
    body
}) {
    return (
        <article className={styles.post}>
            <h3 className={styles.postTitle}>
                {title}
            </h3>
            <p className={styles.postBody}>
                {body}
            </p>
            <button className="btn edit-btn" title="Edit" >Edit</button>
            <button className="btn delete-btn" title="Delete">Delete</button>
        </article>
    );
}
