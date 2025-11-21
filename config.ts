import { openai } from "@ai-sdk/openai";
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

export const MODEL = openai('gpt-5-mini');

function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "MyAI3";
export const OWNER_NAME = "FirstName LastName";

export const WELCOME_MESSAGE = `Hello! I'm ${AI_NAME}, an AI assistant created by ${OWNER_NAME}.`

export const CLEAR_CHAT_TEXT = "New";

export const MODERATION_DENIAL_MESSAGE = "Your message violates our guidelines, I can not answer that";

export const PINECONE_TOP_K = 40;
export const PINECONE_INDEX_NAME = "myai3";