import { Nunito } from "next/font/google"

import { ClientOnly, Loader, Navbar } from "@/app/components"
import "@/app/globals.css"
import { Suspense } from "react"

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Grocer (PK) | Home",
  description: "Grocery Purchase and Sell App",
}
const font = Nunito({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div id="modal"></div>
        {/* <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pt-20"></div> */}
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  )
}
