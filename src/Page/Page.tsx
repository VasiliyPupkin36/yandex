import ListBooks from "../components/ListBooks";
import SearchInput from "../components/SearchInput/SearchInput";
import './page.scss';


export default function Page() {
    return (
        <>
            <header className="page__header">
                <div className="page__header-container">
                    <SearchInput />
                </div>
            </header>
            <main className="page__main">
                <ListBooks />
            </main>
        </>
    );
}