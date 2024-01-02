import css from './home.module.css';

export default function Home() {
    return (
        <div className={css.div}>
            <h1 className={css.title}>
                Welcome in your PhoneBook
            </h1>
        </div>
    )
}