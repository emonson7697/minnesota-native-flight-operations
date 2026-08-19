import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Minnesota Native Flight Operations",description:"A private aircraft fleet management demo for Minnesota Native Landscape.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
