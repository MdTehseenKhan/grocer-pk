import axios from "axios"
import TableHead from "./TableHead"
import { Toaster, toast } from "react-hot-toast"
import { DeleteIcon } from "@/assets/icons"

const BASE_URL = ""

const ProductsTable = ({ data, headCols }) => {
  return (
    <div className="overflow-x-auto">
      <Toaster />

      <table className="w-full text-sm text-left text-gray-400">
        <TableHead cols={headCols} />

        <tbody>
          {data?.map(({ id, name, category, price, description, isActive }, i) => (
            <ProductRow
              key={i + name}
              id={id}
              name={name}
              category={category}
              price={price}
              description={description}
              isActive={isActive}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable

const ProductRow = ({ id, name, category, price, description, isActive }) => {
  const handleDeleteProduct = () => {
    axios
      .delete(`${BASE_URL}/product/delete/${id}`)
      .then(() => {
        toast.success("Product Deleted Successfully")
      })
      .catch(() => {
        toast.error("Product Not Deleted!")
      })
  }

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-600">
      <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">
        {name}
      </th>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">{price}</td>
      <td className="px-4 py-3 max-w-[200px] truncate">{description}</td>
      <td className="px-4 py-3">{isActive ? "Yes" : "No"}</td>
      <td className="px-6 py-4 space-x-2">
        <button onClick={handleDeleteProduct}>
          <DeleteIcon className="w-5 h-5 text-red-600" />
        </button>
      </td>
    </tr>
  )
}
