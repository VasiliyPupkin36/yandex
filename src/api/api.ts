export interface Book {
    title: string,
    author_name: Array<string>,
    cover_i: string
}

export async function getBookWithTitle(title: string): Promise<Book[]> {
    const query = new URLSearchParams();

    query.set('title', title);

    const response = await fetch(`http://openlibrary.org/search.json?${query}`);
    const data = await response.json();

    return data.docs.map(({ title, author_name, cover_i }: Book) => ({ title, author_name, cover_i }));
}