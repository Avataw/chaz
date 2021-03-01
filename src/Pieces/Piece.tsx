import King from "./images/King.svg";
import Queen from "./images/Queen.svg";
import Bishop from "./images/Bishop.svg";
import Rook from "./images/Rook.svg";
import Knight from "./images/Knight.svg";
import Pawn from "./images/Pawn.svg";

export enum PieceType {
    KING, QUEEN, BISHOP, ROOK, KNIGHT, PAWN
}

interface PieceProps {
    type: PieceType;
}

export default function Piece({ type }: PieceProps) {

    let src;

    switch (type) {
        case PieceType.KING:
            src = King;
            break;
        case PieceType.QUEEN:
            src = Queen;
            break;
        case PieceType.BISHOP:
            src = Bishop;
            break;
        case PieceType.ROOK:
            src = Rook;
            break;
        case PieceType.KNIGHT:
            src = Knight;
            break;
        default:
            src = Pawn;
    }

    return (
        <div>
            <img src={src} alt={"chess piece"} />
        </div>
    );
}