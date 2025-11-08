import styles from "./PostElement.module.css";

export default function PostElement() {
    return (
        <article className={styles.post}>
            <h3 className={styles.postTitle}>
                sunt aut facere repellat provident occaecati excepturi optio reprehenderit
            </h3>
            <p className={styles.postBody}>
                quia et suscipit
                suscipit recusandae consequuntur expedita et cum
                reprehenderit molestiae ut ut quas totam
                nostrum rerum est autem sunt rem eveniet architecto
            </p>
        </article>
    );
}
