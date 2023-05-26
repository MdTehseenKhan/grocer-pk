"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HomeIcon, DashboardIcon, CategoryIcon, ProductIcon, UsersIcon, LogoutIcon } from "@/assets/icons"

const sideBar = [
  {
    id: "side0",
    item: "Home",
    link: "/",
    Icon: HomeIcon,
  },
  {
    id: "side1",
    item: "Dashboard",
    link: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    id: "side2",
    item: "Categories",
    link: "/dashboard/categories",
    Icon: CategoryIcon,
  },
  {
    id: "side3",
    item: "Products",
    link: "/dashboard/products",
    Icon: ProductIcon,
  },
  {
    id: "side4",
    item: "Users",
    link: "/dashboard/users",
    Icon: UsersIcon,
  },
]

export default function SideNav() {
  const pathname = usePathname()

  return (
    <aside
      className="
          sideBar
          h-screen
          fixed
          flex
          flex-col
          justify-between
          bg-gray-900
          z-10
        "
    >
      <div
        className="
            sideNavContainer
            p-4
            flex
            flex-col
            gap-3
            text-sm
      "
      >
        {sideBar?.map(({ id, item, link, Icon }) => (
          <Link
            key={id}
            href={link}
            className={`
                sideNavItem
                p-2
                md:p-4
                lg:py-2
                rounded
                md:rounded-lg
                flex
                lg:gap-5
                items-center
                text-white
                hover:bg-gray-700
                cursor-pointer
                ${pathname === link ? "bg-gradient-to-br from-green-500 to-green-700 hover:to-green-900 font-bold" : ""}
              `}
          >
            <Icon className="w-7 h-7" />
            <span className="hidden lg:block pr-10">{item}</span>
          </Link>
        ))}
      </div>

      <div className="p-4">
        <Link
          href="/"
          className="
            p-2
            md:p-4
            lg:py-2
            flex
            gap-5
            items-center
            text-sm
            text-white
            bg-gradient-to-br from-green-600 to-green-900 hover:to-green-950 font-bold
            cursor-pointer
            rounded
            md:rounded-lg    
            "
        >
          <LogoutIcon className="w-7 h-7" />
          <span className="hidden lg:block pr-5">Logout</span>
        </Link>
      </div>
    </aside>
  )
}
