import { tool } from "ai";
import { z } from "zod";
import { searchPinecone } from "@/lib/pinecone";

export const vectorDatabaseSearch = tool({
    description: 'Search the vector database for information',
    inputSchema: z.object({
        query: z.string().describe('The query to search the vector database for'),
    }),
    execute: async ({ query }) => {
        return await searchPinecone(query);
    },
});

