import Piece, { PieceType } from "../Pieces/Piece";

export enum TileColor { BRIGHT, DARK }

interface TileProps {
    color: TileColor;
}

export default function Tile({ color }: TileProps) {

    return (
        <div className={`h-full w-full cursor-pointer
        ${color === TileColor.BRIGHT && "bg-red-300"}
        ${color === TileColor.DARK && "bg-red-900"}
        `}
            onClick={() => alert("")}
        >
            <Piece type={PieceType.PAWN} />
        </div>
    );
}