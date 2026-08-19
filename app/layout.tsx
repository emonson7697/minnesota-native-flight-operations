import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Minnesota Native Air",description:"A clear, comfortable way to request your next company flight.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},openGraph:{title:"Minnesota Native Air",description:"A clear, comfortable way to request your next company flight.",images:["/og.png"]},twitter:{card:"summary_large_image",title:"Minnesota Native Air",description:"A clear, comfortable way to request your next company flight.",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
