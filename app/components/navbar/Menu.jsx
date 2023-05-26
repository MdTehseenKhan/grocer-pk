"use client"
import Link from "next/link"

import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

import { Avatar } from "@/app/components"

const isLoggedIn = true
const isAdmin = true

const menu = [
  {
    id: "item1",
    item: "Change Password",
    link: "/",
    icon: "",
  },
  {
    id: "item2",
    item: "Cart",
    link: "/",
    icon: "",
  },
  {
    id: "item3",
    item: "Logout",
    link: "/",
    icon: "",
  },
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev))

  return (
    <div className="relative">
      {isLoggedIn ? (
        <>
          <div onClick={toggleOpen} className="menuBtn">
            <AiOutlineMenu />
            <Avatar />
          </div>

          {isOpen && (
            <div className="menu">
              {isAdmin && (
                <Link href="/dashboard" className="menuItem">
                  Dashboard
                </Link>
              )}

              {menu?.map(({ id, item, link }) => (
                <Link key={id} href={link} className="menuItem">
                  {item}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <button className="loginBtn">Login</button>
      )}
    </div>
  )
}
