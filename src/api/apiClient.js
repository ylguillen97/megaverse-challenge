"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaverseClient = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class MegaverseClient {
    constructor() {
        this.baseUrl = process.env.BASE_URL || "";
        this.candidateId = process.env.CANDIDATE_ID || "";
        if (!this.baseUrl || !this.candidateId) {
            throw new Error("Las variables BASE_URL o CANDIDATE_ID no están definidas en el archivo .env");
        }
    }
    async createPolyanet(row, column) {
        try {
            await axios_1.default.post(`${this.baseUrl}/polyanets`, {
                row,
                column,
                candidateId: this.candidateId,
            });
            console.log(`Polyanet creado en la posición (${row}, ${column})`);
        }
        catch (error) {
            console.error("Error creando Polyanet:", error);
        }
    }
    async deletePolyanet(row, column) {
        try {
            await axios_1.default.delete(`${this.baseUrl}/polyanets`, {
                data: {
                    row,
                    column,
                    candidateId: this.candidateId,
                },
            });
            console.log(`Polyanet eliminado en la posición (${row}, ${column})`);
        }
        catch (error) {
            console.error("Error eliminando Polyanet:", error);
        }
    }
    async createSoloon(row, column, color) {
        try {
            await axios_1.default.post(`${this.baseUrl}/soloons`, {
                row,
                column,
                color,
                candidateId: this.candidateId,
            });
            console.log(`Soloon ${color} creado en (${row}, ${column})`);
        }
        catch (error) {
            console.error("Error creando Soloon:", error);
        }
    }
    async createCometh(row, column, direction) {
        try {
            await axios_1.default.post(`${this.baseUrl}/comeths`, {
                row,
                column,
                direction,
                candidateId: this.candidateId,
            });
            console.log(`Cometh ${direction} creado en (${row}, ${column})`);
        }
        catch (error) {
            console.error("Error creando Cometh:", error);
        }
    }
    async getGoalMap() {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/map/${this.candidateId}/goal`);
            return response.data.goal; // El mapa objetivo es una matriz de strings
        }
        catch (error) {
            console.error("Error obteniendo el mapa objetivo:", error);
            throw error;
        }
    }
}
exports.MegaverseClient = MegaverseClient;
