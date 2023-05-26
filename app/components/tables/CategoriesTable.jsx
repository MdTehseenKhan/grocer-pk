import TableHead from "./TableHead"

const CategoriesTable = ({ data, headCols }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <TableHead cols={headCols} />

        <tbody>
          {data?.map((name, i) => (
            <tr key={i + name} className="border-b border-gray-700 hover:bg-gray-600">
              <th className="px-4 py-3 font-medium whitespace-nowrap text-white">{name + " " + (i + 1)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesTable
