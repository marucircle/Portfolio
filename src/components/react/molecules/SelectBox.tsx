import type React from 'react'
import Styles from '@/styles/react/molecules/select_box.module.scss'

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
    <select onChange={onChange} value={value} className={Styles['select-box']}>
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
