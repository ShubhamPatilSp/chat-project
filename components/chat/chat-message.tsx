import { cn } from "@/lib/utils"
import { User, Bot } from "lucide-react"

interface ChatMessageProps {
  message: {
    id: number
    content: string
    sender: "user" | "assistant"
    timestamp: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user"

  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-2 mx-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[70%] relative group",
          isUser && "items-end"
        )}
      >
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm",
            isUser
              ? "bg-primary text-primary-foreground rounded-br-none"
              : "bg-muted rounded-bl-none"
          )}
        >
          {message.content}
        </div>
        <span
          className={cn(
            "text-xs text-muted-foreground px-1",
            isUser && "text-right"
          )}
        >
          {message.timestamp}
        </span>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}
