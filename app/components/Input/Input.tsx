'use client'

import clsx from 'clsx'
import React from 'react'
import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
  disabled?: boolean;
}


const Input:React.FC<InputProps> = ({errors,id,label,register,disabled,required, type})=>{
  return (
    <div>
    <label 
      htmlFor={id} 
      className="
        block 
        text-sm 
        font-medium 
        leading-6 
        text-gray-800
        dark:text-gray-100
      "
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(`block w-full rounded-md border-0 py-2 px-2 text-gray-900 dark:bg-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
        errors[id] && 'focus:ring-rose-',
        disabled && 'opacity-50 cursor-default'
        )}
      />
    </div>
  </div>
  )
}

export default Input
