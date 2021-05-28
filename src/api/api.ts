export interface Book {
    title: string,
    author_name: Array<string>,
    cover_i: string,
    edition_key: string
}

export interface ExtendedBook {
    title: string,
    covers: number[],
    authors: {
        name: string,
    }[],
    identifiers: {
        isbn_10?: string[],
        isbn_13?: string[],
    },
    publish_date: string,
    publishers: {
        name: string,
    }[],
}

export interface ExBook {

}

export async function getBookWithTitle(title: string): Promise<Book[]> {
    const query = new URLSearchParams();

    query.set('title', title);

    const response = await fetch(`http://openlibrary.org/search.json?${query}`);
    const data = await response.json();

    return data.docs.map(({ title, author_name, cover_i, edition_key }: Book) => ({ title, author_name, cover_i, edition_key }));
}

export async function getBookWithKey(key: string): Promise<ExtendedBook> {
    const response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${key}&jscmd=data`);
    const data = await response.json();

    const { title, authors, identifiers, publish_date, publishers, covers }: ExtendedBook = data[`OLID:${key}`];

    return { title, authors, identifiers, publish_date, publishers, covers };
}