import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';
import { getBookWithKey } from '../../api/api';
import { RootState } from '../../store';
import './modal.scss';

export default function Modal() {
    const book_key = useSelector((state: RootState) => state.book.value);

    const book = useAsync(async () => {
        if (!book_key) return;

        return getBookWithKey(book_key);
    }, [book_key]);

    if (book.loading) return (
        <div className="modal">
            <div className="modal__paper">
                <div>Loading...</div>
            </div>
        </div>
    );

    if (book.error || !book.value) return (
        <div className="modal">
            <div className="modal__paper">
                <div>Not found</div>
            </div>
        </div>
    );

    const { title, authors, identifiers, publish_date, publishers, covers } = book.value;

    return (
        <div className="modal">
            <div className="modal__paper">
                <img className="modal__img" src={`https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`}></img>
                <div className="modal__info">
                    <div>Title: {title}</div>
                    <div>Authors</div>
                </div>
            </div>
        </div>
    );
}