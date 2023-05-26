"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

import Modal from "./Modal"
import Input from "../inputs/Input"
import { createPortal } from "react-dom"

const ProductModal = ({ isOpen, onClose }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // const onSubmit = (data) => {
  //   setIsLoading(true)

  //   axios
  //     .post("/api/register", data)
  //     .then(() => {
  //       toast.success("Registered!")
  //     })
  //     .catch((error) => {
  //       toast.error(error)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return createPortal(
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Add Product"
      actionLabel="Add"
      onClose={onClose}
      // onSubmit={handleSubmit(onSubmit)}
    >
      {/* body */}
      <div className="flex flex-col gap-4">
        <Input id="name" label="Product Name" disabled={isLoading} register={register} errors={errors} required />

        <Input id="category" label="Category" disabled={isLoading} register={register} errors={errors} required />

        <Input
          id="price"
          label="Price"
          type="number"
          formatPrice
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input id="description" label="Description" disabled={isLoading} register={register} errors={errors} required />
      </div>
    </Modal>,
    document.getElementById("modal")
  )
}

export default ProductModal
