"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = require("./api/apiClient");
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// Crear instancia del cliente
const client = new apiClient_1.MegaverseClient();
async function createPolyanetsFromGoal() {
    try {
        const goalMap = await client.getGoalMap();
        for (let row = 0; row < goalMap.length; row++) {
            for (let column = 0; column < goalMap[row].length; column++) {
                const entity = goalMap[row][column];
                if (entity === "POLYANET") {
                    await client.createPolyanet(row, column);
                    await delay(1000); // Añadir un retraso de 1 segundo entre solicitudes
                }
            }
        }
        console.log("Polyanets creados exitosamente.");
    }
    catch (error) {
        console.error("Hubo un error al crear los Polyanets:", error);
    }
}
async function createComethsFromGoal() {
    try {
        const goalMap = await client.getGoalMap();
        for (let row = 0; row < goalMap.length; row++) {
            for (let column = 0; column < goalMap[row].length; column++) {
                const entity = goalMap[row][column];
                if (entity.endsWith("COMETH")) {
                    const direction = entity.split("_")[0].toLowerCase();
                    await client.createCometh(row, column, direction);
                    await delay(1000); // Añadir un retraso de 1 segundo entre solicitudes
                }
            }
        }
        console.log("Comeths creados exitosamente.");
    }
    catch (error) {
        console.error("Hubo un error al crear los Comeths:", error);
    }
}
async function createSoloonsFromGoal() {
    try {
        const goalMap = await client.getGoalMap();
        for (let row = 0; row < goalMap.length; row++) {
            for (let column = 0; column < goalMap[row].length; column++) {
                const entity = goalMap[row][column];
                if (entity.endsWith("SOLOON")) {
                    const color = entity.split("_")[0].toLowerCase();
                    await client.createSoloon(row, column, color);
                    await delay(1000); // Añadir un retraso de 1 segundo entre solicitudes
                }
            }
        }
        console.log("Soloons creados exitosamente.");
    }
    catch (error) {
        console.error("Hubo un error al crear los Soloons:", error);
    }
}
// Función para crear todos los objetos astrales en orden con retrasos
async function createMegaverse() {
    try {
        await createPolyanetsFromGoal(); // Crear los Polyanets primero
        await createComethsFromGoal(); // Crear los Comeths después
        await createSoloonsFromGoal(); // Finalmente, crear los Soloons
    }
    catch (error) {
        console.error("Hubo un error al crear el Megaverso:", error);
    }
}
// Ejecutar la creación del Megaverso
createMegaverse();
