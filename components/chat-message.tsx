import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  content: string;
  isMe: boolean;
  timestamp: Date;
  avatar?: string;
}

export function ChatMessage({ content, isMe, timestamp, avatar }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3 mb-4", isMe && "flex-row-reverse")}>
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{isMe ? "Me" : "Other"}</AvatarFallback>
      </Avatar>
      <div className={cn("flex flex-col max-w-[70%]", isMe && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2",
            isMe
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          )}
        >
          <p className="text-sm">{content}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1">
          {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  );
}