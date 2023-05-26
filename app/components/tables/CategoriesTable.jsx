import { DeleteIcon, EditIcon } from "@/assets/icons"
import { Toaster, toast } from "react-hot-toast"
import TableHead from "./TableHead"
import axios from "axios"

const BASE_URL = ""

const CategoriesTable = ({ data, headCols }) => {
  const handleDeleteCategory = (id) => {
    axios
      .delete(`${BASE_URL}/category/delete/${id}`)
      .then(() => {
        toast.success("Category Deleted Successfully")
      })
      .catch(() => {
        toast.error("Category Not Deleted!")
      })
  }

  return (
    <div className="overflow-x-auto">
      <Toaster />

      <table className="w-full text-sm text-left text-gray-400">
        <TableHead cols={headCols} />

        <tbody>
          {data?.map(({ id, name }, i) => (
            <tr key={i + name} className="border-b border-gray-700 hover:bg-gray-600">
              <th className="px-4 py-3 font-medium whitespace-nowrap text-white">{name + " " + (i + 1)}</th>

              <td>
                <button onClick={() => handleDeleteCategory(id)} className="flex gap-2 hover:text-gray-200">
                  <DeleteIcon className="w-5 h-5 text-red-600" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesTable
