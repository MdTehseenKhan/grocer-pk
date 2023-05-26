"use client"

import { DeleteIcon, EditIcon } from "@/assets/icons"
import TableHead from "./TableHead"

const headCols = ["Name", "Role", "Action"]

export default function UsersTable({ data }) {
  return (
    <table className="w-full text-sm text-gray-400">
      <TableHead cols={headCols} />
      <tbody>
        {data?.map(({ name, email, role, deleteUser }, i) => (
          <UserRows key={i + name} name={name} email={email} role={role} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  )
}

const UserRows = ({ name, email, role, deleteUser }) => {
  const handleDeleteUser = (e, deleteUser) => {
    return
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
      <td className="px-6 py-4">
        {/* <button>
        <EditIcon className="w-5 h-5 text-green-600" />
      </button> */}
        <button onClick={(e) => handleDeleteUser(e, deleteUser)}>
          <DeleteIcon className="w-5 h-5 text-red-600" />
        </button>
      </td>
    </tr>
  )
}
