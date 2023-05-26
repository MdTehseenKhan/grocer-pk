"use client"

import { Pagination, Search, UsersTable } from "@/app/components"
import { useState } from "react"

const data = [
  {
    name: "Md. Tehseen Khan",
    email: "contact.tehseenkhan@gmail.com",
    role: "admin",
    deleteUser: "",
  },
  {
    name: "Md. Maaz Nazeer",
    email: "maaznazeer123@gmail.com",
    role: "admin",
    deleteUser: "",
  },
  {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    role: "customer",
    deleteUser: "",
  },
  {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    role: "customer",
    deleteUser: "",
  },
  {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    role: "customer",
    deleteUser: "",
  },
  {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    role: "customer",
    deleteUser: "",
  },
  {
    name: "John Doe",
    email: "johndoe123@gmail.com",
    role: "customer",
    deleteUser: "",
  },
]

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <section className="relative w-full flex flex-col gap-5">
      <div className="flex items-center justify-end">
        <div className=" w-full md:w-1/2">
          <Search />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <UsersTable data={data} />
      </div>

      <div className="w-full">
        <Pagination totalNumberOfData={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </section>
  )
}
