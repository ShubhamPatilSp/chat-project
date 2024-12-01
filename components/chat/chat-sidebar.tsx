"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MoreHorizontal, Edit2, User } from "lucide-react"

interface Chat {
  id: number
  name: string
  color: string
  lastMessage?: string
  isOnline?: boolean
}

const chats: Chat[] = [
  {
    id: 1,
    name: "Jane Doe",
    color: "from-pink-400 to-rose-500",
    lastMessage: "Jane: Typing...",
    isOnline: true
  },
  {
    id: 2,
    name: "John Doe",
    color: "from-blue-400 to-indigo-500",
    lastMessage: "Last seen 5m ago"
  },
  {
    id: 3,
    name: "Elizabeth Smith",
    color: "from-purple-400 to-violet-500",
    lastMessage: "Online",
    isOnline: true
  },
  {
    id: 4,
    name: "John Smith",
    color: "from-green-400 to-emerald-500",
    lastMessage: "Last seen 1h ago"
  }
]

export function ChatSidebar() {
  return (
    <div className="w-[300px] border-r bg-muted/10">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Chats (4)</h2>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors",
              chat.id === 1 && "bg-muted/30"
            )}
          >
            <div className="relative">
              <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white", chat.color)}>
                <User className="h-5 w-5" />
              </div>
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate">{chat.name}</p>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
