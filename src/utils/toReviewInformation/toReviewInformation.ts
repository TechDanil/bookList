import { Review, ReviewInformation, User } from "../../shared/interfaces/types";

export const toReviewInformation = (review: Review, userDict: Record<string, User>): ReviewInformation => {
    return {
        id: review.id,
        text: review.text,
        user: userDict[review.userId],
    };
}