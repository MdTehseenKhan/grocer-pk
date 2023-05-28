"use client"

import Select from "react-select"

const CountrySelect = ({ value, options, onChange }) => {
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={options}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option) => <div>{option}</div>}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  )
}

export default CountrySelect
