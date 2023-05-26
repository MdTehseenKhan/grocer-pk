"use client"

import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
// import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

import Modal from "./Modal"
import Input from "../inputs/Input"
import { Button } from "@/app/components"

const RegisterModal = ({ isOpen }) => {
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Sign Up"
      // onSubmit={handleSubmit(onSubmit)}
    >
      {/* body */}
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">Welcome to Grocer</div>
          <div className="text-lg font-light text-neutral-500 mt-2">Create an account!</div>
        </div>

        <Input
          id="email"
          label="Email"
          type="email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />

        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>

      {/* footer */}
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
          className="border-2 border-gray-300"
          color="white"
          onClick={() => {
            return
            // signIn("google")
          }}
        >
          <FcGoogle className="mr-3" />
          Continue with Google
        </Button>

        <Button
          color="black"
          onClick={() => {
            return
            // signIn("github")
          }}
        >
          <AiFillGithub className="mr-3" />
          Continue with Github
        </Button>

        <div
          className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
        >
          <p>
            Already have an account?
            <span
              // onClick={onToggle}
              className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
            >
              {" "}
              Log in
            </span>
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default RegisterModal
