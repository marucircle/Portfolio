import type React from 'react'

export const SelectBox = ({
  value,
  defaultValue,
  options,
  onChange,
}: {
  value: string
  defaultValue: string
  options: string[]
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}) => {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => {
        return (
          <option value={option} selected={option === value} key={option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}
