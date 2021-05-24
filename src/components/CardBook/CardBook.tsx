import { Book } from '../../api/api';
import './card-book.scss';

interface Props {
    book: Book
}

export default function CardBook({ book }: Props) {
    const { title, author_name, cover_i } = book;

    return (
        <div className="card">
            <div className="card__container-img">
                {
                    cover_i ? (
                        <img
                            src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                            alt=""
                            className="card__img"

                        />

                    ) : (
                        <img
                            src="https://openlibrary.org/images/icons/avatar_book-sm.png"
                            alt=""
                            className="card__img"
                        />
                    )
                }
            </div>
            <div className="card__title">{title}</div>
            <div className="card__author">{author_name}</div>
        </div>
    );
}