import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ['latin']})

export const metadata = {
  title: 'Shufflefy',
  description: 'Created for class of web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
