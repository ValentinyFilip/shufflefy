import './globals.css'
import {Figtree} from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import SupaBaseProvider from "@/providers/SupaBaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Shufflefy',
    description: 'Created for class of web',
}

export const revalidate = 0;

export default async function RootLayout({
    children,}: {
        children: React.ReactNode
}) {
    const userSongs = await getSongsByUserId();
    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <SupaBaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar songs={userSongs}>
                            {children}
                        </Sidebar>
                        <Player />
                    </UserProvider>
                </SupaBaseProvider>
            </body>
        </html>
    )
}
