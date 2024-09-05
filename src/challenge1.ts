import { MegaverseClient } from "./api/apiClient";
const client = new MegaverseClient();
async function createPolyanetCross() {
  const size = 11;

  for (let row = 2; row < 9; row++) {
    for (let column = 2; column < 9; column++) {
      if (row === column || row + column === size - 1) {
        await client.createPolyanet(row, column);
      }
    }
  }

  console.log("Cruz de Polyanets creada exitosamente.");
}

createPolyanetCross().catch((error) => {
  console.error("Hubo un error al crear la cruz de Polyanets:", error);
});
