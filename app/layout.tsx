import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Chat Interface - Built with Next.js and shadcn/ui",
  description: "A beautiful chat interface built with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark:bg-slate-950",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
