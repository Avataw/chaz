import Tile, { TileColor } from "./Tile";

interface BoardProps {
    cols: number,
    rows: number
}

export default function Board({ cols, rows }: BoardProps) {

    const tiles = [];

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let alternateColors = row % 2;
            if (alternateColors) {
                tiles.push(col % 2 ? TileColor.BRIGHT : TileColor.DARK);
            } else {
                tiles.push(col % 2 ? TileColor.DARK : TileColor.BRIGHT);
            }
        }
    }

    return (
        <div className="m-auto h-96 w-96 
        grid grid-rows-8 grid-cols-8">
            {tiles.map((color, key) => <Tile color={color} key={key} />)}
        </div>
    );
}