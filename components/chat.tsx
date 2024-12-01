"use client"

import { useState } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Phone, Video, Info, Plus, Image, Paperclip, Smile, SendHorizontal, User } from "lucide-react"
import { ChatMessage } from "./chat/chat-message"
import { ChatSidebar } from "./chat/chat-sidebar"

interface Message {
  id: number
  content: string
  sender: "user" | "assistant"
  timestamp: string
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "How has your day been so far?",
      sender: "assistant",
      timestamp: "10:06 AM"
    },
    {
      id: 2,
      content: "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      sender: "user",
      timestamp: "10:10 AM"
    },
    {
      id: 3,
      content: "That is good to hear!",
      sender: "assistant",
      timestamp: "10:05 AM"
    },
    {
      id: 4,
      content: "Awesome! I am just chilling outside.",
      sender: "user",
      timestamp: "6:44 PM"
    }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    
    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: "Thanks for sharing! That sounds like a great way to spend the day.",
        sender: "assistant",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <h2 className="font-semibold">Jane Doe</h2>
              <p className="text-sm text-muted-foreground">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-2">
          <div className="space-y-2">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <Button type="button" variant="ghost" size="icon" className="h-9 w-9">
              <Plus className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-9 w-9">
              <Image className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-9 w-9">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="button" variant="ghost" size="icon" className="h-9 w-9">
              <Smile className="h-5 w-5" />
            </Button>
            <Button 
              type="submit"
              size="icon"
              className="h-9 w-9"
              disabled={!input.trim()}
            >
              <SendHorizontal className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
