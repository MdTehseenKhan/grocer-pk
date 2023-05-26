import { ClientOnly, SideBar } from "@/app/components"

export const metadata = {
  title: "Dashboard | Grocer (PK)",
  description: "Grocery Purchase and Sell App Dashboard",
}

import "@/app/globals.css"

export default function DashboardLayout({ children }) {
  return (
    <>
      <ClientOnly>
        <SideBar />
      </ClientOnly>
      <div className="mx-auto xl:container">
        <div
          className="
          p-5
          pl-24
          md:pl-28
          lg:pl-64
        "
        >
          {children}
        </div>
      </div>
    </>
  )
}
