import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export class MegaverseClient {
  private baseUrl: string;
  private candidateId: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || "";
    this.candidateId = process.env.CANDIDATE_ID || "";

    if (!this.baseUrl || !this.candidateId) {
      throw new Error(
        "Las variables BASE_URL o CANDIDATE_ID no están definidas en el archivo .env"
      );
    }
  }

  async createPolyanet(row: number, column: number): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/polyanets`, {
        row,
        column,
        candidateId: this.candidateId,
      });
      console.log(`Polyanet creado en la posición (${row}, ${column})`);
    } catch (error) {
      console.error("Error creando Polyanet:", error);
    }
  }

  async deletePolyanet(row: number, column: number): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/polyanets`, {
        data: {
          row,
          column,
          candidateId: this.candidateId,
        },
      });
      console.log(`Polyanet eliminado en la posición (${row}, ${column})`);
    } catch (error) {
      console.error("Error eliminando Polyanet:", error);
    }
  }

  async createSoloon(
    row: number,
    column: number,
    color: string
  ): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/soloons`, {
        row,
        column,
        color,
        candidateId: this.candidateId,
      });
      console.log(`Soloon ${color} creado en (${row}, ${column})`);
    } catch (error) {
      console.error("Error creando Soloon:", error);
    }
  }

  async createCometh(
    row: number,
    column: number,
    direction: string
  ): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/comeths`, {
        row,
        column,
        direction,
        candidateId: this.candidateId,
      });
      console.log(`Cometh ${direction} creado en (${row}, ${column})`);
    } catch (error) {
      console.error("Error creando Cometh:", error);
    }
  }

  async getGoalMap(): Promise<string[][]> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/map/${this.candidateId}/goal`
      );
      return response.data.goal; // El mapa objetivo es una matriz de strings
    } catch (error) {
      console.error("Error obteniendo el mapa objetivo:", error);
      throw error;
    }
  }
}
