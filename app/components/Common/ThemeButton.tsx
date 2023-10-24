"use client";
import { useTheme } from 'next-themes';
import React from 'react'
import {FaToggleOff,FaToggleOn} from 'react-icons/fa6'


export default function ThemeButton() {

    const { systemTheme, theme, setTheme } = useTheme();

  
    const currentTheme = theme === 'system' ? systemTheme : theme ;
 
  
  return (
    <li className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold cursor-pointer hover:text-neutral-800 dark:text-neutral-400  text-neutral-400 " onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {currentTheme === 'dark' ?  <FaToggleOn className="h-6 w-6" /> :  <FaToggleOff className="h-6 w-6" /> } 
              
            </li>
  )
}
