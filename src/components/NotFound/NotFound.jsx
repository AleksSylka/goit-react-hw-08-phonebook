import css from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={css["block"]}>
            <h2 className={css["title"]}>404</h2>
            <p className={css["message"]}>Oooops, page not found!</p>
        </div>
    )
}