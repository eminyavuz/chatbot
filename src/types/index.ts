export type ChatGPTAgent = "user" | "assistant";

export interface ChatGPTMessage {
  id:1;
  role: ChatGPTAgent;
  content: string;
  sources?: string[];
}
