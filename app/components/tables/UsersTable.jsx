"use client"

import { DeleteIcon, EditIcon } from "@/assets/icons"
import TableHead from "./TableHead"
import { Toaster, toast } from "react-hot-toast"
import axios from "axios"

const headCols = ["Name", "Role", "Action"]
const BASE_URL = ""

export default function UsersTable({ data }) {
  return (
    <table className="w-full text-sm text-gray-400">
      <Toaster />

      <TableHead cols={headCols} />
      <tbody>
        {data?.map(({ id, name, email, role }, i) => (
          <UserRows key={i + name} id={id} name={name} email={email} role={role} />
        ))}
      </tbody>
    </table>
  )
}

const UserRows = ({ id, name, email, role }) => {
  const handleDeleteUser = () => {
    axios
      .delete(`${BASE_URL}/user/delete/${id}`)
      .then(() => {
        toast.success("User Deleted Successfully")
      })
      .catch(() => {
        toast.error("User Not Deleted!")
      })
  }

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-600">
      <td scope="row" className="flex items-center px-6 pr-20 py-4 whitespace-nowrap text-white">
        <img className="w-10 h-10 rounded-full" src="/images/placeholder.jpg" alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </td>

      <td class="px-4 py-2">
        <span class="text-xs font-medium px-2 py-0.5 rounded bg-blue-900 text-blue-300">{role}</span>
      </td>

      <td className="px-6 py-4 space-x-2">
        <button onClick={handleDeleteUser}>
          <DeleteIcon className="w-5 h-5 text-red-600" />
        </button>
      </td>
    </tr>
  )
}
