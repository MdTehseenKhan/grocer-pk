"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Container, Avatar } from "@/app/components"
import { SearchIcon, MenuIcon } from "@/assets/icons"

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

import "./Navbar.scss"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev))

  return (
    <header className="py-4 shadow-md w-full fixed z-10 bg-gray-900 text-white">
      <Container>
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <div
            className="
              flex 
              flex-row 
              items-center 
              gap-3
            "
          >
            <div className="relative h-10 w-10">
              <Link href="/">
                <Image src="/images/logo.png" alt="Logo" fill />
              </Link>
            </div>
            <span className="hidden md:block font-bold text-2xl">Grocer</span>
          </div>

          <div className="relative flex flex-row items-center gap-3">
            {/* Search */}
            <div
              className="
                py-2 
                md:border 
                text-sm 
                rounded-full 
                shadow-sm 
                hover:shadow-md 
                cursor-pointer
              "
            >
              <div
                className="
                  px-2 
                  flex 
                  flex-row 
                  items-center
                "
              >
                <input
                  type="text"
                  className="
                    w-0 
                    md:w-auto 
                    outline-none 
                    md:px-4 
                    bg-inherit
                  "
                />
                <button
                  className="
                    p-2 
                    bg-green-500 
                    hover:bg-green-600 
                    rounded-full 
                    text-white
                  "
                >
                  <SearchIcon size={18} />
                </button>
              </div>
            </div>

            <div className="relative">
              {isLoggedIn ? (
                <>
                  <div
                    onClick={toggleOpen}
                    className="
                      px-4 
                      py-2 
                      border 
                      border-neutral-200 
                      flex 
                      flex-row 
                      items-center 
                      gap-3 
                      rounded-full 
                      cursor-pointer 
                      hover:shadow-md
                    "
                  >
                    <MenuIcon />
                    <Avatar />
                  </div>

                  {isOpen && (
                    <div
                      className="
                        absolute 
                        right-0 
                        top-full 
                        flex 
                        flex-col 
                        rounded-xl 
                        shadow-md 
                        shadow-gray-800 
                        overflow-hidden 
                        text-sm 
                        cursor-pointer 
                        whitespace-nowrap 
                        bg-gray-900
                      "
                    >
                      {isAdmin && (
                        <Link
                          href="/dashboard"
                          className="
                            px-4 
                            py-3 
                            hover:bg-gray-700 
                            font-semibold
                          "
                        >
                          Dashboard
                        </Link>
                      )}

                      {menu?.map(({ id, item, link }) => (
                        <Link
                          key={id}
                          href={link}
                          className="
                            px-4 
                            py-3 
                            hover:bg-gray-700 
                            font-semibold  
                          "
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  className="
                    text-white 
                    font-bold 
                    bg-green-500 
                    hover:bg-green-600 
                    rounded-lg 
                    px-4 
                    py-2
                  "
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
