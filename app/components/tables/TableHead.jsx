"use client"

export default function TableHead({ cols }) {
  return (
    <thead
      className="
        text-xs 
        text-left 
        uppercase 
        text-gray-400
        bg-gray-700 
        whitespace-nowrap
      "
    >
      <tr>
        {cols?.map((item, i) => (
          <th key={i + item} scope="col" className="px-6 py-3">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}
