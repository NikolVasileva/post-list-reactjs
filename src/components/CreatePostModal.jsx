import "./CreatePostModal.module.css";

export default function CreatePostModal() {
    return (
        <form>
            <label htmlFor="title">Заглавие</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="body">Текст</label>
            <textarea id="body" name="body"></textarea>

            <button type="submit">Добави коментар</button>
        </form>

    )
}