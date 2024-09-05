
# Megaverse Challenge

This project solves the **Crossmint Megaverse Challenge**, where different astral objects such as **Polyanets**, **Soloons**, and **Comeths** are created using a provided API. The code programmatically generates these objects following specified patterns.

## Project Structure

- `src/api/apiClient.ts`: Contains the `MegaverseClient` class that manages all interactions with the Megaverse API.
- `src/challenge1.ts`: Solves Challenge 1 by creating a cross of Polyanets in the Megaverse.
- `src/challenge2.ts`: Solves Challenge 2 by recreating the Crossmint logo using Polyanets, Soloons, and Comeths.

## Technologies Used

- **Node.js**: JavaScript runtime for executing the code.
- **TypeScript**: For static typing and improved code quality.
- **Axios**: For making HTTP requests to the API.
- **dotenv**: For managing environment variables.

## Setup and Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/ylguillen97/megaverse-challenge.git
   
   cd megaverse-challenge
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Create a `.env` file in the root directory with the following content:
   \`\`\`bash
   CANDIDATE_ID="your-candidate-id"
   BASE_URL="https://challenge.crossmint.io/api"
   \`\`\`

5. Compile the TypeScript code:
   \`\`\`bash
   npx tsc
   \`\`\`

## Running the Challenges

### Challenge 1: Creating a Polyanet Cross

To run the first challenge (Polyanet cross):

\`\`\`bash
node dist/challenge1.js
\`\`\`

This will create a cross of Polyanets in a 2D grid.

### Challenge 2: Crossmint Logo with Polyanets, Soloons, and Comeths

To run the second challenge (Crossmint logo):

\`\`\`bash
node dist/challenge2.js
\`\`\`

This will generate the Crossmint logo using Polyanets, Soloons, and Comeths, based on the provided goal map.

## API Client

The `MegaverseClient` class in `src/api/apiClient.ts` handles interactions with the API, including:

- **Creating Polyanets**: `createPolyanet(row, column)`
- **Creating Soloons**: `createSoloon(row, column, color)`
- **Creating Comeths**: `createCometh(row, column, direction)`
- **Fetching Goal Map**: `getGoalMap()`

## Notes

- **Rate Limiting**: The project includes a basic delay mechanism to avoid API rate limits (HTTP 429).
- **Error Handling**: Errors during the creation process are caught and logged to the console.
