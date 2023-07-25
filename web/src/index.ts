import * as wasm from "friendly-chess";

let chess = wasm.ChessWasm.new();

chess.load_fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

try {
  let a = chess.moves_for_square("a2");
  console.log(a);
} catch (e) {
  console.log(e);
}
console.log(chess.get_fen());
console.log(chess.turn());
