import TableHead from "./TableHead"

const ProductsTable = ({ data, headCols }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <TableHead cols={headCols} />

        <tbody>
          {data?.map(({ name, category, price, description, isActive }, i) => (
            <ProductRow
              key={i + name}
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

const ProductRow = ({ name, category, price, description, isActive }) => (
  <tr className="border-b border-gray-700 hover:bg-gray-600">
    <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">
      {name}
    </th>
    <td className="px-4 py-3">{category}</td>
    <td className="px-4 py-3">{price}</td>
    <td className="px-4 py-3 max-w-[200px] truncate">{description}</td>
    <td className="px-4 py-3">{isActive ? "Yes" : "No"}</td>
  </tr>
)
