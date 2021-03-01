import Board from "./Board/Board";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Board cols={8} rows={8} />
    </div>
  );
}