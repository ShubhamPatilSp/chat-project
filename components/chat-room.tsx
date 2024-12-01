"use client";

import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isMe: boolean;
  timestamp: Date;
  avatar?: string;
}

export function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "👋 Welcome to the chat! Feel free to start a conversation.",
      isMe: false,
      timestamp: new Date(),
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=faces"
    },
  ]);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isMe: true,
      timestamp: new Date(),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces"
    };
    setMessages(prev => [...prev, newMessage]);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full rounded-lg border bg-background shadow">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Chat Room</h1>
        <p className="text-sm text-muted-foreground">Start chatting with others</p>
      </div>
      
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}