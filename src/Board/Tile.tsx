export enum TileColor { BRIGHT, DARK }

interface TileProps {
    color: TileColor;
}

export default function Tile({ color }: TileProps) {

    return (
        <div className={`h-full w-full
        ${color === TileColor.BRIGHT && "bg-red-300"}
        ${color === TileColor.DARK && "bg-red-900"}
        `}>
        </div>
    );
}