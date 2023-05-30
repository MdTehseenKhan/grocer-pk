"use client"

import { HashLoader } from "react-spinners"

const Loader = () => {
  return (
    <div
      className="
      h-screen
      w-full
      flex 
      justify-center 
      items-center 
    "
    >
      <HashLoader size={100} color="green" />
    </div>
  )
}

export default Loader
