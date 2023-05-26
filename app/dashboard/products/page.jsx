"use client"

import { Button, Pagination, ProductModal, ProductsTable, Search } from "@/app/components"
import { useState } from "react"
import { HiPlus } from "react-icons/hi2"

const headCols = ["Product Name", "Category", "Price", "Description", "Active"]
const data = [
  {
    name: "Demo",
    category: "Demo",
    price: "Demo",
    description: "Demo",
    isActive: true,
  },
  {
    name: "Demo",
    category: "Demo",
    price: "Demo",
    description: "Demo",
    isActive: true,
  },
  {
    name: "Demo",
    category: "Demo",
    price: "Demo",
    description: "Demo",
    isActive: true,
  },
  {
    name: "Demo",
    category: "Demo",
    price: "Demo",
    description: "Demo",
    isActive: true,
  },
  {
    name: "Demo",
    category: "Demo",
    price: "Demo",
    description: "Demo",
    isActive: true,
  },
]

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const handleModalOpen = () => setIsOpen((p) => !p)

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
            Add Product
          </Button>
        </div>

        <ProductsTable data={data} headCols={headCols} />

        <nav className="flex justify-center p-4">
          <Pagination totalNumberOfData={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>
      </div>

      <ProductModal isOpen={isOpen} onClose={handleModalOpen} />
    </section>
  )
}
