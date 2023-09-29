import { BookInformation } from "../../../shared/interfaces/types";

interface Props {
    book: BookInformation
}

const Card = ({ book }: Props) => {
    return (
        <>
            <h3>{book.name}</h3>
            <p>
                <b>Автор</b>: {book.author?.name}
            </p>
            <p>
                <b>Описание</b>: {book.description}
            </p>
            <p>
                <b>Отзыв: </b>
                {book.reviews.map((r) => `${r.text} (${r.user.name})`).join(", ") ||
                    "-"}
            </p>
        </>
    );
};

export default Card;