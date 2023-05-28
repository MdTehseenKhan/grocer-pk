"use client"

import { Button, CategoriesTable, CategoryModal, Pagination, Search } from "@/app/components"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { HiPlus } from "react-icons/hi2"

const headCols = ["Category Name", "Actions"]
const data = [
  {
    id: 1,
    name: "Category",
  },
  {
    id: 1,
    name: "Category",
  },
  {
    id: 1,
    name: "Category",
  },
  {
    id: 1,
    name: "Category",
  },
]

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  // const [data, setData] = useState()

  const handleModalOpen = () => setIsOpen((p) => !p)

  // useEffect(() => {
  //   axios
  //     .get("https://grocer-api.vercel.app/category/all")
  //     .then(({ success, data }) => {
  //       if (!success) return
  //       console.log(data)
  //       setData(data)
  //     })
  //     .catch(() => {
  //       console.log("error")
  //       toast.error("Something went wrong!")
  //     })
  // }, [data])

  return (
    <section
      className="
        mx-auto 
        max-w-screen-xl 
        px-4 
        lg:px-12
      "
    >
      <div
        className="
          bg-gray-800 
          relative 
          shadow-[#0005_0_0_7px_1px] 
          sm:rounded-lg 
          overflow-hidden
        "
      >
        <div
          className="
            flex 
            flex-col 
            md:flex-row 
            gap-3 
            items-center 
            justify-between 
            p-4
          "
        >
          <div className="w-full">
            <Search />
          </div>

          <Button className="md:w-auto" onClick={handleModalOpen}>
            <HiPlus className="mr-1" />
            Add Category
          </Button>
        </div>

        <CategoriesTable data={data} headCols={headCols} />

        <nav className="flex justify-center p-4">
          <Pagination totalNumberOfData={data?.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>
      </div>

      <CategoryModal title="Add Category" actionLabel="Add" isOpen={isOpen} onClose={handleModalOpen} />
    </section>
  )
}
