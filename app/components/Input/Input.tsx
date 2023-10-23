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
        dark:text-gray-200
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
        className={clsx(`block w-full rounded-md border-0 py-3 px-3 text-gray-700 shadow-sm placeholder:text-gray-700
        focus:ring-violet-600 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:border-neutral-700 dark:text-gray-300 dark:placeholder:text-gray-300`,
        errors[id] && 'focus:ring-rose-500',
        disabled && 'opacity-50 cursor-default'
        )}
      />
    </div>
  </div>
  )
}

export default Input
