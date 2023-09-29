import { useEffect, useState } from "react";
import { Book, BookInformation, Review, User } from "../../shared/interfaces/types";
import { toBookInformation } from "../../utils/toBookInformation/toBookInformation";
import { getBooks, getReviews, getUsers } from "../../lib/api";
import { toDictionary } from "../../utils/toDictionary/toDictionary";

import Card from "./Card/Card";


const App = () => {
    const [books, setBooks] = useState<BookInformation[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            Promise.all([getBooks(), getUsers(), getReviews()])
                .then(([fetchedBooks, fetchedUsers, fetchedReviews]) => {
                    const usersDict = toDictionary(fetchedUsers);
                    const reviewsDict = toDictionary(fetchedReviews);
                    const bookInformation = fetchedBooks.map((book) => toBookInformation(book, usersDict, reviewsDict));
                    setBooks(bookInformation)                    
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        fetchBooks();
    }, []);

    return (
        <>
            <h1>Мои книги:</h1>
            {isLoading && <div>Загрузка...</div>}
            {!isLoading &&
                books.map((b) => <Card key={b.id} book={b} />)}
        </>
    );
};

export default App;