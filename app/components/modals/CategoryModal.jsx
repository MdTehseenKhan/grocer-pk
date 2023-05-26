"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

import Modal from "./Modal"
import Input from "../inputs/Input"
import { createPortal } from "react-dom"

const BASE_URL = ""

const CategoryModal = ({ isOpen, name = "", title, actionLabel }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)

    axios
      .post(`${BASE_URL}/category/add`, data)
      .then(() => {
        toast.success("Category Added Sucessfully!")
      })
      .catch((error) => {
        toast.error("Category not added!")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return createPortal(
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title={title}
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* body */}
      <div className="">
        <Input id="name" label="Category Name" disabled={isLoading} register={register} errors={errors} required />
      </div>
    </Modal>,
    document.getElementById("modal")
  )
}

export default CategoryModal
