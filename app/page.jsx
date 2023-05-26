"use client"
import { Container } from "@/app/components"
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/dashboard")

  return (
    <Container>
      {/* <div className="pt-16">
        <h1 className="text-3xl text-green-600">Hello World</h1>
      </div> */}
    </Container>
  )
}
