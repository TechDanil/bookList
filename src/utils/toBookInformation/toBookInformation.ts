import { Book, BookInformation, Review, ReviewInformation, User } from "../../shared/interfaces/types";
import { toReviewInformation } from "../toReviewInformation/toReviewInformation";

export const toBookInformation = (book: Book, userDict: Record<string, User>, reviewsDict: Record<string, Review>): BookInformation => {
    return {
        id: book.id,
        name: book.name || "Книга без названия",
        author: userDict[book.authorId],
        reviews: book.reviewIds
            .map(item => {
                const review = reviewsDict[item];

                if (!review) return null;
                return toReviewInformation(review, userDict);
            })
            .filter(Boolean) as ReviewInformation[],
        description: book.description
    };
}