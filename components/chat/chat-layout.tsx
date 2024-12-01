import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Settings2, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface ChatLayoutProps {
  children: React.ReactNode
  className?: string
}

export function ChatLayout({ children, className }: ChatLayoutProps) {
  return (
    <Card className={cn("w-full max-w-4xl mx-auto shadow-lg h-[85vh]", className)}>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-2xl font-bold tracking-tight">Chat Interface</CardTitle>
          <CardDescription className="mt-2">
            Modern chat application built with Next.js and shadcn/ui
          </CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="px-4 py-1">
            <Users className="w-4 h-4 mr-2" />
            2 Online
          </Badge>
          <Button variant="ghost" size="icon">
            <Settings2 className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      <Separator />
      {children}
    </Card>
  )
}
