import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';
import { getBookWithTitle } from '../../api/api';
import { RootState } from '../../store';
import CardBook from '../CardBook';
import './list-books.scss';


export default function ListBooks() {
    const title = useSelector((state: RootState) => state.search.value);

    const listBooks = useAsync(async () => {
        if (!title) return;

        return getBookWithTitle(title);
    }, [title]);

    if (listBooks.loading) return <div>Loading...</div>;

    if (!listBooks || listBooks.error || !listBooks.value) return null;

    return (
        <div className="list-book">
            {
                listBooks.value.map(book => <CardBook book={book} />)
            }
        </div>
    );
}