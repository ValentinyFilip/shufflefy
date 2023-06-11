import './globals.css'
import {Figtree} from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import SupaBaseProvider from "@/providers/SupaBaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Shufflefy',
    description: 'Created for class of web',
}

export default function RootLayout({
    children,}: {
        children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <SupaBaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar>
                            {children}
                        </Sidebar>
                    </UserProvider>
                </SupaBaseProvider>
            </body>
        </html>
    )
}
